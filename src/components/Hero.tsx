import { Button } from '@/components/ui/button';
import { useBitcoinData } from '@/hooks/useBitcoinData';
import { ArrowDown } from 'lucide-react';
import { LoadingDots } from '@/components/LoadingDots';

export function Hero() {
  const { data, isLoading } = useBitcoinData();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="min-h-screen pt-16 flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-border py-3">
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-dot" />
            <span className="text-muted-foreground">Block #{formatNumber(data.blockHeight)}</span>
          </div>
          <div className={`${data.priceChange24h >= 0 ? 'text-foreground' : 'text-muted-foreground'}`}>
            {data.priceChange24h >= 0 ? '+' : ''}{data.priceChange24h.toFixed(1)}%
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 grid lg:grid-cols-2">
        {/* Left: Hero Text */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 animate-fade-in">
            Make Malta a<br />
            <span className="italic">Bitcoin Island</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md animate-slide-up" style={{ animationDelay: '100ms' }}>
            Nine years of building Bitcoin in Malta. Education, merchants, policy. Join 500+ members making it happen.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Button variant="outline" size="lg" asChild>
              <a href="#membership">Join the Mission</a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#about">Our Story →</a>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 border-t border-border-subtle pt-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
            {[
              { value: '9+', label: 'Years' },
              { value: '500+', label: 'Members' },
              { value: '100+', label: 'Merchants' },
              { value: '50+', label: 'Events/yr' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Live Data Panel */}
        <div className="border-l border-border bg-secondary/30 flex flex-col">
          {/* Bitcoin Price */}
          <div className="border-b border-border p-6 lg:p-8">
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">Bitcoin Price</span>
            </div>
            <div className="font-heading text-4xl lg:text-5xl mb-2">
              {isLoading ? <LoadingDots /> : formatPrice(data.price)}
            </div>
            <div className="text-sm text-muted-foreground">
              1 USD = {formatNumber(data.satsPerDollar)} sats
            </div>
          </div>

          {/* Network Stats Grid */}
          <div className="grid grid-cols-2 flex-1">
            <div className="border-r border-b border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mempool</div>
              <div className="font-heading text-xl">{data.mempoolSize} vMB</div>
            </div>
            <div className="border-b border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hash Rate</div>
              <div className="font-heading text-xl">{data.hashRate}</div>
            </div>
            <div className="border-r border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next Block Fee</div>
              <div className="font-heading text-xl">{data.nextBlockFee} sat/vB</div>
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Lightning</div>
              <div className="font-heading text-xl">{formatNumber(data.lightningCapacity)} BTC</div>
            </div>
          </div>

          {/* Halving Countdown */}
          <div className="border-t border-border p-6 lg:p-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-accent uppercase tracking-wider mb-1">Next Halving</div>
                <div className="text-sm text-muted-foreground">{formatNumber(data.nextHalvingBlocks)} blocks</div>
              </div>
              <div className="flex items-center gap-4 font-mono text-lg">
                <div className="text-center">
                  <div>{data.nextHalvingDays}</div>
                  <div className="text-xs text-muted-foreground">Days</div>
                </div>
                <span className="text-muted-foreground">:</span>
                <div className="text-center">
                  <div>{data.nextHalvingHours}</div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
                <span className="text-muted-foreground">:</span>
                <div className="text-center">
                  <div>{data.nextHalvingMinutes}</div>
                  <div className="text-xs text-muted-foreground">Min</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-border p-6 lg:p-8">
            <p className="text-sm mb-4">Get notified when membership opens</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 px-4 py-2 border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              />
              <Button variant="outline" size="default">
                Notify Me
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="border-t border-border py-6 flex justify-center">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}