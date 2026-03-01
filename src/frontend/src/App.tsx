import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-site-bg text-site-fg">
      <Navigation scrolled={scrolled} />
      <main>
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
