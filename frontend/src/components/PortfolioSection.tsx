import { useState } from 'react';
import Lightbox from './Lightbox';

interface PortfolioImage {
  src: string;
  alt: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

const portfolioImages: PortfolioImage[] = [
  { src: '/assets/generated/portfolio-1.dim_800x1000.png', alt: 'Fine art portrait with dramatic lighting', category: 'Portrait', aspect: 'portrait' },
  { src: '/assets/generated/portfolio-2.dim_1000x800.png', alt: 'Aerial landscape with morning fog', category: 'Landscape', aspect: 'landscape' },
  { src: '/assets/generated/portfolio-3.dim_800x1000.png', alt: 'Wedding couple silhouette at sunset', category: 'Wedding', aspect: 'portrait' },
  { src: '/assets/generated/portfolio-4.dim_800x800.png', alt: 'Macro flower petal with bokeh', category: 'Macro', aspect: 'square' },
  { src: '/assets/generated/portfolio-5.dim_1000x800.png', alt: 'Urban cityscape at night', category: 'Urban', aspect: 'landscape' },
  { src: '/assets/generated/portfolio-6.dim_800x800.png', alt: 'Analog film camera still life', category: 'Still Life', aspect: 'square' },
  { src: '/assets/generated/portfolio-7.dim_800x1000.png', alt: 'Autumn forest path', category: 'Landscape', aspect: 'portrait' },
  { src: '/assets/generated/portfolio-8.dim_1000x800.png', alt: 'Dramatic stormy seascape', category: 'Seascape', aspect: 'landscape' },
  { src: '/assets/generated/portfolio-9.dim_800x1000.png', alt: 'Street photography in European alley', category: 'Street', aspect: 'portrait' },
];

const categories = ['All', 'Portrait', 'Landscape', 'Wedding', 'Urban', 'Street'];

export default function PortfolioSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeCategory);

  const handleImageClick = (filteredIndex: number) => {
    // Find the actual index in the full array for lightbox navigation
    const img = filtered[filteredIndex];
    const fullIndex = portfolioImages.findIndex(p => p.src === img.src);
    setLightboxIndex(fullIndex);
  };

  return (
    <section id="portfolio" className="py-28 px-6 bg-site-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Selected Works</p>
          <h2 className="font-serif text-4xl md:text-5xl text-site-fg mb-6">Portfolio</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <p className="text-muted-fg text-sm tracking-wide max-w-md mx-auto leading-relaxed">
            A curated collection of moments frozen in time — each image a story waiting to be told.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.2em] uppercase px-5 py-2 transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-site-bg'
                  : 'border border-site-border text-muted-fg hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((image, idx) => (
            <div
              key={image.src}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-400 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold block mb-1">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-light">{image.alt}</p>
                </div>
              </div>
              {/* Expand icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                  <path d="M1 1h5M1 1v5M13 13H8M13 13V8M13 1H8M13 1V6M1 13h5M1 13V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={portfolioImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
