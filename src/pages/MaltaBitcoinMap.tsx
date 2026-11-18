import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const comparison = [
  { feature: 'Protects against inflation', btc: '✓', card: '✗', cash: '✗' },
  { feature: 'Transaction fees', btc: '0% – 1.5%', card: '1.5% – 4%', cash: '0%' },
  { feature: 'Final validation', btc: 'Instant', card: '2 – 7 days', cash: 'Instant' },
  { feature: 'Dependent on hardware', btc: 'No (open protocol)', card: 'Yes (terminal)', cash: 'No' },
  { feature: 'Cancellation of payment', btc: 'No', card: 'Yes', cash: 'No' },
  { feature: 'Physical theft', btc: 'No', card: 'No', cash: 'Yes' },
  { feature: 'Tamper-proof', btc: '✓', card: '✓', cash: '✗' },
  { feature: '100% in control of your money', btc: '✓', card: '✗', cash: '✗' },
  { feature: 'Worldwide money, no change fees', btc: '✓', card: '✗', cash: '✗' },
  { feature: 'Passively invest part of your cash', btc: '✓', card: '✗', cash: '✗' },
];

const directBenefits = [
  {
    title: 'Reduce Fees',
    body: 'Accepting payments over the Lightning Network can dramatically reduce your payment processing fees.',
  },
  {
    title: 'No Chargebacks',
    body: 'The cost and friction of card chargebacks is gone. A real cost reduction depending on your business.',
  },
  {
    title: 'Freedom Money',
    body: 'Bitcoin is the only asset you can truly own. Permissionless, inclusive, global, censorship resistant.',
  },
  {
    title: 'Capital Gain',
    body: 'Bitcoin has appreciated in value 12 out of 15 years of its existence. Average annual gain ~100%.',
  },
  {
    title: 'New Demographic',
    body: 'Bitcoiners actively seek out and support merchants that accept Bitcoin, even over cheaper options.',
  },
  {
    title: 'Community Marketing',
    body: 'Get listed on btcmap.org, blink.sv, OrangePillApp and more. Lean into a global community.',
  },
];

const longTermBenefits = [
  {
    title: 'Costs Decrease',
    body: "Bitcoin's limited supply enables a deflationary economy where purchasing power increases over time.",
  },
  {
    title: 'Customers Gain Purchasing Power',
    body: 'On a Bitcoin standard, customers can afford more — including more of what your business offers.',
  },
  {
    title: 'Customers Gain Time',
    body: 'Money that appreciates means fewer hours worked for the same expenses. More time to spend with you.',
  },
];

export default function MaltaBitcoinMap() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Bitcoin Merchant Map | Where to Spend Bitcoin in Malta | Bitcoin Club Malta"
        description="The Bitcoin merchant map for Malta: find cafes, restaurants, bars and shops that accept Bitcoin in Malta, and spend your sats across the island. Powered by btcmap.org."
        canonical="https://bitcoinclubmalta.com/malta-bitcoin-map"
        ogImage="https://bitcoinclubmalta.com/logo.png"
      />
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="section-border">
          <div className="container py-16 lg:py-24 border-b border-border">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Malta Bitcoin Map
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-6">
              Bitcoin Merchant Map for Malta
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Looking to spend bitcoin in Malta? This bitcoin merchant map shows the cafes,
              restaurants, bars, shops and services across the island that accept bitcoin, so you
              can pay with sats wherever you go. The listings come from btcmap.org and are kept
              current by the community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" asChild>
                <a
                  href="https://btcmap.org/map#13/35.8997/14.5147"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the Map →
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">List Your Business</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Embedded map */}
        <section className="section-border">
          <div className="container py-0 border-b border-border">
            <div className="aspect-[16/10] w-full border-x border-border">
              <iframe
                title="Malta Bitcoin Map"
                src="https://btcmap.org/map#13/35.8997/14.5147"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Why Bitcoin comparison */}
        <section className="section-border">
          <div className="container py-16 lg:py-24 border-b border-border">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Why Bitcoin
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl mb-8">
              Bitcoin vs Credit Card vs Cash
            </h2>
            <div className="border border-border overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-normal text-xs uppercase tracking-wider text-muted-foreground">
                      Feature
                    </th>
                    <th className="text-left p-4 font-normal text-xs uppercase tracking-wider">
                      Bitcoin
                    </th>
                    <th className="text-left p-4 font-normal text-xs uppercase tracking-wider text-muted-foreground">
                      Credit Card
                    </th>
                    <th className="text-left p-4 font-normal text-xs uppercase tracking-wider text-muted-foreground">
                      Cash
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i !== comparison.length - 1 ? 'border-b border-border-subtle' : ''}
                    >
                      <td className="p-4">{row.feature}</td>
                      <td className="p-4">{row.btc}</td>
                      <td className="p-4 text-muted-foreground">{row.card}</td>
                      <td className="p-4 text-muted-foreground">{row.cash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Direct benefits */}
        <section className="section-border">
          <div className="container py-16 lg:py-24 border-b border-border">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Merchant Benefits
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl mb-4">Direct & Instant Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Why you should consider accepting Bitcoin as a merchant.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {directBenefits.map((b) => (
                <div key={b.title} className="bg-background p-6 lg:p-8">
                  <h3 className="font-heading text-xl mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-term benefits */}
        <section className="section-border">
          <div className="container py-16 lg:py-24 border-b border-border">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Long-Term
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl mb-10">
              Indirect Benefits Over Time
            </h2>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {longTermBenefits.map((b) => (
                <div key={b.title} className="bg-background p-6 lg:p-8">
                  <h3 className="font-heading text-xl mb-3">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-border">
          <div className="container py-16 lg:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl mb-4">Accept Bitcoin at Your Business</h3>
                <p className="text-muted-foreground mb-6">
                  We help Maltese merchants get set up with Lightning payments and listed on the
                  Malta Bitcoin Map.
                </p>
                <Button variant="outline" asChild>
                  <a href="/#contact">Get in Touch →</a>
                </Button>
              </div>
              <div className="border border-border p-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">Already accept Bitcoin?</p>
                <Button variant="outline" asChild>
                  <a href="https://btcmap.org" target="_blank" rel="noreferrer">
                    Add yourself to btcmap.org
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Keep exploring */}
        <section className="section-border">
          <div className="container py-16 lg:py-24">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Keep Exploring
              </span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-background p-6 lg:p-8">
                <h3 className="font-heading text-xl mb-3">
                  <a
                    href="/the-complete-guide-to-using-bitcoin-in-malta-every-option-explained"
                    className="hover:underline"
                  >
                    Complete guide to using Bitcoin in Malta
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every option for buying, spending and living on Bitcoin in Malta, explained in
                  one place.
                </p>
              </div>
              <div className="bg-background p-6 lg:p-8">
                <h3 className="font-heading text-xl mb-3">
                  <a href="/events" className="hover:underline">
                    Bitcoin meetups and events in Malta
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Meet the community in person at the next Bitcoin Club Malta event.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
