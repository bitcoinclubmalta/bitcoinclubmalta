import { useBitcoinData } from '@/hooks/useBitcoinData';

const maltaStats = [
  { value: '500+', label: 'Active Members' },
  { value: '100+', label: 'Malta Merchants' },
  { value: '50+', label: 'Events This Year' },
  { value: '2M+', label: 'Sats Spent Locally' },
];

const policyTargets = [
  { name: 'Bitcoin Treasury', status: 'In Progress' },
  { name: 'BTC Payments', status: 'Advocating' },
  { name: 'Tax Exemption', status: 'Research' },
  { name: 'BTC Tourism', status: 'Building' },
  { name: 'Nomad Visas', status: 'Proposed' },
  { name: 'Startup Sandbox', status: 'Planning' },
];

export function Stats() {
  const { data, isLoading } = useBitcoinData();

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="stats" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Live Network Data</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          Stats & Signals
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Real-time Bitcoin network data. The signal: Bitcoin is growing. Malta is part of it. You're part of it.
        </p>
      </div>

      {/* Network Stats Grid */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {/* Bitcoin Price */}
          <div className="bg-background p-6 lg:p-8">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Bitcoin Price</div>
            <div className="font-heading text-3xl mb-1">{isLoading ? '...' : formatPrice(data.price)}</div>
            <div className="text-sm text-muted-foreground">
              <span className={data.priceChange24h >= 0 ? '' : 'text-destructive'}>
                {data.priceChange24h >= 0 ? '↑' : '↓'} {Math.abs(data.priceChange24h).toFixed(2)}%
              </span>
              <span className="mx-2">·</span>
              <span>1 USD = {formatNumber(data.satsPerDollar)} sats</span>
            </div>
          </div>

          {/* Block Height */}
          <div className="bg-background p-6 lg:p-8">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Block Height</div>
            <div className="font-heading text-3xl">#{formatNumber(data.blockHeight)}</div>
          </div>

          {/* Mempool */}
          <div className="bg-background p-6 lg:p-8">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Mempool</div>
            <div className="font-heading text-3xl">{data.mempoolSize} vMB</div>
          </div>

          {/* Next Block Fee */}
          <div className="bg-background p-6 lg:p-8">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Next Block Fee</div>
            <div className="font-heading text-3xl">{data.nextBlockFee} sat/vB</div>
          </div>
        </div>

        {/* Lightning & Hash Rate */}
        <div className="grid md:grid-cols-2 gap-px bg-border mt-px">
          <div className="bg-background p-6 lg:p-8">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Lightning Network</div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-heading text-2xl">{formatNumber(data.lightningCapacity)} BTC</div>
                <div className="text-xs text-muted-foreground">Capacity</div>
              </div>
              <div>
                <div className="font-heading text-2xl">{formatNumber(data.lightningNodes)}</div>
                <div className="text-xs text-muted-foreground">Nodes</div>
              </div>
              <div>
                <div className="font-heading text-2xl">{formatNumber(data.lightningChannels)}</div>
                <div className="text-xs text-muted-foreground">Channels</div>
              </div>
            </div>
          </div>
          <div className="bg-background p-6 lg:p-8">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Hash Rate</div>
            <div className="font-heading text-3xl">{data.hashRate}</div>
          </div>
        </div>
      </div>

      {/* Malta Progress */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <h3 className="font-heading text-2xl mb-8">Malta Bitcoin Progress</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {maltaStats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 lg:p-8 text-center">
              <div className="font-heading text-3xl mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Policy Targets */}
      <div className="container py-16 lg:py-24">
        <h3 className="font-heading text-2xl mb-8">2030 Policy Targets</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {policyTargets.map((target) => (
            <div key={target.name} className="bg-background p-6 flex items-center justify-between">
              <span>{target.name}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{target.status}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-8 text-center">
          Data updates every 30 seconds • Powered by Mempool.space & CoinGecko
        </p>
      </div>
    </section>
  );
}