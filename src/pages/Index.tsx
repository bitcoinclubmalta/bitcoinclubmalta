import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { Membership } from '@/components/Membership';
import { Testimonials } from '@/components/Testimonials';
import { Events } from '@/components/Events';
import { Merchants } from '@/components/Merchants';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Bitcoin Club Malta | Make Malta a Bitcoin Island"
        description="Make Malta a Bitcoin Island. Nine years building Bitcoin infrastructure in Malta — education, merchants, and policy. Join 500+ members."
        canonical="https://bitcoinclubmalta.com/site"
        ogImage="https://bitcoinclubmalta.com/logo.png"
      />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Membership />
        <Testimonials />
        <Events />
        <Merchants />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
