import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            Make Malta a Bitcoin Island.
          </h2>
          <p className="text-muted-foreground mb-8">Join the mission. Together.</p>
          <Button variant="outline" size="lg" asChild>
            <a href="#membership">Get Started</a>
          </Button>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading">Bitcoin Club</span>
            <span className="text-muted-foreground text-sm">Malta</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bitcoin Club Malta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}