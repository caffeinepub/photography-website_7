import { Mail, Camera } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';

const specialties = [
  { label: 'Portrait' },
  { label: 'Landscape' },
  { label: 'Wedding' },
  { label: 'Street' },
  { label: 'Fine Art' },
  { label: 'Commercial' },
];

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '800+', label: 'Sessions Completed' },
  { value: '40+', label: 'Awards Won' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-site-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">The Artist</p>
          <h2 className="font-serif text-4xl md:text-5xl text-site-fg mb-6">About Me</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Portrait */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/assets/generated/photographer-portrait.dim_600x800.png"
                alt="Photographer portrait"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border border-gold/20 -z-10 hidden lg:block" />
            </div>
            {/* Stats bar below portrait */}
            <div className="mt-6 bg-site-bg/95 backdrop-blur-sm border border-gold/10 p-6 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-2xl text-gold">{stat.value}</div>
                  <div className="text-[10px] tracking-[0.15em] uppercase text-muted-fg mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-3xl md:text-4xl text-site-fg mb-2">Alexandra Voss</h3>
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-8">Fine Art Photographer · New York</p>

            <div className="space-y-5 text-muted-fg text-sm leading-relaxed mb-10">
              <p>
                I am a fine art photographer based in New York City, dedicated to capturing the quiet poetry hidden in everyday moments. With over a decade behind the lens, I've developed a visual language that blends technical precision with raw emotional honesty.
              </p>
              <p>
                My work spans intimate portraiture, sweeping landscapes, and documentary wedding photography — each project approached with the same reverence for light, composition, and authentic human connection.
              </p>
              <p>
                I believe every photograph is a collaboration between the photographer and the world. My role is simply to be present, patient, and ready when the light is perfect.
              </p>
            </div>

            {/* Specialties */}
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-fg mb-4">Specialties</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((spec) => (
                  <span
                    key={spec.label}
                    className="text-xs tracking-[0.15em] uppercase border border-gold/30 text-gold/80 px-4 py-1.5 hover:bg-gold/10 transition-colors duration-200"
                  >
                    {spec.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@lensandlight.com"
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase border border-gold/50 text-gold px-6 py-3 hover:bg-gold hover:text-site-bg transition-all duration-300"
              >
                <Mail size={14} />
                Get in Touch
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-fg hover:text-gold transition-colors duration-300 border border-site-border hover:border-gold/50 px-5 py-3"
                aria-label="Instagram"
              >
                <SiInstagram size={14} />
                Instagram
              </a>
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-fg hover:text-gold transition-colors duration-300"
              >
                <Camera size={14} />
                View Work
              </a>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="border-t border-site-border pt-16 text-center max-w-2xl mx-auto">
          <div className="text-gold text-4xl font-serif mb-4 leading-none">"</div>
          <blockquote className="font-serif text-xl md:text-2xl text-site-fg/80 italic leading-relaxed mb-6">
            Photography is the art of frozen time — the ability to store emotion and feelings within a frame.
          </blockquote>
          <cite className="text-xs tracking-[0.3em] uppercase text-muted-fg not-italic">— Alexandra Voss</cite>
        </div>
      </div>
    </section>
  );
}
