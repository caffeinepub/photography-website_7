import { Camera } from 'lucide-react';
import { SiInstagram, SiFacebook, SiX } from 'react-icons/si';

const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'unknown-app';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-site-bg border-t border-site-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-lg tracking-widest text-site-fg uppercase">
                Lens <span className="text-gold">&</span> Light
              </span>
              <span className="text-[10px] tracking-[0.3em] text-muted-fg uppercase mt-0.5">Photography</span>
            </div>
            <p className="text-muted-fg text-xs leading-relaxed max-w-xs">
              Fine art photography capturing the beauty of fleeting moments with artistry and intention.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-fg mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'About', id: 'about' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-xs tracking-[0.15em] uppercase text-muted-fg hover:text-gold transition-colors text-left w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted-fg mb-5">Connect</p>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:hello@lensandlight.com"
                className="text-xs tracking-[0.1em] text-muted-fg hover:text-gold transition-colors"
              >
                hello@lensandlight.com
              </a>
              <span className="text-xs tracking-[0.1em] text-muted-fg">New York City, NY</span>
            </div>
            <div className="flex gap-4">
              {[
                { Icon: SiInstagram, href: 'https://instagram.com', label: 'Instagram' },
                { Icon: SiFacebook, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: SiX, href: 'https://x.com', label: 'X (Twitter)' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-site-border flex items-center justify-center text-muted-fg hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-site-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-fg tracking-wide">
            © {year} Lens & Light Photography. All rights reserved.
          </p>
          <p className="text-xs text-muted-fg flex items-center gap-1.5">
            Built with{' '}
            <Camera size={12} className="text-gold" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
