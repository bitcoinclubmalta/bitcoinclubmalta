// Post-build prerender for the 6 money routes (Phase 1, SEO roadmap
// 2026-11-18). The Vite SPA serves one shell for every route, so crawlers
// that do not run JS see a single shared title and no content. This script
// writes a per-route HTML file (dist/<route>/index.html) with that route's
// real title, description, canonical, H1 and opening copy in the served
// HTML, plus JSON-LD. React replaces the prerendered block inside #root
// when the app mounts, so visitors see the full app exactly as before.
//
// Content is taken verbatim from the live pages (SEO props, H1s, opening
// paragraphs, the /site FAQ and the guide's own sections). No invented
// dates, prices or claims. Run after `vite build`: node scripts/prerender.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;
const BASE = 'https://bitcoinclubmalta.com';

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const organization = {
  '@type': 'Organization',
  name: 'Bitcoin Club Malta',
  url: `${BASE}/`,
  logo: `${BASE}/logo.png`,
  foundingDate: '2015',
  description:
    'Bitcoin Club Malta is the home of Bitcoin in Malta since 2015: meetups, merchant adoption and community for Bitcoin in Malta.',
  sameAs: ['https://www.t.me/bitcoinclubmalta', 'https://x.com/bitcoinclubmt'],
  address: { '@type': 'PostalAddress', addressCountry: 'MT' },
};

