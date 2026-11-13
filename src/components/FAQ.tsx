import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'What makes Bitcoin Club Malta different from other crypto groups?',
    answer: "We're Bitcoin-only. No altcoins, no tokens, no distractions. We've been building since 2015—before the hype cycles. Our focus is on real-world adoption: education, merchant onboarding, and policy advocacy. Plus, we actually meet in person. Boats, dinners, secret locations. It's a scene, not just a subscription.",
  },
  {
    question: 'Do I need to own Bitcoin to join?',
    answer: "No! We welcome anyone curious about Bitcoin. Many of our most engaged members started as complete beginners. Our Pleb tier is designed exactly for people starting their Bitcoin journey. You'll learn from experienced Bitcoiners and get hands-on help with wallets, Lightning, and more.",
  },
  {
    question: 'How do I pay for membership?',
    answer: "Bitcoin-only, via Lightning Network. We use BTCPay Server for all payments—completely self-custodial and private. Don't have Bitcoin yet? Attend a free public meetup and we'll help you get set up. Many members have earned their first sats at our events!",
  },
  {
    question: "What's the difference between membership tiers?",
    answer: 'Pleb ($2.10/mo) gives you basic access—app, events calendar, merchant directory, and public meetups. Wholecoiner ($5.99/mo) unlocks members-only content, event discounts, and exclusive experiences like wine tastings and sunrise sessions. Treasury ($59/mo) is for those who want to shape BCM\'s direction—voting rights, policy roundtables, Bitcoin Boat, private dinners, and secret locations.',
  },
  {
    question: 'Can I attend events without being a member?',
    answer: "Yes! Many of our events are open to the public, including the monthly meetup and Bitcoin Breakfast. These are great ways to meet the community before committing to membership. Check our events calendar for which events are public vs. members-only.",
  },
  {
    question: "I'm a business owner. How can BCM help me accept Bitcoin?",
    answer: 'Our Merchant Lead can guide you through the entire process—from choosing a payment processor to training your staff. We offer corporate memberships that include directory listings, promotion at events, and access to our Merchant Mastermind group. Many Malta businesses have successfully onboarded with our support.',
  },
  {
    question: "What's the Bitcoin Boat?",
    answer: "It's exactly what it sounds like—a boat trip on the Mediterranean, exclusively for Treasury members. We sail, we eat, we discuss Bitcoin and the future of money. Past trips have featured guest speakers, investment discussions, and unforgettable sunsets. It's high-touch networking in a uniquely Maltese setting.",
  },
  {
    question: 'How can I contribute to the community?',
    answer: "We're always looking for volunteers! We have open positions for Community Lead, Content Lead, Education Lead, Merchant Lead, Tech Lead, and Policy Lead. Even without a formal role, you can contribute by attending events, helping newcomers, writing content, or connecting us with potential merchants. Join and let us know your skills!",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-border">
      {/* Section Header */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">FAQ</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4">
          Questions? Answers.
        </h2>
        <p className="text-muted-foreground max-w-xl">
          Everything you need to know about Bitcoin Club Malta.
        </p>
      </div>

      {/* Accordion */}
      <div className="container py-16 lg:py-24 border-b border-border">
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-normal hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Still Have Questions */}
      <div className="container py-16 lg:py-24">
        <div className="border border-border p-8 lg:p-12 text-center max-w-xl mx-auto">
          <h3 className="font-heading text-2xl mb-4">Still have questions?</h3>
          <p className="text-sm text-muted-foreground mb-6">Reach out directly—we're happy to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="https://t.me/bitcoinclubmalta" target="_blank" rel="noopener noreferrer">
                Ask on Telegram
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:info@bitcoinclubmalta.com">
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}