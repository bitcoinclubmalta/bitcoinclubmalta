const testimonials = [
  {
    quote: "Bitcoin Club Malta isn't just a community—it's a movement. The connections I've made here have transformed my understanding of Bitcoin and opened doors I never knew existed.",
    name: 'Marco T.',
    role: 'Treasury Member • Tech Entrepreneur',
    initials: 'MT',
  },
  {
    quote: "The Bitcoin Boat experience was unforgettable. Where else can you discuss monetary policy while sailing the Mediterranean with like-minded individuals?",
    name: 'Sarah K.',
    role: 'Wholecoiner',
    initials: 'SK',
  },
  {
    quote: "As a merchant, BCM helped me integrate Lightning payments in under a week. Now 15% of my customers pay in Bitcoin. The support is incredible.",
    name: 'Giuseppe M.',
    role: 'Corporate Member',
    initials: 'GM',
  },
];

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '98%', label: 'Would Recommend' },
  { value: '85%', label: 'Attend Monthly' },
  { value: '3.2yr', label: 'Avg. Membership' },
];

export function Testimonials() {
  return (
    <section className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Community</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          What Members Say
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Don't take our word for it. Here's what our community has to say about being part of Bitcoin Club Malta.
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

      {/* Testimonials */}
      <div className="container py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-background p-8 lg:p-10 flex flex-col">
              <blockquote className="text-lg leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-sm font-medium">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}