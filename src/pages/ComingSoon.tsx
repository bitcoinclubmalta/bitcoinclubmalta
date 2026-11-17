import { Button } from "@/components/ui/button";
import { useBitcoinData } from "@/hooks/useBitcoinData";
import { SEO } from "@/components/SEO";

export default function ComingSoon() {
  const { data, isLoading } = useBitcoinData();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  const formatNumber = (num: number) => new Intl.NumberFormat("en-US").format(num);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO
        title="Bitcoin Club Malta | Make Malta a Bitcoin Island"
        description="Make Malta a Bitcoin Island. Sound Money, Sound Country — Education, Adoption, and Policy."
        canonical="https://bitcoinclubmalta.com/"
        ogImage="https://bitcoinclubmalta.com/logo.png"
      />
      {/* Top bar */}
      <header className="border-b border-border">
        <div className="container flex items-center justify-center h-42">
          <a href={import.meta.env.BASE_URL} className="flex items-center justify-center">
            <img src={`${import.meta.env.BASE_URL}logo-full.png`} alt="Bitcoin Club Malta" className="h-32 w-auto" />
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 grid lg:grid-cols-2">
        {/* Left */}
        <section className="flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-24">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            MALTA'S BITCOIN COMMUNITY EST. 2015
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6 animate-fade-in">
            Sound Money,
            <br />
            <span className="italic">Sound Country</span>
          </h1>
          <div className="text-muted-foreground text-lg mb-10 max-w-md animate-slide-up space-y-4">
            <p>
              The Mediterranean's most Southern Bitcoin destination. Merchant adoption, residency, sunshine and Ftira.
            </p>
            <div className="flex flex-col gap-1 pt-4 text-foreground font-medium">
              <a
                href="https://preview.mailerlite.io/forms/716957/192221709621790716/share"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Newsletter
              </a>
              <a
                href="https://coinos.io/pay/bitcoinclub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Contribute
              </a>
              <a
                href="https://www.facebook.com/bitcoinmalta/events"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Events
              </a>
              <a
                href="https://x.com/bitcoinclubmt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X/Twitter
              </a>
            </div>
          </div>

          {/* YouTube embed */}
          <div className="aspect-video w-full max-w-xl border border-border bg-secondary/30">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/-FzUHy72eOI"
              title="Bitcoin Club Malta"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        {/* Right: live data panel */}
        <aside className="border-t lg:border-t-0 lg:border-l border-border bg-secondary/30 flex flex-col">
          <div className="border-b border-border p-6 lg:p-8">
            <span className="text-sm text-muted-foreground block mb-2">Bitcoin Price</span>
            <div className="font-heading text-4xl lg:text-5xl mb-2">{isLoading ? "…" : formatPrice(data.price)}</div>
            <div className="text-sm text-muted-foreground">1 USD = {formatNumber(data.satsPerDollar)} sats</div>
          </div>

          <div className="grid grid-cols-2 flex-1">
            <div className="border-r border-b border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Block</div>
              <div className="font-heading text-xl">#{formatNumber(data.blockHeight)}</div>
            </div>
            <div className="border-b border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hash Rate</div>
              <div className="font-heading text-xl">{data.hashRate}</div>
            </div>
            <div className="border-r border-border p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mempool</div>
              <div className="font-heading text-xl">{data.mempoolSize} vMB</div>
            </div>
            <div className="p-6">
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next Fee</div>
              <div className="font-heading text-xl">{data.nextBlockFee} sat/vB</div>
            </div>
          </div>

          <div className="border-t border-border p-6 lg:p-8">
            <div className="text-xs text-accent uppercase tracking-wider mb-2">Mission</div>
            <p className="text-sm">
              Empowering people with education on sound money and sound economics.{" "}
              <a
                href="https://www.t.me/bitcoinclubmalta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                Join The Mission
              </a>
            </p>
          </div>
        </aside>
      </main>

      <footer className="border-t border-border py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Bitcoin Club Malta</span>
          <span>Make Malta a Bitcoin Island</span>
        </div>
      </footer>
    </div>
  );
}
