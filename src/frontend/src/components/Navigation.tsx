import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
];

function smoothScroll(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    smoothScroll(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-site-bg/95 backdrop-blur-md border-b border-gold/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Brand */}
        <button
          onClick={() => handleNav('#home')}
          className="flex flex-col items-start group"
          aria-label="Go to home"
        >
          <span className="font-serif text-xl tracking-widest text-site-fg uppercase leading-none">
            Lens <span className="text-gold">&</span> Light
          </span>
          <span className="text-[10px] tracking-[0.3em] text-muted-fg uppercase mt-0.5">
            Photography
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-xs tracking-[0.2em] uppercase text-muted-fg hover:text-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleNav('#about')}
            className="text-xs tracking-[0.2em] uppercase border border-gold/50 text-gold px-5 py-2 hover:bg-gold hover:text-site-bg transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-site-fg hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-site-bg/98 backdrop-blur-md border-b border-gold/10`}
      >
        <nav className="flex flex-col px-6 py-6 gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm tracking-[0.2em] uppercase text-muted-fg hover:text-gold transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#about')}
            className="text-sm tracking-[0.2em] uppercase border border-gold/50 text-gold px-5 py-2 hover:bg-gold hover:text-site-bg transition-all duration-300 w-fit"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
