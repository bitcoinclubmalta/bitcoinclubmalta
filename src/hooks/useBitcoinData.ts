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
    try {
      // Fetch Bitcoin price from mempool.space
      const priceResponse = await fetch('https://mempool.space/api/v1/prices');
      const priceData = await priceResponse.json();

      // Fetch the last 24h of hourly prices from mempool.space for the 24h change
      const historyResponse = await fetch(
        'https://mempool.space/api/v1/historical-price?currency=USD&period=1d'
      );
      const historyData = await historyResponse.json();
      
      // Fetch mempool data
      const mempoolResponse = await fetch('https://mempool.space/api/v1/fees/mempool-blocks');
      const mempoolData = await mempoolResponse.json();
      
      // Fetch block height
      const blockHeightResponse = await fetch('https://mempool.space/api/blocks/tip/height');
      const blockHeight = await blockHeightResponse.json();

      // Fetch recommended fees
      const feesResponse = await fetch('https://mempool.space/api/v1/fees/recommended');
      const feesData = await feesResponse.json();

      // Fetch hashrate
      const hashrateResponse = await fetch('https://mempool.space/api/v1/mining/hashrate/1w');
      const hashrateData = await hashrateResponse.json();

      const price = priceData.USD || 0;
      const historyPoints = historyData.prices || [];
      const price24hAgo = historyPoints.length > 0 ? historyPoints[historyPoints.length - 1].USD : 0;
      const priceChange24h = price24hAgo > 0 ? ((price - price24hAgo) / price24hAgo) * 100 : 0;
      const satsPerDollar = price > 0 ? Math.round(100000000 / price) : 0;
      
      // Calculate mempool size and tx count
      const totalMempoolSize = mempoolData.reduce((acc: number, block: { blockSize: number }) => acc + block.blockSize, 0);
      const mempoolSizeVMB = Math.round(totalMempoolSize / 1000000);

      // Calculate halving time
      const halvingInfo = calculateHalvingTime(blockHeight);

      // Format hashrate
      const currentHashrate = hashrateData.currentHashrate || 0;
      const hashRateEH = (currentHashrate / 1e18).toFixed(0);

      setData({
        price,
        priceChange24h,
        satsPerDollar,
        blockHeight,
        mempoolSize: mempoolSizeVMB,
        mempoolTxCount: mempoolData.length > 0 ? mempoolData[0].nTx || 0 : 0,
        nextBlockFee: feesData.fastestFee || 0,
        hashRate: `~${hashRateEH} EH/s`,
        lightningCapacity: 5346,
        lightningNodes: 10900,
        lightningChannels: 39655,
        nextHalvingBlocks: halvingInfo.blocksRemaining,
        nextHalvingDays: halvingInfo.days,
        nextHalvingHours: halvingInfo.hours,
        nextHalvingMinutes: halvingInfo.minutes,
      });
      
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.error('Error fetching Bitcoin data:', err);
      setError('Failed to fetch data');
      setIsLoading(false);
    }
  }, [calculateHalvingTime]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
