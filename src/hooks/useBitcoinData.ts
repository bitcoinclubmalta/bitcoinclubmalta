import { useState, useEffect, useCallback } from 'react';

interface BitcoinData {
  price: number;
  priceChange24h: number;
  satsPerDollar: number;
  blockHeight: number;
  mempoolSize: number;
  mempoolTxCount: number;
  nextBlockFee: number;
  hashRate: string;
  lightningCapacity: number;
  lightningNodes: number;
  lightningChannels: number;
  nextHalvingBlocks: number;
  nextHalvingDays: number;
  nextHalvingHours: number;
  nextHalvingMinutes: number;
}

const HALVING_BLOCK_INTERVAL = 210000;

// Every request gets its own timeout so one slow endpoint can never
// hold the whole dashboard in the loading state.
const fetchJson = async (url: string) => {
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

export function useBitcoinData() {
  const [data, setData] = useState<BitcoinData>({
    price: 0,
    priceChange24h: 0,
    satsPerDollar: 0,
    blockHeight: 0,
    mempoolSize: 0,
    mempoolTxCount: 0,
    nextBlockFee: 0,
    hashRate: '~750 EH/s',
    lightningCapacity: 5346,
    lightningNodes: 10900,
    lightningChannels: 39655,
    nextHalvingBlocks: 0,
    nextHalvingDays: 0,
    nextHalvingHours: 0,
    nextHalvingMinutes: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const calculateHalvingTime = useCallback((blockHeight: number) => {
    const currentHalvingEpoch = Math.floor(blockHeight / HALVING_BLOCK_INTERVAL);
    const nextHalvingBlock = (currentHalvingEpoch + 1) * HALVING_BLOCK_INTERVAL;
    const blocksRemaining = nextHalvingBlock - blockHeight;

    // Average block time is ~10 minutes
    const minutesRemaining = blocksRemaining * 10;
    const days = Math.floor(minutesRemaining / (60 * 24));
    const hours = Math.floor((minutesRemaining % (60 * 24)) / 60);
    const minutes = minutesRemaining % 60;

    return { blocksRemaining, days, hours, minutes };
  }, []);

  const fetchData = useCallback(async () => {
    // All endpoints in parallel, each settling on its own: whatever
    // succeeds updates the dashboard, whatever fails keeps its last
    // known (or default) value instead of blocking everything.
    const [prices, history, mempoolBlocks, blockHeight, fees, hashrate] =
      await Promise.allSettled([
        fetchJson('https://mempool.space/api/v1/prices'),
        fetchJson('https://mempool.space/api/v1/historical-price?currency=USD&period=1d'),
        fetchJson('https://mempool.space/api/v1/fees/mempool-blocks'),
        fetchJson('https://mempool.space/api/blocks/tip/height'),
        fetchJson('https://mempool.space/api/v1/fees/recommended'),
        fetchJson('https://mempool.space/api/v1/mining/hashrate/1w'),
      ]);

    setData((prev) => {
      const next = { ...prev };

      if (prices.status === 'fulfilled' && prices.value.USD) {
        next.price = prices.value.USD;
        next.satsPerDollar = Math.round(100000000 / next.price);
      }

      if (history.status === 'fulfilled' && next.price > 0) {
        const points = history.value.prices || [];
        const price24hAgo = points.length > 0 ? points[points.length - 1].USD : 0;
        if (price24hAgo > 0) {
          next.priceChange24h = ((next.price - price24hAgo) / price24hAgo) * 100;
        }
      }

      if (mempoolBlocks.status === 'fulfilled' && Array.isArray(mempoolBlocks.value)) {
        const totalSize = mempoolBlocks.value.reduce(
          (acc: number, block: { blockSize: number }) => acc + block.blockSize,
          0
        );
        next.mempoolSize = Math.round(totalSize / 1000000);
        next.mempoolTxCount =
          mempoolBlocks.value.length > 0 ? mempoolBlocks.value[0].nTx || 0 : 0;
      }

      if (blockHeight.status === 'fulfilled' && typeof blockHeight.value === 'number') {
        next.blockHeight = blockHeight.value;
        const halving = calculateHalvingTime(blockHeight.value);
        next.nextHalvingBlocks = halving.blocksRemaining;
        next.nextHalvingDays = halving.days;
        next.nextHalvingHours = halving.hours;
        next.nextHalvingMinutes = halving.minutes;
      }

      if (fees.status === 'fulfilled') {
        next.nextBlockFee = fees.value.fastestFee || 0;
      }

      if (hashrate.status === 'fulfilled' && hashrate.value.currentHashrate) {
        next.hashRate = `~${(hashrate.value.currentHashrate / 1e18).toFixed(0)} EH/s`;
      }

      return next;
    });

    setIsLoading(false);
    setError(null);
  }, [calculateHalvingTime]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
