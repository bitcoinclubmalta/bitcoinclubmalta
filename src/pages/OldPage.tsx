import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Events } from "@/components/Events";
import { Merchants } from "@/components/Merchants";
import type { OldBlock, OldPageData } from "@/data/oldPages";

function BlockLink({ text, href }: { text: string; href: string }) {
  const long = text.length > 48;
  const cls = long
    ? "flex items-center justify-between gap-4 border border-border px-5 py-4 mb-3 font-medium hover:bg-secondary/50 transition-colors"
    : "inline-flex items-center border border-border px-4 py-2 mr-2 mb-3 text-sm font-medium hover:bg-secondary/50 transition-colors";
  const content = long ? (
    <>
      <span>{text}</span>
      <span aria-hidden="true">→</span>
    </>
  ) : (
    text
  );
  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link to={href} className={cls}>
        {content}
      </Link>
    );
  }
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }
  return (
    <a href={href} className={cls}>
      {content}
    </a>
  );
}

function renderBlock(block: OldBlock, key: number, isLead: boolean) {
  switch (block.type) {
    case "h1":
      return (
        <h1 key={key} className="font-heading text-4xl md:text-5xl leading-[1.1] mb-6">
          {block.text}
        </h1>
      );
    case "h2":
      return (
        <h2
          key={key}
          className="font-heading text-2xl md:text-3xl mt-12 mb-4 border-t border-border-subtle pt-10"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} className="font-heading text-xl mt-8 mb-3">
          {block.text}
        </h3>
      );
    case "h4":
      return (
        <h4 key={key} className="font-heading text-lg mt-6 mb-2">
          {block.text}
        </h4>
      );
    case "p":
      return (
        <p
          key={key}
          className={
            isLead
              ? "text-lg text-muted-foreground leading-relaxed mb-6"
              : "text-muted-foreground leading-relaxed mb-4"
          }
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={key} className="mb-6 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 bg-foreground shrink-0 mt-2.5" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "link":
      return <BlockLink key={key} text={block.text} href={block.href} />;
    default:
      return null;
  }
}

export function OldPage({ page }: { page: OldPageData }) {
  const leadIndex = page.blocks.findIndex((b) => b.type === "p");
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={page.title}
        description={page.description}
        canonical={`https://bitcoinclubmalta.com${page.path}`}
        ogImage="https://bitcoinclubmalta.com/logo.png"
      />
      <Header />
      <main id="main-content" className="pt-16">
        <article className="container py-16 lg:py-24">
          <div className="max-w-3xl">
            {page.blocks.map((block, i) => renderBlock(block, i, i === leadIndex))}
          </div>
        </article>
        {page.extra === "events" && <Events />}
        {page.extra === "merchants" && <Merchants />}
      </main>
      <Footer />
    </div>
  );
}
