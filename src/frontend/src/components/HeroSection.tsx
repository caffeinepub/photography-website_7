import { ChevronDown } from 'lucide-react';

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in">
          Fine Art Photography
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-6">
          Aperture Studios Photography
        </h1>

        {/* Tagline */}
        <p className="text-white/70 text-base md:text-lg tracking-wide max-w-xl mx-auto mb-12 font-light">
          Where light meets emotion — crafting timeless images that tell your story with artistry and intention.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => smoothScroll('portfolio')}
            className="px-10 py-4 bg-gold text-site-bg text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            View Portfolio
          </button>
          <button
            type="button"
            onClick={() => smoothScroll('about')}
            className="px-10 py-4 border border-white/40 text-white text-xs tracking-[0.25em] uppercase font-light hover:border-gold hover:text-gold transition-all duration-300"
          >
            About Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={() => smoothScroll('portfolio')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors duration-300 group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
