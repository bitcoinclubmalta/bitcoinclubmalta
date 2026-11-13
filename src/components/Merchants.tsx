import { Button } from '@/components/ui/button';

const stats = [
  { value: '100+', label: 'Merchants' },
  { value: '85%', label: 'Lightning Enabled' },
  { value: '6', label: 'Categories' },
  { value: 'Growing', label: 'Weekly' },
];

const merchants = [
  {
    name: 'Plan B Barbershop',
    location: 'Sliema',
    description: 'Bitcoin-native barbershop. Pay in sats, get fresh cuts.',
    category: 'Services',
    featured: true,
    lightning: true,
  },
  {
    name: 'Coffee Circus',
    location: 'Sliema',
    description: 'Specialty coffee shop. Home of Bitcoin Breakfast.',
    category: 'Food & Drink',
    featured: true,
    lightning: true,
  },
  {
    name: 'The Thirsty Barber',
    location: 'Valletta',
    description: 'Cocktail bar with Bitcoin vibes.',
    category: 'Food & Drink',
    lightning: true,
  },
  {
    name: 'Noni Restaurant',
    location: 'Valletta',
    description: 'Fine dining, Lightning payments.',
    category: 'Food & Drink',
    lightning: true,
  },
  {
    name: 'Malta Bitcoin ATM',
    location: 'Multiple Locations',
    description: 'Buy and sell Bitcoin, cash to sats.',
    category: 'Services',
  },
  {
    name: 'BTC Fashion',
    location: 'Online + Pop-ups',
    description: 'Bitcoin-themed apparel and merch.',
    category: 'Retail',
    lightning: true,
  },
];

export function Merchants() {
  return (
    <section id="merchants" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Merchants</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          Spend Sats in Malta
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Growing the circular economy. Over 100 merchants accepting Bitcoin across the island.
        </p>
      </div>

      {/* Stats */}
      <div className="container border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 lg:p-8 text-center">
              <div className="font-heading text-2xl mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Merchants Grid */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {merchants.map((merchant) => (
            <div key={merchant.name} className="bg-background p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{merchant.category}</span>
                {merchant.featured && (
                  <span className="text-xs uppercase tracking-wider">Featured</span>
                )}
              </div>
              <h3 className="font-heading text-xl mb-1">{merchant.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{merchant.location}</p>
              <p className="text-sm text-muted-foreground mb-4">{merchant.description}</p>
              {merchant.lightning && (
                <span className="text-xs border border-border-subtle px-2 py-1">Lightning</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-heading text-2xl mb-4">Explore the Bitcoin Malta Map</h3>
            <p className="text-muted-foreground mb-6">
              Find Bitcoin-accepting businesses near you. Check in, leave reviews, earn badges. Help grow the circular economy.
            </p>
            <Button variant="outline" asChild>
              <a href="/merchants">View All Merchants →</a>
            </Button>
          </div>
          <div className="border border-border p-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Accept Bitcoin at your business?</p>
            <Button variant="outline" asChild>
              <a href="#contact">Join our merchant network</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}