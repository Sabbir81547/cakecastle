import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCakes from '@/components/FeaturedCakes';
import Testimonials from '@/components/Testimonials';
import HowToOrder from '@/components/HowToOrder';
import FAQ from '@/components/FAQ';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import PageTransition from '@/components/PageTransition';

export default function Index() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <FeaturedCakes />
          <Testimonials />
          <HowToOrder />
          <FAQ />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </PageTransition>
  );
}
