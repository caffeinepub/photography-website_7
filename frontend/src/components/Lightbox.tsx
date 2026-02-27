import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
  category: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const current = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1);
  }, [hasPrev, currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1);
  }, [hasNext, currentIndex, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-gold transition-colors duration-200 border border-white/10 hover:border-gold/50"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={18} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/40 uppercase">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev Button */}
      {hasPrev && (
        <button
          className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center text-white/60 hover:text-gold transition-colors duration-200 border border-white/10 hover:border-gold/50"
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center text-white/60 hover:text-gold transition-colors duration-200 border border-white/10 hover:border-gold/50"
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="max-w-full max-h-[78vh] object-contain shadow-2xl"
        />
        {/* Caption */}
        <div className="mt-4 text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold mr-3">{current.category}</span>
          <span className="text-white/50 text-xs">{current.alt}</span>
        </div>
      </div>
    </div>
  );
}
