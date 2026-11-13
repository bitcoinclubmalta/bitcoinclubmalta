import { Button } from '@/components/ui/button';

const timeline = [
  { year: '2012', event: "World's first regulated Bitcoin hedge fund launches in Malta" },
  { year: '2015', event: 'Bitcoin Club Malta founded — seven strangers in a Gozitan farmhouse' },
  { year: '2017', event: '"Blockchain Island" vision announced; 200+ at meetups' },
  { year: '2018', event: 'VFA Act passes; Malta Blockchain Summit draws 8,500' },
  { year: '2025', event: '9-year anniversary; new campaign launch; MiCA era begins' },
  { year: '2030', event: 'Vision: 10,000 members; 1,000 certifications; Malta is Bitcoin Island', isFuture: true },
];

const pillars = [
  {
    title: 'Members',
    description: 'Build sustainable, engaged membership that funds operations and drives the mission forward.',
  },
  {
    title: 'Merchants',
    description: 'Grow Bitcoin acceptance across Malta businesses, creating a circular economy.',
  },
  {
    title: 'Policy',
    description: 'Advocate for Bitcoin-friendly legislation, positioning Malta as a global leader.',
  },
];

const values = [
  { label: 'Direct', description: 'Say it straight. No corporate speak.' },
  { label: 'Confident', description: 'Nine years of proof.' },
  { label: 'Action-oriented', description: 'Build, ship, educate, advocate.' },
  { label: 'Inclusive', description: 'Open to all who share the mission.' },
];

export function About() {
  return (
    <section id="about" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Our Story</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-2xl md:text-3xl max-w-3xl">
          Nine Years of Building
        </h2>
      </div>

      {/* The Opportunity */}
      <div className="container py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-24 border-b border-border">
        <div>
          <h3 className="font-heading text-2xl mb-6">The Opportunity</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Malta has a unique position in Bitcoin history. We hosted the world's first regulated Bitcoin hedge fund in 2012. We pioneered the VFA Act in 2018—the first comprehensive cryptocurrency legislation globally.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Major exchanges chose Malta. The foundation exists. Now we're building the community infrastructure to match. EU jurisdiction, MiCA-ready, Mediterranean lifestyle, established ecosystem.
          </p>
        </div>
        <div>
          <h4 className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Our Voice</h4>
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.label} className="border border-border p-4">
                <div className="font-medium mb-1">{value.label}</div>
                <div className="text-sm text-muted-foreground">{value.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {timeline.map((item) => (
            <div
              key={item.year}
              className={`p-6 lg:p-8 ${item.isFuture ? 'bg-[hsl(210,25%,25%)] text-white' : 'bg-background'}`}
            >
              <div className={`font-heading text-3xl mb-3 ${item.isFuture ? 'text-accent' : ''}`}>
                {item.year}
              </div>
              <p className="text-sm text-muted-foreground">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Three Pillars */}
      <div className="container py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="bg-background p-8 lg:p-12">
              <h3 className="font-heading text-2xl mb-4">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <a href="/about">Learn more about our mission →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}