// Real Q&A from src/components/FAQ.tsx (the /site FAQ section), verbatim.
const faqItems = [
  ['What makes Bitcoin Club Malta different from other crypto groups?',
   "We're Bitcoin-only. No altcoins, no tokens, no distractions. We've been building since 2015, before the hype cycles. Our focus is on real-world adoption: education, merchant onboarding, and policy advocacy. Plus, we actually meet in person."],
  ['Do I need to own Bitcoin to join?',
   "No! We welcome anyone curious about Bitcoin. Many of our most engaged members started as complete beginners. Our Pleb tier is designed exactly for people starting their Bitcoin journey. You'll learn from experienced Bitcoiners and get hands-on help with wallets, Lightning, and more."],
  ['How do I pay for membership?',
   "Bitcoin-only, via Lightning Network. We use BTCPay Server for all payments, completely self-custodial and private. Don't have Bitcoin yet? Attend a free public meetup and we'll help you get set up."],
  ['Can I attend events without being a member?',
   'Yes! Many of our events are open to the public, including the monthly meetup and Bitcoin Breakfast. These are great ways to meet the community before committing to membership. Check our events calendar for which events are public vs. members-only.'],
  ["I'm a business owner. How can BCM help me accept Bitcoin?",
   'Our Merchant Lead can guide you through the entire process, from choosing a payment processor to training your staff. We offer corporate memberships that include directory listings, promotion at events, and access to our Merchant Mastermind group.'],
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const routes = [
  {
    path: '/',
    title: 'Bitcoin Malta | Bitcoin Club Malta',
    description:
      'The home of Bitcoin in Malta since 2015. Bitcoin Club Malta runs meetups, helps merchants accept Bitcoin and grows the Malta Bitcoin community.',
    h1: 'Sound Money, Sound Country',
    body: [
      "The Mediterranean's most Southern Bitcoin destination. Merchant adoption, residency, sunshine and Ftira.",
      'Bitcoin Club Malta is the home of Bitcoin in Malta since 2015, running meetups, helping merchants accept Bitcoin and growing the Malta Bitcoin community.',
    ],
    links: [
      ['/site', 'Bitcoin in Malta: the club, meetups and merchants'],
      ['/malta-bitcoin-map', 'Bitcoin Merchant Map for Malta'],
      ['/the-complete-guide-to-using-bitcoin-in-malta-every-option-explained', 'The Complete Guide to Using Bitcoin in Malta'],
    ],
    schema: [organization],
  },
  {
    path: '/site',
    title: 'Bitcoin in Malta | Meetups, Merchants & Community | Bitcoin Club Malta',
    description:
      'Malta Bitcoin community in one place: Bitcoin Club Malta has grown Bitcoin in Malta since 2015 with regular meetups, 100+ merchants accepting Bitcoin and 500+ members.',
    h1: 'Make Malta a Bitcoin Island',
    body: [
      'Nine years of building Bitcoin in Malta. Education, merchants, policy. Join 500+ members making it happen.',
      'Bitcoin in Malta starts here: regular meetups, 100+ merchants accepting Bitcoin, and a community that has shown up in person since 2015.',
    ],
    links: [
      ['/events', 'Bitcoin events and meetups in Malta'],
      ['/membership', 'Join Bitcoin Club Malta'],
      ['/malta-bitcoin-map', 'Bitcoin Merchant Map for Malta'],
    ],
    schema: [organization, faqSchema],
  },
  {
    path: '/malta-bitcoin-map',
    title: 'Bitcoin Merchant Map | Where to Spend Bitcoin in Malta | Bitcoin Club Malta',
    description:
      'The Bitcoin merchant map for Malta: find cafes, restaurants, bars and shops that accept Bitcoin in Malta, and spend your sats across the island. Powered by btcmap.org.',
    h1: 'Bitcoin Merchant Map for Malta',
    body: [
      'Looking to spend bitcoin in Malta? This bitcoin merchant map shows the cafes, restaurants, bars, shops and services across the island that accept bitcoin, so you can pay with sats wherever you go. The listings come from btcmap.org and are kept current by the community.',
    ],
    links: [
      ['/the-complete-guide-to-using-bitcoin-in-malta-every-option-explained', 'The Complete Guide to Using Bitcoin in Malta'],
      ['/events', 'Bitcoin events and meetups in Malta'],
    ],
    schema: [organization],
  },
  {
    path: '/the-complete-guide-to-using-bitcoin-in-malta-every-option-explained',
    title: 'The Complete Guide to Using Bitcoin in Malta: Every Option Explained | Bitcoin Club Malta',
    description:
      'Everything you need to know about buying, storing, and spending Bitcoin in Malta. From exchanges and ATMs to local merchants and the Lightning Network, the definitive local guide.',
    h1: 'The Complete Guide to Using Bitcoin in Malta: Every Option Explained',
    body: [
      "Malta has one of Europe's most developed Bitcoin ecosystems, from regulated exchanges to Lightning-enabled merchants. This guide covers everything from your first purchase to running your own node.",
      'In this guide: 1. Buying Bitcoin in Malta. 2. Storing Bitcoin Safely. 3. Spending Bitcoin in Malta. 4. The Lightning Network in Malta. 5. Malta\'s Regulatory Environment. 6. The Bitcoin Community in Malta.',
    ],
    links: [
      ['/malta-bitcoin-map', 'Bitcoin Merchant Map for Malta'],
      ['/bitcoin-wallet', 'Bitcoin wallets'],
      ['/events', 'Bitcoin events and meetups in Malta'],
    ],
    schema: [
      organization,
      {
        '@type': 'Article',
        headline: 'The Complete Guide to Using Bitcoin in Malta: Every Option Explained',
        description:
          'Everything you need to know about buying, storing, and spending Bitcoin in Malta. From exchanges and ATMs to local merchants and the Lightning Network, the definitive local guide.',
        author: { '@type': 'Organization', name: 'Bitcoin Club Malta', url: `${BASE}/` },
        publisher: { '@type': 'Organization', name: 'Bitcoin Club Malta', url: `${BASE}/` },
        mainEntityOfPage: `${BASE}/the-complete-guide-to-using-bitcoin-in-malta-every-option-explained`,
      },
    ],
  },
  {
    path: '/events',
    title: 'Bitcoin Events Malta | Meetups, Conferences & Exclusive Experiences',
    description:
      'Join Bitcoin Club Malta events - from casual Bitcoin Breakfasts to exclusive Bitcoin Boat experiences. Public meetups, member events, and Whale exclusives.',
    h1: 'Events Calendar',
    body: [
      'Boats. Breakfasts. Secret Locations. From casual meetups to exclusive experiences.',
      'Weekly Bitcoin Hangout @ Coffee Circus Connections, 3PM - 9PM, Marsaskala. Relax and unwind in the Satoshi South: a relaxed weekly Bitcoin hang bringing together builders, professionals, and total beginners.',
    ],
    links: [
      ['/membership', 'Join Bitcoin Club Malta'],
      ['/site', 'Bitcoin in Malta: the club, meetups and merchants'],
    ],
    schema: [organization],
  },
  {
    path: '/sponsoring-opportunities',
    title: 'Sponsoring Opportunities | Bitcoin Club Malta',
    description:
      'Sponsor Bitcoin Meetup Malta: packages for startups, bitcoin brands and heroes who want to support the community, from logo display at events to full bespoke event production.',
    h1: 'Sponsoring Bitcoin Meetup Malta',
    body: [
      'Starting in 2016 we have organized dozens of meetups and events every year to connect the bitcoin community, share ideas and foster adoption. We love working with bitcoin brands and serving the needs and ideas of our sponsoring partners.',
      'Packages: Startup Sponsor 99€ (logo at the event, sponsor mention on social media and event communications). Satoshi Sponsor 299€ (plus a slot to present your product or service and a display banner at the event). Superhero Sponsor 1275€ (plus full service production of marketing materials, your logo in the aftermovie and event photos). Giga Chad Sponsor: a powerful bespoke event experience, on request.',
    ],
    links: [
      ['/events', 'Bitcoin events and meetups in Malta'],
      ['/membership', 'Join Bitcoin Club Malta'],
    ],
    schema: [organization],
  },
  {
    path: '/membership',
    title: 'Membership | Bitcoin Club Malta',
    description:
      "See if you qualify for Bitcoin Club Malta. Take a 2-minute assessment to access exclusive meetups, merchant deals, and Malta's most active Bitcoin community.",
    h1: "Malta's Bitcoin Club. Not Everyone's Bitcoin Club.",
    body: [
      "Weekly events, vetted merchant deals, and a community that's been meeting in person since 2015. Take the 2-minute assessment to see if you qualify.",
      'What membership gets you: Community (regular meetups, boat days, workshops, and dinners across Malta). Education (workshops on self-custody, Lightning Network, and running your own node). Opportunities (business networking, job opportunities, and partnerships within Malta\'s Bitcoin network).',
    ],
    links: [
      ['/events', 'Bitcoin events and meetups in Malta'],
      ['/site', 'Bitcoin in Malta: the club, meetups and merchants'],
    ],
    schema: [organization],
  },
];

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

function render(route) {
  const canonical = `${BASE}${route.path === '/' ? '/' : route.path}`;
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(route.title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${esc(route.description)}" />`,
  );
  html = html.replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(route.title)}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(route.description)}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(route.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(route.description)}" />`);
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);

  const ld = {
    '@context': 'https://schema.org',
    '@graph': route.schema,
  };
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(ld)}</script>\n  </head>`,
  );

  const prerender = [
    '<main>',
    `<h1>${esc(route.h1)}</h1>`,
    ...route.body.map((p) => `<p>${esc(p)}</p>`),
    '<nav>',
    ...route.links.map(([href, text]) => `<a href="${href}">${esc(text)}</a>`),
    '</nav>',
    '</main>',
  ].join('\n        ');
  html = html.replace('<div id="root"></div>', `<div id="root">\n        ${prerender}\n      </div>`);
  return html;
}

for (const route of routes) {
  const out =
    route.path === '/' ? join(DIST, 'index.html') : join(DIST, route.path.slice(1), 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(route));
  console.log(`prerendered ${route.path} -> ${out.replace(DIST, 'dist')}`);
}
console.log(`done: ${routes.length} routes`);
