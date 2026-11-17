// Content recovered from Wayback Machine snapshots of the previous
// (Lovable) bitcoinclubmalta.com site, 2026-06-08 crawl. Each entry
// records its snapshot timestamp. See OLD-PAGES-INVENTORY.md.

export type OldBlock =
  | { type: "h1" | "h2" | "h3" | "h4" | "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; href: string };

export interface OldPageData {
  path: string;
  snapshot: string;
  title: string;
  description: string;
  extra?: "events" | "merchants";
  blocks: OldBlock[];
}

export const oldPages: OldPageData[] = [
  {
    "path": "/about",
    "snapshot": "20260608045012",
    "title": "About Bitcoin Club Malta | Our Story Since 2015",
    "description": "Building Bitcoin infrastructure in Malta since 2015. Learn about our mission to make Malta a Bitcoin Island through meetups, merchant adoption, and community membership.",
    "blocks": [
      {
        "type": "h1",
        "text": "Eleven Years. No Exit."
      },
      {
        "type": "p",
        "text": "Since 2015. Not talking, shipping. From seven strangers in a Gozitan farmhouse to Malta's leading Bitcoin community."
      },
      {
        "type": "p",
        "text": "We don't believe in hype cycles. We believe in consistent, persistent work toward a single goal: making Malta a Bitcoin Island."
      },
      {
        "type": "h2",
        "text": "Make Malta a Bitcoin Island."
      },
      {
        "type": "p",
        "text": "In-Person, Bitcoin-Only, Sunshine or Rain, Bull or Bear since 2015."
      },
      {
        "type": "h2",
        "text": "Members Are the Club."
      },
      {
        "type": "p",
        "text": "Not customers. Not an audience. Side by side, building Bitcoin Island together."
      },
      {
        "type": "h3",
        "text": "Community"
      },
      {
        "type": "p",
        "text": "You don't join a community. You become part of what makes it. 100+ Bitcoiners showing up every month, the energy, the education, the introductions, that's members, not management."
      },
      {
        "type": "list",
        "items": [
          "Monthly meetups, every month since 2015",
          "Breakfasts, boat days, workshops",
          "A network that compounds over years"
        ]
      },
      {
        "type": "h3",
        "text": "Merchants"
      },
      {
        "type": "p",
        "text": "Every café and restaurant that accepts sats got there because a member walked in first. Members refer, support, and spend, the merchant map grows because the community grows."
      },
      {
        "type": "list",
        "items": [
          "Member-referred merchant onboarding",
          "Spend sats locally, build the loop",
          "Malta's live Bitcoin merchant directory"
        ]
      },
      {
        "type": "h3",
        "text": "Policy"
      },
      {
        "type": "p",
        "text": "The arguments in Malta's policy rooms are stronger because real Bitcoiners back them. Members bring their expertise, their credibility, and their presence, we carry that voice where it needs to go."
      },
      {
        "type": "list",
        "items": [
          "Bitcoiners in the room, not watching from outside",
          "Member expertise behind every submission",
          "EU-first jurisdiction, member-shaped"
        ]
      },
      {
        "type": "h2",
        "text": "Stats & Signals"
      },
      {
        "type": "p",
        "text": "Real-time Bitcoin network data. The signal: Bitcoin is growing. Malta is part of it. You're part of it."
      },
      {
        "type": "h3",
        "text": "Malta Bitcoin Progress"
      },
      {
        "type": "h3",
        "text": "2030 Policy Targets"
      },
      {
        "type": "h2",
        "text": "Our Journey"
      },
      {
        "type": "h3",
        "text": "Malta's Bitcoin History Begins"
      },
      {
        "type": "p",
        "text": "The world's first regulated Bitcoin hedge fund launches in Malta, establishing the island as an early adopter in the Bitcoin space."
      },
      {
        "type": "h3",
        "text": "Bitcoin Club Malta Founded"
      },
      {
        "type": "p",
        "text": "Seven strangers gather in a Gozitan farmhouse for what would become the founding meeting of Bitcoin Club Malta. What started as casual conversations about money, freedom, and technology became a mission."
      },
      {
        "type": "h3",
        "text": "Blockchain Island Era"
      },
      {
        "type": "p",
        "text": "The 'Blockchain Island' vision is announced by the Malta government. Bitcoin Club Malta meetups grow to 200+ attendees. Major international exchanges express interest in Malta."
      },
      {
        "type": "h3",
        "text": "Bitcoin Tourists Flood Malta"
      },
      {
        "type": "p",
        "text": "Thousands of Bitcoiners relocate to the island. Malta Blockchain Summit draws 8,500 attendees. Exchanges set up shop, startups pour in, and Bitcoin Club Malta becomes the community hub connecting newcomers with locals."
      },
      {
        "type": "h3",
        "text": "Building Through the Bear"
      },
      {
        "type": "p",
        "text": "While crypto winter tests fair-weather friends, Bitcoin Club Malta doubles down on education and community. Lightning Network workshops, merchant onboarding initiatives, and policy advocacy continue."
      },
      {
        "type": "h3",
        "text": "Growth & Expansion"
      },
      {
        "type": "p",
        "text": "The bull market brings renewed interest. Bitcoin Breakfast becomes a bi-weekly institution. Corporate memberships launch. The first Bitcoin Boat event sails the Mediterranean."
      },
      {
        "type": "h3",
        "text": "9th Anniversary"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta marks nine years of continuous meetups. 150+ attendees at the anniversary party. Launch of Treasury membership tier and expanded exclusive events program."
      },
      {
        "type": "h3",
        "text": "New Chapter Begins"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta launches its new platform and member dashboard. 10-year anniversary. Renewed focus on making Malta a true 'Bitcoin Island' with merchant adoption, Lightning payments everywhere, and community-driven policy advocacy."
      },
      {
        "type": "h3",
        "text": "The Vision"
      },
      {
        "type": "p",
        "text": "10,000 members. 1,000+ merchants accepting Bitcoin. Malta recognized globally as 'Bitcoin Island'. Policy wins on Bitcoin treasury reserves, favorable tax treatment, and payment recognition."
      },
      {
        "type": "h2",
        "text": "Leadership Roles"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta runs on volunteer energy. These are the key roles that keep our community thriving."
      },
      {
        "type": "h3",
        "text": "Community Lead"
      },
      {
        "type": "list",
        "items": [
          "Event coordination",
          "Volunteer management",
          "Member engagement",
          "Community growth"
        ]
      },
      {
        "type": "h3",
        "text": "Content Lead"
      },
      {
        "type": "list",
        "items": [
          "Social media",
          "Newsletter",
          "Press relations",
          "Brand communications"
        ]
      },
      {
        "type": "h3",
        "text": "Education Lead"
      },
      {
        "type": "list",
        "items": [
          "Workshops",
          "Course development",
          "Curriculum design",
          "Certification programs"
        ]
      },
      {
        "type": "h3",
        "text": "Merchant Lead"
      },
      {
        "type": "list",
        "items": [
          "Business outreach",
          "Merchant onboarding",
          "Payment integration support",
          "Directory management"
        ]
      },
      {
        "type": "h3",
        "text": "Tech Lead"
      },
      {
        "type": "list",
        "items": [
          "Website development",
          "App development",
          "Infrastructure",
          "Technical support"
        ]
      },
      {
        "type": "h3",
        "text": "Policy Lead"
      },
      {
        "type": "list",
        "items": [
          "Government relations",
          "Regulatory advocacy",
          "Industry representation",
          "Consultation responses"
        ]
      },
      {
        "type": "p",
        "text": "Want to help build Bitcoin Island?"
      },
      {
        "type": "link",
        "text": "Apply to Volunteer",
        "href": "/site#contact"
      },
      {
        "type": "h2",
        "text": "Partners & Resources"
      },
      {
        "type": "link",
        "text": "Plan B Network Bitcoin education",
        "href": "https://planb.network/"
      },
      {
        "type": "link",
        "text": "Sats.sv Bitcoin & Lightning education",
        "href": "https://sats.sv/"
      },
      {
        "type": "link",
        "text": "Lightning.news Bitcoin & Lightning news",
        "href": "https://lightning.news/"
      },
      {
        "type": "link",
        "text": "LaserFocus.pro Bitcoin productivity",
        "href": "https://laserfocus.pro/"
      },
      {
        "type": "h2",
        "text": "Our Voice"
      },
      {
        "type": "p",
        "text": "How we communicate reflects who we are. These principles guide everything from tweets to policy papers."
      },
      {
        "type": "h3",
        "text": "Direct"
      },
      {
        "type": "p",
        "text": "Say it straight. No corporate speak. No hedging."
      },
      {
        "type": "p",
        "text": "Not rude or aggressive"
      },
      {
        "type": "h3",
        "text": "Confident"
      },
      {
        "type": "p",
        "text": "We know what we're doing. The work proves itself."
      },
      {
        "type": "p",
        "text": "Not arrogant or preachy"
      },
      {
        "type": "h3",
        "text": "Action-oriented"
      },
      {
        "type": "p",
        "text": "Build, ship, educate, advocate. Verbs, not nouns."
      },
      {
        "type": "p",
        "text": "Not 'exploring' or 'passionate about'"
      },
      {
        "type": "h3",
        "text": "Low time preference"
      },
      {
        "type": "p",
        "text": "Long-term thinking. Slow is smooth, smooth is fast."
      },
      {
        "type": "p",
        "text": "Not chasing trends or hype"
      },
      {
        "type": "h3",
        "text": "Mission-driven"
      },
      {
        "type": "p",
        "text": "Open to all who share the mission. Values over politics."
      },
      {
        "type": "p",
        "text": "Not ideological or preachy"
      },
      {
        "type": "h3",
        "text": "Fun"
      },
      {
        "type": "p",
        "text": "Mediterranean lifestyle. Boats, dinners, sunrise."
      },
      {
        "type": "p",
        "text": "Not stuffy or corporate"
      },
      {
        "type": "h2",
        "text": "Ready to Join the Mission?"
      },
      {
        "type": "p",
        "text": "Make Malta a Bitcoin Island. Together."
      },
      {
        "type": "link",
        "text": "Become a Member",
        "href": "/site#membership"
      },
      {
        "type": "link",
        "text": "Get in Touch",
        "href": "/site#contact"
      }
    ]
  },
  {
    "path": "/ai-policy",
    "snapshot": "20260608043725",
    "title": "AI Constitution | Bitcoin Club Malta",
    "description": "Ratified by the founding membership. Our public commitment to responsible AI use.",
    "blocks": [
      {
        "type": "h1",
        "text": "AI Constitution"
      },
      {
        "type": "p",
        "text": "Ratified by the founding membership. Our public commitment to responsible AI use."
      },
      {
        "type": "link",
        "text": "↓ View amendment log",
        "href": "#amendment-log"
      },
      {
        "type": "h2",
        "text": "Preamble"
      },
      {
        "type": "p",
        "text": "Bitcoin exists because a group of people decided that trust should not be assumed, it should be earned, verified, and built into the rules of the system itself. Satoshi did not ask you to trust him. He published the code, opened the protocol, and let the mathematics speak."
      },
      {
        "type": "p",
        "text": "We hold that principle when it comes to artificial intelligence."
      },
      {
        "type": "p",
        "text": "AI is a powerful tool. Like any powerful tool, it reflects the intentions of those who wield it. In the wrong hands, or without clear constraints, it becomes an instrument of surveillance, manipulation, and control. The history of the internet is a warning: technologies that could have liberated people were gradually captured and turned against them."
      },
      {
        "type": "p",
        "text": "We refuse to repeat that history here."
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta is a community built on sovereignty. Every design decision we make, passwordless authentication, Lightning-native payments, self-custody education, is made to reduce your dependence on trusted third parties. Our use of AI must honour the same values."
      },
      {
        "type": "p",
        "text": "This constitution is not a legal document. It is a public commitment. It is published openly, enforced by community consensus, and amendable only through a process defined within it."
      },
      {
        "type": "p",
        "text": "We do not ask you to trust us. We ask you to read this, hold us to it, and call us out when we fall short."
      },
      {
        "type": "h2",
        "text": "Article I, Transparency"
      },
      {
        "type": "list",
        "items": [
          "I. 1 All content produced with material AI assistance must be clearly labelled at the point of publication. The label must be visible without requiring additional clicks or disclosures.",
          "I. 2 AI-generated content shall never be presented as original human writing without disclosure. Editorial review of AI output does not remove the obligation to disclose.",
          "I. 3 The Bitcoin Club Malta team shall maintain a public record of which platform features use AI, what those features do, and what data they access. This record shall be updated whenever AI usage changes materially.",
          "I. 4 When a member interacts directly with an AI system on the platform, they shall be informed of this in the interface, not in a terms-of-service footnote."
        ]
      },
      {
        "type": "h2",
        "text": "Article II, Member Data Sovereignty"
      },
      {
        "type": "list",
        "items": [
          "II. 1 Member data belongs to the member. Bitcoin Club Malta is a custodian of that data, not its owner.",
          "II. 2 No member data, including email addresses, Lightning public keys, membership tiers, event registrations, or behavioural data, shall ever be used to train, fine-tune, or evaluate any AI model, whether operated by Bitcoin Club Malta or a third party.",
          "II. 3 Members may request a complete export of their data at any time. They may request deletion of their data at any time. AI systems shall not impede, delay, or complicate this right.",
          "II. 4 AI shall never be used to infer, derive, or enrich member profiles beyond what the member has directly provided. Behavioural inference is prohibited.",
          "II. 5 Data minimisation applies to AI as it applies to every other system: if AI does not need a piece of data to perform its function, it shall not access it."
        ]
      },
      {
        "type": "h2",
        "text": "Article III, Privacy Protection"
      },
      {
        "type": "list",
        "items": [
          "III. 1 AI systems shall never access Lightning public keys, payment amounts, payment histories, or transaction data. This prohibition is absolute and admits no exception.",
          "III. 2 AI systems shall not access personally identifiable information unless that access is strictly necessary for the function being performed and has been explicitly disclosed in Article I.3's public record.",
          "III. 3 No logs produced by AI system interactions shall be retained longer than necessary for the immediate technical function. Logs shall not be used for secondary analysis of member behaviour.",
          "III. 4 Bitcoin Club Malta shall not integrate any AI service whose business model depends on harvesting, selling, or monetising user data. Third-party AI providers must contractually prohibit training on member data.",
          "III. 5 AI shall never be used as a passive surveillance layer, listening to, analysing, or summarising member conversations, forum posts, or community interactions without explicit opt-in from the members involved."
        ]
      },
      {
        "type": "h2",
        "text": "Article IV, No Financial Advice"
      },
      {
        "type": "list",
        "items": [
          "IV. 1 AI systems operated by Bitcoin Club Malta shall never provide investment advice, trading recommendations, price predictions, or any guidance that could reasonably be construed as financial advice.",
          "IV. 2 This prohibition applies regardless of how the question is framed. Attempts to elicit financial advice through hypothetical framing shall be declined.",
          "IV. 3 AI may provide educational information about how Bitcoin works, its protocol, its history, its properties. It may not advise on what any individual should do with their Bitcoin.",
          "IV. 4 Any AI interaction that touches on financial topics shall include a clear and non-dismissible notice that Bitcoin Club Malta does not provide financial advice and that members should consult qualified professionals."
        ]
      },
      {
        "type": "h2",
        "text": "Article V, Bitcoin Only"
      },
      {
        "type": "list",
        "items": [
          "V. 1 Bitcoin Club Malta is a Bitcoin-only organisation. AI systems operating under this constitution shall not promote, recommend, compare favourably, or assist with altcoins, tokens, NFT platforms, or any non-Bitcoin digital asset.",
          "V. 2 This is not a technical restriction, it is a values restriction. We are not a generic 'crypto' community. Our AI tools shall reflect who we are.",
          "V. 3 AI may acknowledge the existence of other assets in a factual, educational context when directly relevant. It shall not frame them as alternatives to Bitcoin or suggest they serve Bitcoin's purpose."
        ]
      },
      {
        "type": "h2",
        "text": "Article VI, Human Oversight"
      },
      {
        "type": "list",
        "items": [
          "VI. 1 AI shall assist human decision-making. It shall never replace it on matters that affect members.",
          "VI. 2 Decisions about membership status, event access, content moderation, bans, or any action that affects a specific member shall be made by human team members. AI may surface information to inform these decisions. It shall not make them.",
          "VI. 3 Any AI system that produces a recommendation affecting a member shall present that recommendation to a human for review before action is taken. The human, not the AI, is accountable.",
          "VI. 4 Members have the right to request human review of any decision in which AI played a role. This right shall not be waived or buried.",
          "VI. 5 The organisation shall not implement AI-driven automation that removes human judgment from member-facing processes without a community vote under the amendment process defined in Article IX."
        ]
      },
      {
        "type": "h2",
        "text": "Article VII, No Surveillance, No Scoring"
      },
      {
        "type": "list",
        "items": [
          "VII. 1 AI shall never be used to build risk scores, trust scores, engagement scores, or any other numerical or categorical ranking of members.",
          "VII. 2 AI shall never be used to flag members for increased scrutiny based on behavioural patterns, content of communications, or inferred beliefs.",
          "VII. 3 AI shall never be used to analyse member behaviour for the purpose of predicting future actions, segmenting members into undisclosed categories, or targeting members with differential treatment.",
          "VII. 4 The gamification and achievements system is explicit, transparent, and member-visible. It operates on defined rules that members can read. This system is not AI-driven behavioural scoring, and shall never become so.",
          "VII. 5 Bitcoin Club Malta shall not share member data with any government, law enforcement agency, or regulatory body via AI systems. Any lawful data request shall follow the same process as non-AI data requests, with members notified to the fullest extent legally permitted."
        ]
      },
      {
        "type": "h2",
        "text": "Article VIII, Open Source Commitment"
      },
      {
        "type": "list",
        "items": [
          "VIII. 1 This constitution is published publicly, in full, without paywalls or login requirements.",
          "VIII. 2 The codebase of the Bitcoin Club Malta platform is developed with an open source ethos. Where AI tooling is integrated into platform code, the nature of that integration shall be documented in the public codebase.",
          "VIII. 3 Bitcoin Club Malta shall prefer open-source AI tools over closed proprietary systems, all else being equal. Where proprietary tools are used, the reasons shall be disclosed in the Article I.3 public record.",
          "VIII. 4 If AI-generated code is committed to the platform codebase, this shall be noted in the commit or pull request. The human committing the code is responsible for its correctness, security, and alignment with these principles."
        ]
      },
      {
        "type": "h2",
        "text": "Article IX, Amendment"
      },
      {
        "type": "list",
        "items": [
          "IX. 1 This constitution may be amended. No set of rules is final, including these. But amendments require more than an internal decision.",
          "IX. 2 Proposed amendments shall be published to the membership at least thirty (30) days before any vote. The proposal shall include the specific change, the rationale, and any dissenting views from team members.",
          "IX. 3 Amendments require consensus among active team members and a period of public comment from the membership. Where significant member objection exists, amendments shall not proceed without broader discussion.",
          "IX. 4 No amendment may remove or weaken Articles II, III, or VII without a supermajority process and explicit member notification. These articles, data sovereignty, privacy, and the prohibition on surveillance, are the load-bearing walls of this document.",
          "IX. 5 All amendments shall be logged in a publicly visible version history. The date, version number, and nature of each change shall be recorded. Reverting to a previous version follows the same process as adopting a new one.",
          "IX. 6 The team may not interpret its way around this constitution. If a proposed use of AI appears to conflict with these articles, it shall be treated as a conflict until an amendment process resolves it, not resolved by creative reading."
        ]
      },
      {
        "type": "h2",
        "text": "Article X, Enforcement and Accountability"
      },
      {
        "type": "list",
        "items": [
          "X. 1 Any member who believes Bitcoin Club Malta has violated this constitution may raise the concern publicly in the community forum or privately with the team. Both channels shall be honoured.",
          "X. 2 The team shall respond to raised concerns within fourteen (14) days with either an explanation of why no violation occurred or a description of remediation steps underway.",
          "X. 3 Bitcoin Club Malta acknowledges that self-enforcement has limits. We welcome external scrutiny, from members, from the broader Bitcoin community, from journalists, and from privacy advocates. Transparency is our accountability mechanism.",
          "X. 4 If a third-party AI provider is found to have violated the terms of their data agreements with Bitcoin Club Malta, the team shall disclose this to members, terminate the relationship where possible, and publish a post-mortem."
        ]
      },
      {
        "type": "h2",
        "text": "Closing Statement"
      },
      {
        "type": "p",
        "text": "This constitution is a starting point, not a destination. As AI capabilities change, and as Bitcoin Club Malta grows, these rules will need to evolve. What will not change is the posture: AI is a tool in service of the community, subject to the community's rules, transparent to the community's scrutiny."
      },
      {
        "type": "p",
        "text": "We are not building a surveillance platform. We are not building a recommendation engine. We are not harvesting data to sell."
      },
      {
        "type": "p",
        "text": "We are building a community for Bitcoiners in Malta, and the tools we use shall be worthy of the values we hold."
      },
      {
        "type": "p",
        "text": "Verify, don't trust."
      },
      {
        "type": "h2",
        "text": "Amendment Log"
      },
      {
        "type": "p",
        "text": "All changes to this constitution are recorded here in full. No silent edits. Proposed amendments must follow the process defined in Article IX."
      },
      {
        "type": "p",
        "text": "March 2026, Initial ratification"
      },
      {
        "type": "p",
        "text": "Constitution drafted and ratified by the founding membership. Ten articles covering transparency, data sovereignty, privacy, financial advice prohibition, Bitcoin-only scope, human oversight, no surveillance, open source commitment, amendment process, and enforcement."
      },
      {
        "type": "p",
        "text": "Current version: 1.0"
      },
      {
        "type": "p",
        "text": "Maintained by: Bitcoin Club Malta"
      },
      {
        "type": "p",
        "text": "Raise a concern:"
      }
    ]
  },
  {
    "path": "/bitcoin-coworking-marsaskala",
    "snapshot": "20260608054328",
    "title": "Bitcoin Coworking Marsaskala | Bitcoin Club Malta",
    "description": "A workspace built around Bitcoin, in one of Malta's most distinctive coastal villages. For remote workers, entrepreneurs, and builders who want to operate.",
    "blocks": [
      {
        "type": "link",
        "text": "Bitcoin Island",
        "href": "/bitcoin-island/enterprise"
      },
      {
        "type": "h1",
        "text": "Bitcoin Coworking Marsaskala"
      },
      {
        "type": "p",
        "text": "A workspace built around Bitcoin, in one of Malta's most distinctive coastal villages. For remote workers, entrepreneurs, and builders who want to operate from a Bitcoin-native environment."
      },
      {
        "type": "link",
        "text": "Bitcoin Island Enterprise",
        "href": "/bitcoin-island/enterprise"
      },
      {
        "type": "h2",
        "text": "What makes it different"
      },
      {
        "type": "h3",
        "text": "Bitcoin-native environment"
      },
      {
        "type": "p",
        "text": "Everyone in the space understands Bitcoin. Invoices, rent, and services can be settled in Lightning. No need to explain yourself."
      },
      {
        "type": "h3",
        "text": "High-speed internet"
      },
      {
        "type": "p",
        "text": "Stable, fast connectivity for remote work, node operation, and video calls. Designed for professionals who work globally from Malta."
      },
      {
        "type": "h3",
        "text": "Community of builders"
      },
      {
        "type": "p",
        "text": "The people around you are running Bitcoin businesses, building Lightning applications, or relocating to Malta to operate in a favourable regulatory environment."
      },
      {
        "type": "h3",
        "text": "Marsaskala location"
      },
      {
        "type": "p",
        "text": "Set in one of Malta's most characterful fishing villages on the south-east coast. Away from the tourist centre, close to the water, and well-connected to the rest of the island."
      },
      {
        "type": "h2",
        "text": "Why Marsaskala?"
      },
      {
        "type": "p",
        "text": "Marsaskala (Wied il-Għajn in Maltese) is a working fishing village on Malta's south-east coast. Unlike the busier tourist centres to the north, it retains the character of the island, colourful luzzu fishing boats, promenades along the inlet, and a genuine local community."
      },
      {
        "type": "p",
        "text": "For people relocating to Malta to work in Bitcoin and digital assets, Marsaskala offers a quieter base than Sliema or St. Julian's while remaining well-connected via the main coast road. Several BCM members live and work in the area."
      },
      {
        "type": "h2",
        "text": "Operating in Malta's Bitcoin environment"
      },
      {
        "type": "h3",
        "text": "VFA regulatory framework"
      },
      {
        "type": "p",
        "text": "Malta passed the Virtual Financial Assets Act in 2018, one of the first comprehensive digital asset frameworks in the EU. The MFSA oversees licensed operators."
      },
      {
        "type": "h3",
        "text": "EU base for global business"
      },
      {
        "type": "p",
        "text": "Malta's EU membership, English-speaking workforce, and time zone (CET) make it a practical base for Bitcoin businesses with global clients."
      },
      {
        "type": "h3",
        "text": "BCM business network"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta connects businesses operating in this space. Enterprise members get access to introductions, advisory connections, and the broader BCM network."
      },
      {
        "type": "h3",
        "text": "Build your Bitcoin business in Malta"
      },
      {
        "type": "p",
        "text": "Explore Bitcoin Island's enterprise services, or get in touch directly to discuss what BCM can offer your business."
      },
      {
        "type": "link",
        "text": "Bitcoin Island Enterprise",
        "href": "/bitcoin-island/enterprise"
      },
      {
        "type": "link",
        "text": "Get in touch",
        "href": "/site#contact"
      }
    ]
  },
  {
    "path": "/bitcoin-island",
    "snapshot": "20260608050623",
    "title": "Financial Freedom Starts Here | Bitcoin Club Malta",
    "description": "Malta is becoming a Bitcoin Island. Visit, relocate, or build your startup in a Bitcoin-friendly jurisdiction. Spend sats everywhere with our merchant map.",
    "blocks": [
      {
        "type": "h1",
        "text": "Financial Freedom Starts Here"
      },
      {
        "type": "p",
        "text": "The Mediterranean's premier Bitcoin destination. Sovereign living, zero capital gains, and a community that's been building since 2015."
      },
      {
        "type": "link",
        "text": "Book Private Consultation",
        "href": "#book"
      },
      {
        "type": "link",
        "text": "Explore Services",
        "href": "#pathways"
      },
      {
        "type": "h2",
        "text": "Malta Was First. The Opportunity Is Now."
      },
      {
        "type": "p",
        "text": "Before anyone else was paying attention, Malta was building. In 2015, a handful of Bitcoiners started meeting in a Gozitan farmhouse. Three years later, Malta became the world's first jurisdiction to regulate Bitcoin, drawing thousands of Bitcoiners, exchanges, and startups to the island practically overnight."
      },
      {
        "type": "p",
        "text": "That wave crested. Most of them left. What remained is something more durable: a decade of institutional knowledge, established legal frameworks, a tight community that survived the bear markets, and a jurisdiction that still offers zero capital gains tax on personal Bitcoin holdings, with full EU residency rights attached."
      },
      {
        "type": "p",
        "text": "The difference between Malta then and Malta now is signal-to-noise. The tourists and opportunists have cleared out. What's left is real, the lawyers who actually understand self-custody, the bankers who accept Bitcoin businesses, the community that never stopped meeting. For Bitcoiners who want to move fast on solid ground, that is the opportunity."
      },
      {
        "type": "h3",
        "text": "Community Founded"
      },
      {
        "type": "p",
        "text": "One of Europe's longest-running Bitcoin communities"
      },
      {
        "type": "h3",
        "text": "First to Regulate"
      },
      {
        "type": "p",
        "text": "World's first jurisdiction to pass Bitcoin legislation"
      },
      {
        "type": "h3",
        "text": "Capital Gains Tax"
      },
      {
        "type": "p",
        "text": "On long-term personal Bitcoin holdings"
      },
      {
        "type": "h3",
        "text": "Full Access"
      },
      {
        "type": "p",
        "text": "27 countries. Schengen. From day one."
      },
      {
        "type": "h2",
        "text": "Why Bitcoiners Choose Malta"
      },
      {
        "type": "p",
        "text": "The EU's most progressive jurisdiction for Bitcoin. Tax efficiency, regulatory clarity, and a decade of institutional adoption."
      },
      {
        "type": "h3",
        "text": "0% Capital Gains"
      },
      {
        "type": "p",
        "text": "Long-term Bitcoin holdings are tax-free. No reporting requirements on personal holdings."
      },
      {
        "type": "h3",
        "text": "EU Passport Access"
      },
      {
        "type": "p",
        "text": "Live, work, and travel across 27 countries. Full Schengen access from day one."
      },
      {
        "type": "h3",
        "text": "Bitcoin-Native Banking"
      },
      {
        "type": "p",
        "text": "Bitcoin-friendly institutions, OTC desks, and professionals who understand the space."
      },
      {
        "type": "h3",
        "text": "300 Days of Sun"
      },
      {
        "type": "p",
        "text": "Mediterranean climate, English-speaking, world-class dining. Quality of life redefined."
      },
      {
        "type": "h3",
        "text": "Regulatory Clarity"
      },
      {
        "type": "p",
        "text": "First EU jurisdiction with dedicated digital-asset legislation (2018). MiCA framework today. No surprise legislation."
      },
      {
        "type": "h3",
        "text": "The Network"
      },
      {
        "type": "p",
        "text": "11 years of community. Lawyers, bankers, developers, all aligned with Bitcoin."
      },
      {
        "type": "h2",
        "text": "What We Do"
      },
      {
        "type": "p",
        "text": "Concierge-level support for Bitcoiners relocating, launching, or expanding in Malta."
      },
      {
        "type": "link",
        "text": "Relocate Visas, property, banking, tax setup. Partners who already get Bitcoin. Learn more",
        "href": "/bitcoin-island/relocation"
      },
      {
        "type": "link",
        "text": "Launch Incorporation, licensing, EU passporting. Build your EU presence here. Learn more",
        "href": "/bitcoin-island/startups"
      },
      {
        "type": "link",
        "text": "Expand Malta HQ, EU passporting, 27 markets. Go continental. Learn more",
        "href": "/bitcoin-island/enterprise"
      },
      {
        "type": "h2",
        "text": "Live the Bitcoin Lifestyle"
      },
      {
        "type": "link",
        "text": "View all experiences",
        "href": "/bitcoin-island/tourism"
      },
      {
        "type": "h3",
        "text": "Private Yacht Charters"
      },
      {
        "type": "p",
        "text": "Mediterranean sailing with Bitcoin-native captains. Day trips to Comino, sunset cruises, or multi-day adventures."
      },
      {
        "type": "h3",
        "text": "Luxury Villa Rentals"
      },
      {
        "type": "p",
        "text": "Curated properties in Sliema, St. Julian's, and Mdina. Sea views, private pools, concierge service."
      },
      {
        "type": "h3",
        "text": "Exclusive Member Events"
      },
      {
        "type": "p",
        "text": "Private dinners, rooftop gatherings, secret location parties. Network with Malta's Bitcoin elite."
      },
      {
        "type": "h2",
        "text": "Your Path to Sovereignty"
      },
      {
        "type": "p",
        "text": "Whatever brings you to Malta, we have the connections to make it happen."
      },
      {
        "type": "link",
        "text": "Pay in Bitcoin. Everywhere. Visit Villas, boats, dining, all Bitcoin-friendly. Learn more",
        "href": "/bitcoin-island/tourism"
      },
      {
        "type": "link",
        "text": "Land Softly. Relocate Visas, property, banking. Partners who already get Bitcoin. Learn more",
        "href": "/bitcoin-island/relocation"
      },
      {
        "type": "link",
        "text": "Build Here. Ship Everywhere. Launch Incorporation, licensing, EU passporting. Learn more",
        "href": "/bitcoin-island/startups"
      },
      {
        "type": "link",
        "text": "Go Continental. Expand Malta HQ, EU passporting, 27 markets. Learn more",
        "href": "/bitcoin-island/enterprise"
      },
      {
        "type": "h2",
        "text": "Ready to Make the Move?"
      },
      {
        "type": "p",
        "text": "Book a private consultation. We'll discuss your situation, introduce you to the right partners, and help you take the first step toward financial sovereignty."
      },
      {
        "type": "p",
        "text": "Confidential • 30 minutes • No obligation"
      }
    ]
  },
  {
    "path": "/bitcoin-island/enterprise",
    "snapshot": "20260608051344",
    "title": "Go Continental. | Bitcoin Club Malta",
    "description": "Malta is becoming a Bitcoin Island. Visit, relocate, or build your startup in a Bitcoin-friendly jurisdiction. Spend sats everywhere with our merchant map.",
    "blocks": [
      {
        "type": "link",
        "text": "Back to Bitcoin Island",
        "href": "/bitcoin-island"
      },
      {
        "type": "h1",
        "text": "Go Continental."
      },
      {
        "type": "p",
        "text": "Malta HQ, EU passporting, 27 markets. Expand to Europe through Bitcoin Island."
      },
      {
        "type": "link",
        "text": "Schedule Executive Briefing",
        "href": "#book"
      },
      {
        "type": "h2",
        "text": "Malta Advantage"
      },
      {
        "type": "h3",
        "text": "Regulatory First-Mover"
      },
      {
        "type": "p",
        "text": "Malta among the first EU jurisdictions with dedicated digital-asset legislation"
      },
      {
        "type": "h3",
        "text": "EU Market Access"
      },
      {
        "type": "p",
        "text": "Single license covers all EU member states"
      },
      {
        "type": "h3",
        "text": "Corporate Tax"
      },
      {
        "type": "p",
        "text": "Effective rate through refund system"
      },
      {
        "type": "h3",
        "text": "English Official"
      },
      {
        "type": "p",
        "text": "All business conducted in English"
      },
      {
        "type": "h2",
        "text": "How We Support Enterprise"
      },
      {
        "type": "h3",
        "text": "EU Expansion Strategy"
      },
      {
        "type": "p",
        "text": "Market entry planning, regulatory mapping, and operational setup for European expansion."
      },
      {
        "type": "h3",
        "text": "Compliance & Licensing"
      },
      {
        "type": "p",
        "text": "EU regulatory navigation, ongoing compliance, and regulatory relationship management."
      },
      {
        "type": "h3",
        "text": "Office & Operations"
      },
      {
        "type": "p",
        "text": "From serviced offices to full headquarters. We handle the logistics."
      },
      {
        "type": "h3",
        "text": "Executive Briefings"
      },
      {
        "type": "p",
        "text": "On-the-ground intelligence. Regulatory updates, market insights, competitor analysis."
      },
      {
        "type": "h3",
        "text": "Talent Acquisition"
      },
      {
        "type": "p",
        "text": "Access Malta's experienced Bitcoin and digital-asset workforce. Technical and compliance roles."
      },
      {
        "type": "h3",
        "text": "Government Relations"
      },
      {
        "type": "p",
        "text": "Introductions to regulators, policymakers, and industry bodies. The right conversations."
      },
      {
        "type": "h2",
        "text": "Engagement Options"
      },
      {
        "type": "p",
        "text": "Flexible support tailored to your expansion timeline and needs."
      },
      {
        "type": "h3",
        "text": "Market Assessment"
      },
      {
        "type": "p",
        "text": "Comprehensive analysis of Malta as your EU base"
      },
      {
        "type": "list",
        "items": [
          "Regulatory landscape review",
          "Cost-benefit analysis",
          "Timeline planning",
          "Risk assessment"
        ]
      },
      {
        "type": "h3",
        "text": "Full Setup Support"
      },
      {
        "type": "p",
        "text": "End-to-end assistance establishing Malta operations"
      },
      {
        "type": "list",
        "items": [
          "Entity formation",
          "Licensing support",
          "Office setup",
          "Talent sourcing"
        ]
      },
      {
        "type": "h3",
        "text": "Ongoing Advisory"
      },
      {
        "type": "p",
        "text": "Continuous strategic and operational support"
      },
      {
        "type": "list",
        "items": [
          "Regulatory monitoring",
          "Local representation",
          "Government relations",
          "Network access"
        ]
      },
      {
        "type": "h3",
        "text": "Why Work With BCM?"
      },
      {
        "type": "h4",
        "text": "Built Since 2015"
      },
      {
        "type": "p",
        "text": "We've been here since 2015. We've seen companies come and go, regulations evolve, and built relationships that matter."
      },
      {
        "type": "h4",
        "text": "Vetted Network"
      },
      {
        "type": "p",
        "text": "Every introduction we make is to someone we've worked with. Lawyers, accountants, bankers, professionals who deliver."
      },
      {
        "type": "h4",
        "text": "No Middleman Markups"
      },
      {
        "type": "p",
        "text": "You work directly with the professionals. We facilitate introductions and provide ongoing support, not hidden fees."
      },
      {
        "type": "h4",
        "text": "Bitcoin-Native Understanding"
      },
      {
        "type": "p",
        "text": "We speak your language. No explaining basic concepts or justifying your business model."
      },
      {
        "type": "h2",
        "text": "Ready to discuss expansion?"
      },
      {
        "type": "p",
        "text": "Book a confidential call. We'll discuss your objectives and assess how Malta fits your strategy."
      },
      {
        "type": "p",
        "text": "Confidential • 30 minutes • No obligation"
      }
    ]
  },
  {
    "path": "/bitcoin-island/relocation",
    "snapshot": "20260608051636",
    "title": "Land Softly. | Bitcoin Club Malta",
    "description": "Malta is becoming a Bitcoin Island. Visit, relocate, or build your startup in a Bitcoin-friendly jurisdiction. Spend sats everywhere with our merchant map.",
    "blocks": [
      {
        "type": "link",
        "text": "Back to Bitcoin Island",
        "href": "/bitcoin-island"
      },
      {
        "type": "h1",
        "text": "Land Softly."
      },
      {
        "type": "p",
        "text": "0% capital gains on long-term Bitcoin holdings. Full EU residency rights. A community that's been here since 2015."
      },
      {
        "type": "link",
        "text": "Book a Consultation",
        "href": "#book"
      },
      {
        "type": "h2",
        "text": "Tax Framework"
      },
      {
        "type": "p",
        "text": "Why Malta is one of Europe's most efficient bases for Bitcoin holders. Educational only, work with a licensed tax advisor before relying on any specific structure."
      },
      {
        "type": "h3",
        "text": "Long-Term Capital Gains"
      },
      {
        "type": "p",
        "text": "On personal Bitcoin held as a store of value, not as trading stock."
      },
      {
        "type": "h3",
        "text": "Full Residency Rights"
      },
      {
        "type": "p",
        "text": "27 countries. Schengen access. English official language."
      },
      {
        "type": "h3",
        "text": "GRP Minimum Tax"
      },
      {
        "type": "p",
        "text": "Global Residence Programme: flat tax + 15% on foreign income remitted."
      },
      {
        "type": "h3",
        "text": "Wealth Tax"
      },
      {
        "type": "p",
        "text": "No annual wealth tax on personal holdings. No inheritance tax on Bitcoin."
      },
      {
        "type": "p",
        "text": "Tax treatment depends on personal circumstances and may change. This page is educational only and does not constitute tax advice. Consult a Malta-licensed tax advisor."
      },
      {
        "type": "h2",
        "text": "Residency Pathways"
      },
      {
        "type": "h3",
        "text": "Nomad Residence Permit"
      },
      {
        "type": "p",
        "text": "For remote workers earning from outside Malta"
      },
      {
        "type": "h3",
        "text": "Global Residence Programme"
      },
      {
        "type": "p",
        "text": "Tax-efficient residency for non-EU nationals"
      },
      {
        "type": "h3",
        "text": "Standard Residency"
      },
      {
        "type": "p",
        "text": "EU citizens and general applications"
      },
      {
        "type": "h3",
        "text": "Citizenship Pathways"
      },
      {
        "type": "p",
        "text": "Long-term planning for full citizenship"
      },
      {
        "type": "h2",
        "text": "How We Help"
      },
      {
        "type": "h3",
        "text": "Residency Programs"
      },
      {
        "type": "p",
        "text": "Global Residence Programme, Nomad Residence Permit, citizenship pathways. We connect you with specialists."
      },
      {
        "type": "h3",
        "text": "Property Guidance"
      },
      {
        "type": "p",
        "text": "Rental and purchase options. Areas that fit your lifestyle. Bitcoin-friendly agents."
      },
      {
        "type": "h3",
        "text": "Banking & Finance"
      },
      {
        "type": "p",
        "text": "Account setup, financial planning, Bitcoin-friendly institutions. The right introductions."
      },
      {
        "type": "h3",
        "text": "Legal & Tax"
      },
      {
        "type": "p",
        "text": "Immigration lawyers, tax advisors who understand Bitcoin. Proper structuring from day one."
      },
      {
        "type": "h3",
        "text": "Healthcare Setup"
      },
      {
        "type": "p",
        "text": "Private health insurance, GP registration, specialist access. Get covered."
      },
      {
        "type": "h3",
        "text": "Community Integration"
      },
      {
        "type": "p",
        "text": "BCM membership, networking events, local introductions. You're not starting from zero."
      },
      {
        "type": "h2",
        "text": "Ready to make the move?"
      },
      {
        "type": "p",
        "text": "Book a free consultation. We'll discuss your situation and connect you with the right professionals."
      },
      {
        "type": "p",
        "text": "Free • 30 minutes • No obligation"
      }
    ]
  },
  {
    "path": "/bitcoin-island/startups",
    "snapshot": "20260608043605",
    "title": "Build Here. Ship Everywhere. | Bitcoin Club Malta",
    "description": "Malta is becoming a Bitcoin Island. Visit, relocate, or build your startup in a Bitcoin-friendly jurisdiction. Spend sats everywhere with our merchant map.",
    "blocks": [
      {
        "type": "link",
        "text": "Back to Bitcoin Island",
        "href": "/bitcoin-island"
      },
      {
        "type": "h1",
        "text": "Build Here. Ship Everywhere."
      },
      {
        "type": "p",
        "text": "Incorporation, licensing, EU passporting. Build your EU presence on Bitcoin Island."
      },
      {
        "type": "link",
        "text": "Book a Strategy Call",
        "href": "#book"
      },
      {
        "type": "h2",
        "text": "Why Malta?"
      },
      {
        "type": "h3",
        "text": "Regulatory Clarity"
      },
      {
        "type": "p",
        "text": "Authorised under both VFAA (2018) and MiCA. Clear rules, established case law."
      },
      {
        "type": "h3",
        "text": "EU Passporting"
      },
      {
        "type": "p",
        "text": "One license, 27 markets. Access the entire European Union."
      },
      {
        "type": "h3",
        "text": "Talent Pool"
      },
      {
        "type": "p",
        "text": "Years of Bitcoin and digital-asset companies have built a skilled workforce."
      },
      {
        "type": "h3",
        "text": "Time Zone"
      },
      {
        "type": "p",
        "text": "Perfect for bridging US, Europe, and Asia business hours."
      },
      {
        "type": "h3",
        "text": "English Speaking"
      },
      {
        "type": "p",
        "text": "Official language. No translation needed for business."
      },
      {
        "type": "h3",
        "text": "Tax Efficiency"
      },
      {
        "type": "p",
        "text": "Competitive corporate rates and various incentive schemes."
      },
      {
        "type": "h2",
        "text": "Licensing Pathways"
      },
      {
        "type": "p",
        "text": "Not every Bitcoin business needs a license. We'll help you understand what applies to you."
      },
      {
        "type": "h3",
        "text": "Crypto Asset Service Provider"
      },
      {
        "type": "p",
        "text": "Exchange, custody, advisory services under EU framework"
      },
      {
        "type": "h3",
        "text": "Lighter Regulatory Path"
      },
      {
        "type": "p",
        "text": "Streamlined authorization for specific service types"
      },
      {
        "type": "h3",
        "text": "EU-Wide License"
      },
      {
        "type": "p",
        "text": "Pan-European crypto asset service provider via passporting"
      },
      {
        "type": "h3",
        "text": "Non-Licensed Operations"
      },
      {
        "type": "p",
        "text": "Many Bitcoin businesses don't need a license"
      },
      {
        "type": "h2",
        "text": "How We Help"
      },
      {
        "type": "h3",
        "text": "EU Licensing"
      },
      {
        "type": "p",
        "text": "Navigate Europe's MiCA framework. We connect you with lawyers who've done it before."
      },
      {
        "type": "h3",
        "text": "Company Formation"
      },
      {
        "type": "p",
        "text": "Malta Ltd, holding structures, and compliance setup. The right structure from day one."
      },
      {
        "type": "h3",
        "text": "Regulatory Introductions"
      },
      {
        "type": "p",
        "text": "MFSA contacts, compliance consultants, and ongoing support. Skip the cold outreach."
      },
      {
        "type": "h3",
        "text": "Banking Solutions"
      },
      {
        "type": "p",
        "text": "Business accounts, payment processors, and Bitcoin-friendly institutions. The introductions that matter."
      },
      {
        "type": "h3",
        "text": "Talent & Hiring"
      },
      {
        "type": "p",
        "text": "Access Malta's Bitcoin talent pool. Tech, compliance, marketing, people who get it."
      },
      {
        "type": "h3",
        "text": "Office & Coworking"
      },
      {
        "type": "p",
        "text": "From hot desks to full offices. Bitcoin-friendly spaces where you'll meet the right people."
      },
      {
        "type": "h2",
        "text": "Ready to build in Malta?"
      },
      {
        "type": "p",
        "text": "Book a free consultation. We'll assess your needs and connect you with the right professionals."
      },
      {
        "type": "p",
        "text": "Free • 30 minutes • No obligation"
      }
    ]
  },
  {
    "path": "/bitcoin-island/tourism",
    "snapshot": "20260608053042",
    "title": "Pay in Bitcoin. More Places Every Month. | Bitcoin Club Malta",
    "description": "Malta is becoming a Bitcoin Island. Visit, relocate, or build your startup in a Bitcoin-friendly jurisdiction. Spend sats everywhere with our merchant map.",
    "blocks": [
      {
        "type": "link",
        "text": "Back to Bitcoin Island",
        "href": "/bitcoin-island"
      },
      {
        "type": "h1",
        "text": "Pay in Bitcoin. More Places Every Month."
      },
      {
        "type": "p",
        "text": "Villas, boats, dining, all Bitcoin-friendly. See what 11 years of community building looks like."
      },
      {
        "type": "link",
        "text": "Plan Your Visit",
        "href": "https://cal.com/bitcoin-malta"
      },
      {
        "type": "h2",
        "text": "What We Offer"
      },
      {
        "type": "h3",
        "text": "Villa & Apartment Rentals"
      },
      {
        "type": "p",
        "text": "Curated properties from trusted partners. Short and long-term stays. Many accept Bitcoin directly."
      },
      {
        "type": "h3",
        "text": "Yacht & Boat Charters"
      },
      {
        "type": "p",
        "text": "Mediterranean sailing. Day trips or multi-day adventures. Bitcoin-friendly captains."
      },
      {
        "type": "h3",
        "text": "Bitcoin Merchant Tour"
      },
      {
        "type": "p",
        "text": "Guided tour of Malta's Bitcoin-accepting businesses. Coffee, food, drinks, paid in sats."
      },
      {
        "type": "h3",
        "text": "Private Event Access"
      },
      {
        "type": "p",
        "text": "Join exclusive BCM events during your stay. Network with local Bitcoiners."
      },
      {
        "type": "h3",
        "text": "Restaurant Reservations"
      },
      {
        "type": "p",
        "text": "Tables at Bitcoin-friendly establishments. We know the owners."
      },
      {
        "type": "h3",
        "text": "Airport Transfers"
      },
      {
        "type": "p",
        "text": "Reliable transportation. Pay in Bitcoin. Skip the hassle."
      },
      {
        "type": "h2",
        "text": "Ready to experience Bitcoin Island?"
      },
      {
        "type": "p",
        "text": "Book a free consultation. We'll discuss your travel plans and connect you with trusted partners."
      },
      {
        "type": "link",
        "text": "Plan Your Visit",
        "href": "https://cal.com/bitcoin-malta"
      },
      {
        "type": "p",
        "text": "Free • 30 minutes • No obligation"
      }
    ]
  },
  {
    "path": "/bitcoin-wallet",
    "snapshot": "20260608053648",
    "title": "Blink Wallet | Bitcoin Club Malta",
    "description": "Blink is the official wallet partner of Bitcoin Club Malta, chosen to support our mission of practical Bitcoin education and real-world adoption across the.",
    "blocks": [
      {
        "type": "h1",
        "text": "Blink Wallet"
      },
      {
        "type": "p",
        "text": "Blink is the official wallet partner of Bitcoin Club Malta, chosen to support our mission of practical Bitcoin education and real-world adoption across the Maltese islands."
      },
      {
        "type": "link",
        "text": "Get Blink",
        "href": "https://blink.sv/"
      },
      {
        "type": "link",
        "text": "Find Bitcoin Merchants",
        "href": "/merchants"
      },
      {
        "type": "h2",
        "text": "From El Zonte to Marsaskala"
      },
      {
        "type": "p",
        "text": "Originally launched at Bitcoin Beach in El Zonte, El Salvador in 2021, Blink began its life as the Bitcoin Beach Wallet, helping power one of the first real circular Bitcoin economies. Here in Malta, we started educating and onboarding users and merchants even in 2014 with the infamous \"Hole in the Wall Bar\" accepting payments via BitPay."
      },
      {
        "type": "p",
        "text": "Today, that same focus on everyday usability, education, and merchant tools is what makes Blink such a strong fit for our community. Bitcoin Club Malta has been driving merchant adoption since 2015, and over time we have tested and used many different wallets. Blink has proven to be the most effective app for our ongoing educational work with individuals, merchants, and local communities."
      },
      {
        "type": "p",
        "text": "We use it as a stepping stone before integrating self-custody or more comprehensive payment solutions. However, once someone starts using Blink Wallet, it often becomes their most-beloved everyday wallet for life."
      },
      {
        "type": "h2",
        "text": "Why We Chose Blink"
      },
      {
        "type": "p",
        "text": "After a decade of merchant onboarding and hands-on education, these are the qualities that matter."
      },
      {
        "type": "h3",
        "text": "Simple setup for beginners"
      },
      {
        "type": "p",
        "text": "A new user can install the app and be ready to send or receive in just a few taps. The interface is optimised for people who are completely new to Bitcoin, reducing friction and confusion during workshops and merchant onboarding."
      },
      {
        "type": "h3",
        "text": "Practical backup options"
      },
      {
        "type": "p",
        "text": "Blink uses familiar tools like email and phone-based recovery so beginners do not immediately lose access if they misplace their device or forget a password. At the same time, it encourages learning about better security over time as users progress."
      },
      {
        "type": "h3",
        "text": "Custodial now, self-custody later"
      },
      {
        "type": "p",
        "text": "Blink is currently a fully custodial wallet with multiple backup avenues, which makes it safer for absolute beginners who might otherwise lose funds. The team is working on self-custody options, and Bitcoin Club Malta strongly encourages users to graduate toward holding their own keys as they gain confidence."
      },
      {
        "type": "h3",
        "text": "Merchant-ready features"
      },
      {
        "type": "p",
        "text": "For businesses, Blink includes point-of-sale style tools that make it easy to accept Bitcoin payments at the counter or on the go. Merchants can generate payment requests quickly, see transaction history, and integrate Bitcoin into their daily operations without needing to be technical."
      },
      {
        "type": "h3",
        "text": "Advanced tools when you are ready"
      },
      {
        "type": "p",
        "text": "Beyond the basics, Blink offers a growing range of advanced features for more experienced users, custom Lightning addresses, NFC payments, a web dashboard, and API integration. The app grows with you."
      },
      {
        "type": "h3",
        "text": "Built-in education"
      },
      {
        "type": "p",
        "text": "Blink includes educational quizzes and in-app learning content that rewards exploration and helps new users understand how Bitcoin and Lightning actually work. This aligns directly with Bitcoin Club Malta's focus on hands-on, continuous learning."
      },
      {
        "type": "h2",
        "text": "Aligned with Bitcoin Values"
      },
      {
        "type": "p",
        "text": "Above all, Blink helps present Bitcoin as a full ecosystem, payments, savings, education, and community, while abstracting away the most technical parts for beginners. At the same time, it remains aligned with core Bitcoin principles by encouraging users to keep learning, take ownership of their journey, and eventually move toward greater sovereignty and self-custody."
      },
      {
        "type": "p",
        "text": "For Bitcoin Club Malta, this balance between usability and principles is essential. Blink lets us onboard more people, more safely, more quickly, without compromising on the long-term values that make Bitcoin worth learning in the first place."
      },
      {
        "type": "h2",
        "text": "FAQ, Blink & Bitcoin Club Malta"
      },
      {
        "type": "h3",
        "text": "What is Blink?"
      },
      {
        "type": "p",
        "text": "Blink is a user-friendly Bitcoin and Lightning wallet that grew out of the Bitcoin Beach project in El Zonte, El Salvador, where it was originally known as the Bitcoin Beach Wallet."
      },
      {
        "type": "h3",
        "text": "Why did Bitcoin Club Malta choose Blink as its official wallet partner?"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta has been supporting merchant adoption since 2015 and found Blink to be the most effective wallet for workshops, onboarding, and day-to-day merchant use, thanks to its simple setup, strong merchant tools, and integrated education."
      },
      {
        "type": "h3",
        "text": "Is Blink suitable for beginners?"
      },
      {
        "type": "p",
        "text": "Yes. Blink focuses on fast, easy onboarding so new users can install the app and start transacting in just a few taps, without needing prior technical knowledge."
      },
      {
        "type": "h3",
        "text": "Is Blink custodial or non-custodial?"
      },
      {
        "type": "p",
        "text": "Blink is currently a custodial wallet that manages keys on behalf of users, which helps beginners avoid common self-custody mistakes, while still allowing them to withdraw to their own self-custody wallets at any time."
      },
      {
        "type": "h3",
        "text": "Does Blink support merchants and POS?"
      },
      {
        "type": "p",
        "text": "Yes. Every Blink user can access a web-based point-of-sale cash register that allows staff to generate Lightning invoices and accept payments easily, making it ideal for shops, cafés, and venues."
      },
      {
        "type": "h3",
        "text": "Can I move funds from Blink to self-custody?"
      },
      {
        "type": "p",
        "text": "Yes. Users can withdraw funds from Blink to any self-custody wallet they control, allowing them to progress from beginner-friendly custodial use to full self-sovereignty as they learn more about Bitcoin."
      },
      {
        "type": "h2",
        "text": "Ready to Get Started?"
      },
      {
        "type": "p",
        "text": "Download Blink, come to a meetup, and make your first Lightning payment over coffee."
      },
      {
        "type": "link",
        "text": "Get Blink",
        "href": "https://blink.sv/"
      },
      {
        "type": "link",
        "text": "Find an Event",
        "href": "/events"
      }
    ]
  },
  {
    "path": "/blog",
    "snapshot": "20260608050022",
    "title": "Blog & News | Bitcoin Club Malta",
    "description": "Latest Bitcoin news, educational guides, event recaps, and policy updates from Malta's premier Bitcoin community.",
    "blocks": [
      {
        "type": "h1",
        "text": "Bitcoin Knowledge Hub"
      },
      {
        "type": "p",
        "text": "Insights, guides, and updates from Malta's Bitcoin community"
      },
      {
        "type": "h3",
        "text": "Stay Updated"
      },
      {
        "type": "p",
        "text": "Get the latest Bitcoin news, guides, and event updates delivered to your inbox"
      }
    ]
  },
  {
    "path": "/directory",
    "snapshot": "20260608053412",
    "title": "Bitcoin Directory | Bitcoin Club Malta",
    "description": "Comprehensive global directory of Bitcoin, Lightning, and Liquid merchants, services, and resources. Find exchanges, wallets, payment processors, and more.",
    "blocks": [
      {
        "type": "h1",
        "text": "Bitcoin Ecosystem"
      },
      {
        "type": "p",
        "text": "Bitcoin Ecosystem is BCM-curated directory of Bitcoin, Lightning, and Liquid products and services."
      },
      {
        "type": "h2",
        "text": "Get Your Product Listed"
      },
      {
        "type": "p",
        "text": "Members receive a featured listing with BCM's trusted review. Reach Malta's Bitcoin community and international visitors."
      },
      {
        "type": "link",
        "text": "Become a Member",
        "href": "/membership"
      },
      {
        "type": "link",
        "text": "Contact Us",
        "href": "/site#contact"
      }
    ]
  },
  {
    "path": "/events",
    "snapshot": "20260608050835",
    "title": "Bitcoin Events Malta | Meetups, Conferences & Exclusive Experiences",
    "description": "Join Bitcoin Club Malta events - from casual Bitcoin Breakfasts to exclusive Bitcoin Boat experiences. Public meetups, member events, and Whale exclusives.",
    "blocks": [
      {
        "type": "h1",
        "text": "Events Calendar"
      },
      {
        "type": "p",
        "text": "Boats. Breakfasts. Secret Locations. From casual meetups to exclusive experiences."
      },
      {
        "type": "h2",
        "text": "Weekly Bitcoin Hangout @ Coffee Circus Connections"
      },
      {
        "type": "p",
        "text": "3PM - 9PM · Marsaskala"
      },
      {
        "type": "p",
        "text": "Relax and unwind in the Satoshi South. Join us for a relaxed weekly Bitcoin hang, bringing together builders, professionals, and total beginners in a chill and open atmosphere. Whether you're shipping products, exploring new ideas, or setting up your very first wallet, you'll find good conversation, practical help, and a welcoming vibe."
      },
      {
        "type": "link",
        "text": "Get Directions",
        "href": "https://www.coffeecircus.com.mt/marsaskala"
      },
      {
        "type": "h2",
        "text": "Global Bitcoin Calendar"
      },
      {
        "type": "p",
        "text": "Connect with BCM members at international conferences. Group trips, member discounts, travel coordination."
      },
      {
        "type": "h3",
        "text": "Bitcoin Conference"
      },
      {
        "type": "p",
        "text": "Las Vegas, USA"
      },
      {
        "type": "link",
        "text": "Learn more →",
        "href": "https://b.tc/conference"
      },
      {
        "type": "h3",
        "text": "BTC Prague"
      },
      {
        "type": "p",
        "text": "Prague, Czech Republic"
      },
      {
        "type": "link",
        "text": "Learn more →",
        "href": "https://btcprague.com/"
      },
      {
        "type": "h3",
        "text": "Baltic Honeybadger"
      },
      {
        "type": "p",
        "text": "Riga, Latvia"
      },
      {
        "type": "link",
        "text": "Learn more →",
        "href": "https://baltichoneybadger.com/"
      },
      {
        "type": "h3",
        "text": "TABConf"
      },
      {
        "type": "p",
        "text": "Atlanta, USA"
      },
      {
        "type": "link",
        "text": "Learn more →",
        "href": "https://tabconf.com/"
      },
      {
        "type": "h3",
        "text": "Past International Conferences"
      },
      {
        "type": "h4",
        "text": "Adopting Bitcoin"
      },
      {
        "type": "p",
        "text": "El Salvador · January 15-17, 2026"
      },
      {
        "type": "h4",
        "text": "Bitcoin Atlantic"
      },
      {
        "type": "p",
        "text": "Madeira, Portugal · March 6-8, 2026"
      },
      {
        "type": "h2",
        "text": "Want Access to All Events?"
      },
      {
        "type": "p",
        "text": "Upgrade your membership to unlock exclusive events like Bitcoin Boat, Private Dinners, and Secret Location experiences."
      },
      {
        "type": "link",
        "text": "View Membership Tiers",
        "href": "/site#membership"
      },
      {
        "type": "link",
        "text": "Contact Us",
        "href": "/site#contact"
      }
    ]
  },
  {
    "path": "/events/bitcoin-meetup-malta-mjsjrmzb",
    "snapshot": "20260608060704",
    "title": "Bitcoin Meetup Malta | Bitcoin Club Malta Events",
    "description": "The Bitcoin Meetup Malta is Back! Join us on August first in Marsaskala. Join us for a hot August Bitcoin Meetup, this time right by the sea in Marsaskala.",
    "blocks": [
      {
        "type": "h1",
        "text": "Bitcoin Meetup Malta"
      },
      {
        "type": "p",
        "text": "The Bitcoin Meetup Malta is Back! Join us on August first in Marsaskala."
      },
      {
        "type": "p",
        "text": "Join us for a hot August Bitcoin Meetup, this time right by the sea in Marsaskala."
      },
      {
        "type": "link",
        "text": "All Events",
        "href": "/events"
      }
    ],
    "extra": "events"
  },
  {
    "path": "/learn",
    "snapshot": "20260608044020",
    "title": "Learn Bitcoin | Bitcoin Club Malta",
    "description": "Start your Bitcoin education journey. Curated resources including guides, videos, books, and podcasts for beginners to advanced users.",
    "blocks": [
      {
        "type": "h1",
        "text": "Learn Bitcoin"
      },
      {
        "type": "p",
        "text": "Curated resources to help you understand Bitcoin, from beginner basics to advanced technical concepts."
      },
      {
        "type": "h2",
        "text": "New to Bitcoin?"
      },
      {
        "type": "p",
        "text": "Start with our \"Getting Started\" section below, then join one of our beginner-friendly events to learn alongside others."
      },
      {
        "type": "link",
        "text": "View Events",
        "href": "/events"
      },
      {
        "type": "h2",
        "text": "Getting Started"
      },
      {
        "type": "link",
        "text": "What is Bitcoin? A beginner-friendly introduction to Bitcoin and why it matters. Article",
        "href": "https://bitcoin.org/en/how-it-works"
      },
      {
        "type": "link",
        "text": "The Bitcoin Whitepaper Satoshi Nakamoto's original paper that started it all. PDF",
        "href": "https://bitcoin.org/bitcoin.pdf"
      },
      {
        "type": "link",
        "text": "But How Does Bitcoin Actually Work? 3Blue1Brown's excellent visual explanation of Bitcoin. Video",
        "href": "https://www.youtube.com/watch?v=bBC-nXj3Ng4"
      },
      {
        "type": "h2",
        "text": "Wallets & Security"
      },
      {
        "type": "link",
        "text": "Bitcoin Wallet Guide Learn about different types of wallets and how to secure your bitcoin. Guide",
        "href": "https://bitcoin.org/en/choose-your-wallet"
      },
      {
        "type": "link",
        "text": "Seed Phrase Security Best practices for protecting your recovery phrase. Article",
        "href": "https://bitcoiner.guide/seed/"
      },
      {
        "type": "link",
        "text": "Hardware Wallets Explained Why and how to use hardware wallets for cold storage. Article",
        "href": "https://www.ledger.com/academy/crypto/what-is-a-hardware-wallet"
      },
      {
        "type": "h2",
        "text": "Lightning Network"
      },
      {
        "type": "link",
        "text": "What is the Lightning Network? Bitcoin's layer 2 solution for fast, cheap transactions. Article",
        "href": "https://lightning.network/"
      },
      {
        "type": "link",
        "text": "Lightning Wallets Get started with Lightning using these beginner-friendly wallets. Guide",
        "href": "https://bitcoiner.guide/lightning/"
      },
      {
        "type": "link",
        "text": "Running a Lightning Node For advanced users who want to participate in the network. Guide",
        "href": "https://docs.lightning.engineering/"
      },
      {
        "type": "h2",
        "text": "Books"
      },
      {
        "type": "link",
        "text": "The Bitcoin Standard By Saifedean Ammous - the definitive economic case for Bitcoin. Book",
        "href": "https://saifedean.com/thebitcoinstandard/"
      },
      {
        "type": "link",
        "text": "Mastering Bitcoin By Andreas Antonopoulos - technical deep dive into Bitcoin. Book",
        "href": "https://github.com/bitcoinbook/bitcoinbook"
      },
      {
        "type": "link",
        "text": "The Fiat Standard Understanding the current monetary system and why Bitcoin is needed. Book",
        "href": "https://saifedean.com/thefiatstandard/"
      },
      {
        "type": "h2",
        "text": "Podcasts"
      },
      {
        "type": "link",
        "text": "What Bitcoin Did Peter McCormack interviews leaders in the Bitcoin space. Podcast",
        "href": "https://www.whatbitcoindid.com/"
      },
      {
        "type": "link",
        "text": "Bitcoin Audible Guy Swann reads the best Bitcoin content. Podcast",
        "href": "https://bitcoinaudible.com/"
      },
      {
        "type": "link",
        "text": "The Bitcoin Standard Podcast Saifedean Ammous discusses Bitcoin economics. Podcast",
        "href": "https://saifedean.com/podcast/"
      },
      {
        "type": "h2",
        "text": "Learn with the Community"
      },
      {
        "type": "p",
        "text": "Bitcoin is better learned together. Join Bitcoin Club Malta to attend workshops, meetups, and connect with fellow Bitcoiners in Malta."
      },
      {
        "type": "link",
        "text": "Become a Member",
        "href": "/membership"
      },
      {
        "type": "link",
        "text": "Upcoming Events",
        "href": "/events"
      }
    ]
  },
  {
    "path": "/membership",
    "snapshot": "20260608050310",
    "title": "Membership | Bitcoin Club Malta",
    "description": "See if you qualify for Bitcoin Club Malta. Take a 2-minute assessment to access exclusive meetups, merchant deals, and Malta's most active Bitcoin community.",
    "blocks": [
      {
        "type": "h1",
        "text": "Malta's Bitcoin Club. Not Everyone's Bitcoin Club."
      },
      {
        "type": "p",
        "text": "Weekly events, vetted merchant deals, and a community that's been meeting in person since 2015. Take the 2-minute assessment to see if you qualify."
      },
      {
        "type": "h2",
        "text": "Quick Membership Assessment"
      },
      {
        "type": "p",
        "text": "Answer 6 quick questions to help us understand your interests. This takes about 2 minutes and helps us personalize your experience."
      },
      {
        "type": "h2",
        "text": "What Membership Gets You"
      },
      {
        "type": "h3",
        "text": "Community"
      },
      {
        "type": "p",
        "text": "Regular meetups, boat days, workshops, and dinners across Malta. The same community, showing up since 2015."
      },
      {
        "type": "h3",
        "text": "Education"
      },
      {
        "type": "p",
        "text": "Learn from experts with workshops on self-custody, Lightning Network, and running your own node."
      },
      {
        "type": "h3",
        "text": "Opportunities"
      },
      {
        "type": "p",
        "text": "Access exclusive business networking, job opportunities, and partnerships within Malta's Bitcoin network."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "h2",
        "text": "From the Community"
      },
      {
        "type": "p",
        "text": "Members across Malta, finance professionals, founders, and business owners."
      },
      {
        "type": "p",
        "text": "“ I came in as a sceptic, a finance professional who'd heard it all. Two years later I hold bitcoin, understand why, and I've introduced three colleagues to the club. The education here is serious. ”"
      },
      {
        "type": "p",
        "text": "Marco V."
      },
      {
        "type": "p",
        "text": "Risk Manager, Malta · Member since 2022"
      },
      {
        "type": "p",
        "text": "“ I'd been stacking for years on my own. Finding BCM was like finally meeting the people who get it, without the noise. Real meetups, real conversations. Nothing else like it on the island. ”"
      },
      {
        "type": "p",
        "text": "Sarah M."
      },
      {
        "type": "p",
        "text": "Software Engineer · Member since 2020"
      },
      {
        "type": "p",
        "text": "“ We set up Lightning payments at the restaurant in an afternoon. Tourist footfall from Bitcoin-curious visitors has been a genuine surprise. BCM made the whole thing painless. ”"
      },
      {
        "type": "p",
        "text": "Antoine C."
      },
      {
        "type": "p",
        "text": "Restaurant Owner, Valletta · Member since 2023"
      },
      {
        "type": "p",
        "text": "“ I relocated to Malta partly because of the tax environment around bitcoin. BCM connected me to the right people within the first month. The network here is the real product. ”"
      },
      {
        "type": "p",
        "text": "Lukas B."
      },
      {
        "type": "p",
        "text": "Founder, Berlin → Malta · Member since 2021"
      },
      {
        "type": "h2",
        "text": "Find Out if You Qualify."
      },
      {
        "type": "p",
        "text": "Since 2015. Consistent meetups. The most active Bitcoin community in Malta."
      }
    ]
  },
  {
    "path": "/merchants",
    "snapshot": "20260608050235",
    "title": "Bitcoin Merchants Malta | Spend Sats Across the Island",
    "description": "Find 100+ Bitcoin-accepting merchants in Malta. Restaurants, shops, services - all accepting Lightning payments. Grow the circular economy.",
    "blocks": [
      {
        "type": "h1",
        "text": "Bitcoin Merchant Directory"
      },
      {
        "type": "p",
        "text": "Spend your sats across Malta. Live data from BTCMap."
      },
      {
        "type": "p",
        "text": "Powered by BTCMap.org & OpenStreetMap"
      },
      {
        "type": "h2",
        "text": "Accept Bitcoin at Your Business?"
      },
      {
        "type": "p",
        "text": "Join Malta's growing Bitcoin merchant network. Get listed on BTCMap and connect with the global Bitcoin community."
      },
      {
        "type": "link",
        "text": "Add to BTCMap",
        "href": "https://btcmap.org/add-location"
      },
      {
        "type": "link",
        "text": "Contact Us",
        "href": "/site#contact"
      }
    ],
    "extra": "merchants"
  },
  {
    "path": "/privacy",
    "snapshot": "20260608054417",
    "title": "Privacy Policy | Bitcoin Club Malta",
    "description": "Learn how Bitcoin Club Malta collects, uses, and protects your personal data. GDPR compliant privacy practices.",
    "blocks": [
      {
        "type": "h1",
        "text": "Privacy Policy"
      },
      {
        "type": "p",
        "text": "Last updated: December 2024"
      },
      {
        "type": "h2",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta (\"we,\" \"our,\" or \"us\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and services."
      },
      {
        "type": "h2",
        "text": "Information We Collect"
      },
      {
        "type": "h3",
        "text": "Information You Provide"
      },
      {
        "type": "list",
        "items": [
          "Account Information: Email address, name, and profile details when you create an account",
          "Contact Information: Name, email, and message content when you use our contact form",
          "Newsletter: Email address when you subscribe to our newsletter",
          "Event Registration: Name, email, dietary requirements, and special requests for events",
          "Payment Information: Lightning payment data (public keys, invoice details)"
        ]
      },
      {
        "type": "h3",
        "text": "Information Collected Automatically"
      },
      {
        "type": "list",
        "items": [
          "Browser type and version",
          "Device information",
          "IP address (anonymized)",
          "Pages visited and time spent",
          "Referral source"
        ]
      },
      {
        "type": "h2",
        "text": "How We Use Your Information"
      },
      {
        "type": "p",
        "text": "We use your information to:"
      },
      {
        "type": "list",
        "items": [
          "Provide and maintain our services",
          "Process memberships and payments",
          "Send newsletters and event updates (with your consent)",
          "Respond to your inquiries and support requests",
          "Manage event registrations",
          "Improve our website and services",
          "Comply with legal obligations"
        ]
      },
      {
        "type": "h2",
        "text": "Lightning Network Authentication"
      },
      {
        "type": "p",
        "text": "When you use Lightning Network authentication (LNURL-auth), we only store your public key identifier. We do not have access to your private keys or wallet balance. This provides privacy-preserving authentication without requiring email or password."
      },
      {
        "type": "h2",
        "text": "Data Sharing"
      },
      {
        "type": "p",
        "text": "We do not sell your personal data. We may share information with:"
      },
      {
        "type": "list",
        "items": [
          "Service Providers: Email services (Resend), hosting (Google Cloud), payment processing (Lightning Network)",
          "Legal Requirements: When required by law or to protect our rights",
          "Business Transfers: In connection with any merger or acquisition"
        ]
      },
      {
        "type": "h2",
        "text": "Data Security"
      },
      {
        "type": "p",
        "text": "We implement appropriate security measures to protect your personal data, including:"
      },
      {
        "type": "list",
        "items": [
          "HTTPS encryption for all data transmission",
          "Secure authentication methods",
          "Regular security audits",
          "Limited access to personal data"
        ]
      },
      {
        "type": "h2",
        "text": "Your Rights"
      },
      {
        "type": "p",
        "text": "Under GDPR and other privacy laws, you have the right to:"
      },
      {
        "type": "list",
        "items": [
          "Access: Request a copy of your personal data",
          "Rectification: Correct inaccurate or incomplete data",
          "Erasure: Request deletion of your data",
          "Portability: Receive your data in a portable format",
          "Objection: Object to certain processing of your data",
          "Withdraw Consent: Withdraw consent at any time"
        ]
      },
      {
        "type": "p",
        "text": "To exercise these rights, contact us at"
      },
      {
        "type": "h2",
        "text": "Cookies"
      },
      {
        "type": "p",
        "text": "We use essential cookies for authentication and session management. We do not use tracking cookies or third-party advertising cookies."
      },
      {
        "type": "h2",
        "text": "Data Retention"
      },
      {
        "type": "p",
        "text": "We retain your personal data only as long as necessary to provide our services and comply with legal obligations. Account data is retained until you request deletion. Newsletter subscriptions can be cancelled at any time via the unsubscribe link."
      },
      {
        "type": "h2",
        "text": "Third-Party Links"
      },
      {
        "type": "p",
        "text": "Our website may contain links to external sites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies."
      },
      {
        "type": "h2",
        "text": "Children's Privacy"
      },
      {
        "type": "p",
        "text": "Our services are not directed to individuals under 18. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us."
      },
      {
        "type": "h2",
        "text": "Changes to This Policy"
      },
      {
        "type": "p",
        "text": "We may update this privacy policy periodically. Changes will be posted on this page with an updated date. We encourage you to review this policy regularly."
      },
      {
        "type": "h2",
        "text": "Contact Us"
      },
      {
        "type": "p",
        "text": "If you have questions about this Privacy Policy or our data practices, contact us:"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta"
      },
      {
        "type": "p",
        "text": "Email:"
      },
      {
        "type": "p",
        "text": "Website: bitcoinclubmalta.com"
      }
    ]
  },
  {
    "path": "/terms",
    "snapshot": "20260608060451",
    "title": "Terms of Service | Bitcoin Club Malta",
    "description": "Read the terms and conditions for using Bitcoin Club Malta services, including membership, events, and community participation.",
    "blocks": [
      {
        "type": "h1",
        "text": "Terms of Service"
      },
      {
        "type": "p",
        "text": "Last updated: May 2026"
      },
      {
        "type": "h2",
        "text": "Part 1, General Website Disclaimer"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta provides this website for educational, informational, and community purposes only. Nothing on this website constitutes financial advice, investment advice, tax advice, or legal advice."
      },
      {
        "type": "p",
        "text": "Bitcoin is a volatile asset. Its value can go up or down significantly. Past performance is not indicative of future results. Any information shared through our events, content, or community should be independently verified before making any financial decisions."
      },
      {
        "type": "p",
        "text": "We are not licensed financial advisors, investment managers, or tax professionals. If you require professional advice, please consult a qualified advisor in your jurisdiction."
      },
      {
        "type": "p",
        "text": "By using this website or joining as a member, you acknowledge that you are making independent decisions and that Bitcoin Club Malta bears no responsibility for any financial outcomes."
      },
      {
        "type": "h2",
        "text": "Part 2, Terms & Conditions"
      },
      {
        "type": "h2",
        "text": "1. Acceptance of Terms"
      },
      {
        "type": "p",
        "text": "By accessing and using the Bitcoin Club Malta website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services."
      },
      {
        "type": "h2",
        "text": "2. Description of Service"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta is a community organization dedicated to Bitcoin education, advocacy, and merchant adoption in Malta. Our services include:"
      },
      {
        "type": "list",
        "items": [
          "Community membership and networking",
          "Educational events and workshops",
          "Merchant directory and resources",
          "Newsletter and communications",
          "Member dashboard and profile management"
        ]
      },
      {
        "type": "h2",
        "text": "3. Membership"
      },
      {
        "type": "p",
        "text": "Membership tiers are available at various price points. By purchasing a membership:"
      },
      {
        "type": "list",
        "items": [
          "You agree to provide accurate information",
          "You understand that membership fees are non-refundable unless otherwise stated",
          "You agree to use the community resources responsibly",
          "You acknowledge that membership benefits may change over time"
        ]
      },
      {
        "type": "h2",
        "text": "4. Payments"
      },
      {
        "type": "p",
        "text": "We accept payments via the Lightning Network. All payments are processed in Bitcoin (satoshis) with EUR-equivalent pricing displayed for convenience. Exchange rates are determined at the time of payment."
      },
      {
        "type": "p",
        "text": "Lightning payments are instant and irreversible. Please ensure you are paying the correct amount before confirming any transaction."
      },
      {
        "type": "h2",
        "text": "5. User Conduct"
      },
      {
        "type": "p",
        "text": "You agree not to:"
      },
      {
        "type": "list",
        "items": [
          "Use our services for any unlawful purpose",
          "Harass, abuse, or harm other members",
          "Share false or misleading information",
          "Attempt to gain unauthorized access to our systems",
          "Interfere with the proper functioning of the website"
        ]
      },
      {
        "type": "h2",
        "text": "6. Intellectual Property"
      },
      {
        "type": "p",
        "text": "All content on this website, including text, graphics, logos, and software, is the property of Bitcoin Club Malta or its content suppliers and is protected by intellectual property laws."
      },
      {
        "type": "h2",
        "text": "7. Disclaimer"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta provides educational content and community services. We do not provide financial, investment, or legal advice. Bitcoin is a volatile asset and you should do your own research before making any financial decisions."
      },
      {
        "type": "p",
        "text": "Our services are provided \"as is\" without warranties of any kind. We do not guarantee the accuracy of merchant listings or third-party information."
      },
      {
        "type": "h2",
        "text": "8. Limitation of Liability"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services."
      },
      {
        "type": "h2",
        "text": "9. Changes to Terms"
      },
      {
        "type": "p",
        "text": "We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of modified terms."
      },
      {
        "type": "h2",
        "text": "10. Contact"
      },
      {
        "type": "p",
        "text": "If you have questions about these Terms of Service, please contact us at"
      }
    ]
  },
  {
    "path": "/treasury",
    "snapshot": "20260608045045",
    "title": "Treasury | Bitcoin Club Malta",
    "description": "Quarterly treasury reports for Bitcoin Club Malta. Full transparency on membership funds, expenses, and community investments.",
    "blocks": [
      {
        "type": "h1",
        "text": "Treasury Reports"
      },
      {
        "type": "p",
        "text": "Full transparency on how Bitcoin Club Malta uses community funds. Quarterly reports on income, expenses, and investments."
      },
      {
        "type": "h2",
        "text": "Coming Q1 2026"
      },
      {
        "type": "p",
        "text": "We're committed to full transparency. Starting Q1 2026, we'll publish quarterly reports showing exactly how membership funds are used."
      },
      {
        "type": "h3",
        "text": "Income"
      },
      {
        "type": "p",
        "text": "Memberships, sponsorships, donations"
      },
      {
        "type": "h3",
        "text": "Expenses"
      },
      {
        "type": "p",
        "text": "Events, infrastructure, marketing"
      },
      {
        "type": "h3",
        "text": "Bitcoin Balance"
      },
      {
        "type": "p",
        "text": "Live Lightning node balance"
      },
      {
        "type": "h2",
        "text": "What to Expect"
      },
      {
        "type": "h3",
        "text": "Quarterly Breakdown"
      },
      {
        "type": "list",
        "items": [
          "Membership revenue by tier",
          "Event costs and attendance",
          "Infrastructure and hosting expenses",
          "Marketing and outreach spend",
          "Net balance and reserves"
        ]
      },
      {
        "type": "h3",
        "text": "Why Transparency?"
      },
      {
        "type": "list",
        "items": [
          "Members deserve to know how funds are used",
          "Builds trust and accountability",
          "Aligns with Bitcoin's ethos of verification",
          "Encourages sustainable financial practices",
          "Sets an example for other communities"
        ]
      },
      {
        "type": "h2",
        "text": "Get Notified"
      },
      {
        "type": "p",
        "text": "Subscribe to our newsletter to receive quarterly treasury reports directly in your inbox."
      },
      {
        "type": "link",
        "text": "Subscribe to Newsletter",
        "href": "/site#contact"
      }
    ]
  },
  {
    "path": "/9ya",
    "snapshot": "20260608051616",
    "title": "Nine Years of Bitcoin Club Malta | Bitcoin Club Malta",
    "description": "In 2024, Bitcoin Club Malta celebrated its ninth year, nine years of meetups, learning, building, and keeping the Bitcoin conversation going on a small island.",
    "blocks": [
      {
        "type": "h1",
        "text": "Nine Years of Bitcoin Club Malta"
      },
      {
        "type": "p",
        "text": "In 2024, Bitcoin Club Malta celebrated its ninth year, nine years of meetups, learning, building, and keeping the Bitcoin conversation going on a small island in the middle of the Mediterranean."
      },
      {
        "type": "p",
        "text": "Founded in 2015, BCM has been meeting continuously, through bull markets, bear markets, and a pandemic."
      },
      {
        "type": "p",
        "text": "Monthly meetups, workshops, boat days, and conference side-events over nine years of community building."
      },
      {
        "type": "p",
        "text": "From curious newcomers to long-term holders and Bitcoin businesses, a cross-section of Malta's Bitcoin community."
      },
      {
        "type": "p",
        "text": "Businesses in Malta that accept Bitcoin, cafés, services, accommodation, many connected through BCM."
      },
      {
        "type": "h2",
        "text": "What nine years looks like"
      },
      {
        "type": "p",
        "text": "Nine years in, BCM is not the same organisation it was when it started. The community has grown, the platform has evolved, and the range of people involved, from Maltese professionals to international Bitcoiners who chose Malta as a base, reflects how the island's relationship with Bitcoin has deepened."
      },
      {
        "type": "p",
        "text": "What has stayed constant: monthly meetups, a focus on education over speculation, and a community that genuinely wants to help new members understand Bitcoin properly."
      },
      {
        "type": "p",
        "text": "Nine years is a long time in Bitcoin. BCM has been here for all of it."
      },
      {
        "type": "h2",
        "text": "What comes next"
      },
      {
        "type": "h3",
        "text": "Deeper merchant adoption"
      },
      {
        "type": "p",
        "text": "More Malta businesses accepting Bitcoin, with Lightning as the default payment method."
      },
      {
        "type": "h3",
        "text": "Education at every level"
      },
      {
        "type": "p",
        "text": "From introductory sessions for people who have never bought Bitcoin to technical workshops on running nodes and self-custody."
      },
      {
        "type": "h3",
        "text": "A platform for the community"
      },
      {
        "type": "p",
        "text": "BCM's new platform brings membership, events, and the Bitcoin ecosystem directory into one place, built by the community, for the community."
      },
      {
        "type": "h3",
        "text": "Be part of year ten"
      },
      {
        "type": "p",
        "text": "BCM is still going, and growing. Come to a meetup or join as a member to be part of what Malta's Bitcoin community builds next."
      },
      {
        "type": "link",
        "text": "Attend a meetup",
        "href": "/events"
      },
      {
        "type": "link",
        "text": "Join BCM",
        "href": "/membership"
      }
    ]
  },
  {
    "path": "/the-complete-guide-to-using-bitcoin-in-malta-every-option-explained",
    "snapshot": "20260608052259",
    "title": "The Complete Guide to Using Bitcoin in Malta: Every Option Explained | Bitcoin Club Malta",
    "description": "Everything you need to know about buying, storing, and spending Bitcoin in Malta. From exchanges and ATMs to local merchants and the Lightning Network, the definitive local guide.",
    "blocks": [
      {
        "type": "link",
        "text": "Learn",
        "href": "/learn"
      },
      {
        "type": "h1",
        "text": "The Complete Guide to Using Bitcoin in Malta: Every Option Explained"
      },
      {
        "type": "p",
        "text": "Malta has one of Europe's most developed Bitcoin ecosystems, from regulated exchanges to Lightning-enabled merchants. This guide covers everything from your first purchase to running your own node."
      },
      {
        "type": "h2",
        "text": "In this guide"
      },
      {
        "type": "list",
        "items": [
          "1. Buying Bitcoin in Malta",
          "2. Storing Bitcoin Safely",
          "3. Spending Bitcoin in Malta",
          "4. The Lightning Network in Malta",
          "5. Malta's Regulatory Environment",
          "6. The Bitcoin Community in Malta"
        ]
      },
      {
        "type": "h2",
        "text": "Buying Bitcoin in Malta"
      },
      {
        "type": "h3",
        "text": "Regulated exchanges"
      },
      {
        "type": "p",
        "text": "Malta was among the first EU jurisdictions to regulate virtual financial assets under the VFA Act. This means local and EU-licensed exchanges operating here are subject to AML/KYC checks, expect to verify your identity before buying. Reputable EU exchanges (Bitfinex, Kraken, Coinbase) all serve Maltese residents with IBAN-compatible bank transfers."
      },
      {
        "type": "h3",
        "text": "Bitcoin ATMs"
      },
      {
        "type": "p",
        "text": "A small number of Bitcoin ATMs operate across Malta, primarily in Valletta and St. Julian's. These accept cash for immediate BTC purchases with no account required, though fees run higher than exchange rates (typically 5-10%). Check CoinATMRadar for current machine locations, the landscape changes."
      },
      {
        "type": "h3",
        "text": "Peer-to-peer (P2P)"
      },
      {
        "type": "p",
        "text": "For those who prefer not to use custodial platforms, P2P marketplaces like Bisq allow direct trades with other individuals. Transactions settle on-chain with no intermediary holding your funds. Setup is more involved but preserves financial privacy."
      },
      {
        "type": "h3",
        "text": "Local community trades"
      },
      {
        "type": "p",
        "text": "Bitcoin Club Malta members sometimes arrange direct trades within the community, particularly useful for cash transactions or when helping someone make their first purchase. Join a meetup to connect with people who have been through the process."
      },
      {
        "type": "h2",
        "text": "Storing Bitcoin Safely"
      },
      {
        "type": "h3",
        "text": "Self-custody: the foundational rule"
      },
      {
        "type": "p",
        "text": "Not your keys, not your coins. Every serious Bitcoiner eventually moves their holdings off exchanges into a wallet they control. If you keep significant amounts on an exchange, you are trusting that platform with your savings, as multiple exchange collapses have demonstrated."
      },
      {
        "type": "h3",
        "text": "Hardware wallets"
      },
      {
        "type": "p",
        "text": "A hardware wallet (Coldcard, Ledger, Trezor) stores your private keys on a dedicated device that never connects directly to the internet. It is the most accessible form of cold storage for most people. Buy only from the manufacturer directly, never second-hand."
      },
      {
        "type": "h3",
        "text": "Seed phrase security"
      },
      {
        "type": "p",
        "text": "Your 12 or 24-word seed phrase is the master key to all your Bitcoin. Write it on paper (or better, stamp it on metal) and store it somewhere secure and private. Do not photograph it, email it, or store it digitally. Losing your seed phrase means losing your bitcoin permanently."
      },
      {
        "type": "h3",
        "text": "Multi-signature setups"
      },
      {
        "type": "p",
        "text": "For larger holdings, a multi-sig wallet requires multiple keys to authorise a transaction, no single point of failure. This is the setup that serious institutions and long-term holders use. BCM meetups are a good place to learn from people who have built these setups."
      },
      {
        "type": "h2",
        "text": "Spending Bitcoin in Malta"
      },
      {
        "type": "h3",
        "text": "BTCMap merchant directory"
      },
      {
        "type": "p",
        "text": "The global BTCMap project maps every known Bitcoin-accepting business. Malta has a growing number of verified merchants, cafés, restaurants, accommodation providers, and service businesses, many concentrated around Valletta, Sliema, and St. Julian's. Our merchants page pulls live data from BTCMap."
      },
      {
        "type": "h3",
        "text": "Lightning Network payments"
      },
      {
        "type": "p",
        "text": "The Lightning Network enables instant, near-zero-fee Bitcoin payments. An increasing number of Maltese merchants who accept Bitcoin do so via Lightning. Wallets like Phoenix, Breez, and Wallet of Satoshi make Lightning as simple as scanning a QR code. The Bitcoin Club Malta platform itself uses Lightning for membership payments."
      },
      {
        "type": "h3",
        "text": "Gift cards and bill payment"
      },
      {
        "type": "p",
        "text": "Services like Bitrefill let you convert Bitcoin into gift cards for major retailers and utility payments, a practical bridge while merchant adoption grows. Coverage for EU and Maltese providers is solid."
      },
      {
        "type": "h3",
        "text": "Local businesses"
      },
      {
        "type": "p",
        "text": "Several Malta-based businesses accept Bitcoin directly, from tech services to hospitality. The best way to find them is through our community, members often share new accepting businesses at meetups before they appear on any map."
      },
      {
        "type": "h2",
        "text": "The Lightning Network in Malta"
      },
      {
        "type": "h3",
        "text": "What Lightning changes"
      },
      {
        "type": "p",
        "text": "On-chain Bitcoin transactions cost fees and confirm in blocks, fine for large transfers, impractical for a coffee. The Lightning Network is a payment layer built on top of Bitcoin that settles payments instantly and nearly for free. It is how Bitcoin becomes usable for everyday commerce."
      },
      {
        "type": "h3",
        "text": "Getting a Lightning wallet"
      },
      {
        "type": "p",
        "text": "Phoenix Wallet or Breez are the best starting points for self-custody Lightning, they manage channels automatically so you do not need to understand the technical details. For a custodial option with a simpler setup, Wallet of Satoshi works immediately with no channel management. The trade-off: custodial means the app provider holds your keys."
      },
      {
        "type": "h3",
        "text": "Running a node"
      },
      {
        "type": "p",
        "text": "Running your own Lightning node (Umbrel, Start9, RaspiBlitz) gives you full sovereignty over your Lightning funds and lets you route payments for others, earning small fees. It is a weekend project that the BCM community is happy to walk you through."
      },
      {
        "type": "h2",
        "text": "Malta's Regulatory Environment"
      },
      {
        "type": "h3",
        "text": "The VFA Act"
      },
      {
        "type": "p",
        "text": "Malta passed the Virtual Financial Assets Act in 2018, creating one of the first comprehensive regulatory frameworks for digital assets in the EU. The MFSA (Malta Financial Services Authority) oversees VFA service providers. For individuals, holding and transacting Bitcoin is legal."
      },
      {
        "type": "h3",
        "text": "Tax treatment"
      },
      {
        "type": "p",
        "text": "As of writing, Malta's tax treatment of Bitcoin gains for individuals depends on the nature and frequency of trades. Occasional disposals by private individuals may be treated as capital gains. Frequent trading or business activity may be treated as income. This is an area where professional tax advice is genuinely worth getting, BCM does not provide financial or tax advice."
      },
      {
        "type": "h3",
        "text": "Banking"
      },
      {
        "type": "p",
        "text": "Maltese banks have historically been cautious about crypto-related transactions. Some members have found it easier to use EU-based online banks (Revolut, N26, Wise) for exchange transfers. Situation varies by bank and account type."
      },
      {
        "type": "h2",
        "text": "The Bitcoin Community in Malta"
      },
      {
        "type": "h3",
        "text": "Bitcoin Club Malta"
      },
      {
        "type": "p",
        "text": "BCM has been running since 2015, one of the oldest Bitcoin communities in Southern Europe. Monthly meetups, educational workshops, and a network of members ranging from curious newcomers to long-term holders and Bitcoin businesses. The community is where most people in Malta learn the most, fastest."
      },
      {
        "type": "h3",
        "text": "Meetups and events"
      },
      {
        "type": "p",
        "text": "Regular meetups give you access to people who have already solved the problems you are facing. New to self-custody? Someone in the room has set up a multi-sig wallet. Running a Lightning node? Several members have done it. The knowledge density at BCM events is hard to replicate online."
      },
      {
        "type": "h3",
        "text": "Learning resources"
      },
      {
        "type": "p",
        "text": "Our learn page collects the best Bitcoin educational resources we know of, curated for people at every stage, from the Bitcoin whitepaper to advanced Lightning node guides."
      },
      {
        "type": "h3",
        "text": "Join Malta's Bitcoin community"
      },
      {
        "type": "p",
        "text": "The fastest way to go from reading about Bitcoin to actually using it, meet the people doing it every day in Malta."
      },
      {
        "type": "link",
        "text": "Attend a meetup",
        "href": "/events"
      },
      {
        "type": "link",
        "text": "More resources",
        "href": "/learn"
      }
    ]
  }
];
