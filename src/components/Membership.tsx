import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const individualPlans = [
  {
    name: 'Pleb',
    tagline: 'Start your Bitcoin journey',
    price: '$2.10',
    sats: '~21,000 sats',
    features: [
      'App access & newsfeed',
      'Events calendar',
      'Merchant directory',
      'Stats dashboard',
      'Community meetups',
      'Bitcoin Breakfast invites',
    ],
    cta: 'Start Here',
  },
  {
    name: 'Wholecoiner',
    tagline: 'For committed Bitcoiners',
    price: '$5.99',
    sats: '~60,000 sats',
    popular: true,
    features: [
      'Everything in Pleb',
      'Members-only content',
      'Full directory access',
      '15% event discounts',
      'Wine tastings',
      'Sunrise sessions',
    ],
    cta: 'Level Up',
  },
  {
    name: 'Treasury',
    tagline: 'Shape Bitcoin in Malta',
    price: '$59',
    sats: '~590,000 sats',
    features: [
      'Everything in Wholecoiner',
      'Voting rights',
      'Submit proposals',
      'Quarterly briefings',
      'Bitcoin Boat access',
      'Private dinners & VIP',
    ],
    cta: 'Join Treasury',
  },
];

const corporatePlans = [
  {
    name: 'Startup',
    price: '$210/yr',
    features: ['Directory listing', '2 Wholecoiner memberships', 'Event promotion', 'Merchant map placement'],
  },
  {
    name: 'SME',
    price: '$420/yr',
    popular: true,
    features: ['All Startup benefits', '5 memberships', 'Merchant Mastermind group', 'Logo placement'],
  },
  {
    name: 'Corp',
    price: '$2,100/yr',
    features: ['All SME benefits', '20 Treasury memberships', 'Speaking opportunity', 'Policy roundtables'],
  },
];

export function Membership() {
  return (
    <section id="membership" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Membership</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          Join the Mission
        </h2>
        <p className="text-muted-foreground max-w-xl mb-6">
          Membership isn't a subscription to content. It's access to a scene. Boats, dinners, secret locations.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>Bitcoin-only payments</span>
          <span>·</span>
          <span>Lightning Network via BTCPay Server</span>
        </div>
      </div>

      {/* Individual Plans */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-8">Individual Membership</h3>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {individualPlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-background p-8 lg:p-10 flex flex-col ${plan.popular ? 'ring-1 ring-foreground ring-inset' : ''}`}
            >
              {plan.popular && (
                <span className="text-xs uppercase tracking-widest mb-4">Most Popular</span>
              )}
              <h4 className="font-heading text-2xl mb-1">{plan.name}</h4>
              <p className="text-sm text-muted-foreground mb-6">{plan.tagline}</p>
              <div className="mb-6">
                <span className="font-heading text-3xl">{plan.price}</span>
                <span className="text-muted-foreground">/mo</span>
                <div className="text-xs text-muted-foreground mt-1">{plan.sats}</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <a href="#contact">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Plans */}
      <div className="container py-16 lg:py-24">
        <h3 className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Corporate Membership</h3>
        <p className="text-sm text-muted-foreground mb-8">For businesses committed to Bitcoin adoption in Malta</p>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {corporatePlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-background p-8 ${plan.popular ? 'ring-1 ring-foreground ring-inset' : ''}`}
            >
              {plan.popular && (
                <span className="text-xs uppercase tracking-widest mb-4 block">Most Popular</span>
              )}
              <h4 className="font-heading text-xl mb-1">{plan.name}</h4>
              <div className="font-heading text-2xl mb-4">{plan.price}</div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Questions about membership? Want a custom package?</p>
          <Button variant="outline" asChild>
            <a href="#contact">Contact us to discuss</a>
          </Button>
        </div>
      </div>
    </section>
  );
}