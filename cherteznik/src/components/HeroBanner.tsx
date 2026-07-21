import React from 'react';
import heroHandImg from '@/assets/hero-hand-blueprint.jpg';

interface HeroBannerProps {
  title?: string;
  height?: number;
  badge?: React.ReactNode;
}

export function HeroBanner({
  title = 'Профессиональная разработка чертежей',
  height = 280,
  badge,
}: HeroBannerProps) {
  return (
    <div className="w-full flex-shrink-0 relative overflow-hidden" style={{ height }}>
      {/* Image fills the full block */}
      <img
        src={heroHandImg}
        className="w-full h-full object-cover object-top"
        alt="Разработка чертежей"
      />

      {/* Title overlays the dark-navy top of the image */}
      <div className="absolute inset-x-0 top-0 px-5 pt-4 pb-12 bg-gradient-to-b from-[#1B3B6F]/85 to-transparent text-center pointer-events-none">
        <p className="text-white font-extrabold text-[17px] tracking-[0.04em] uppercase leading-tight drop-shadow-sm">
          {title}
        </p>
      </div>

      {badge && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          {badge}
        </div>
      )}
    </div>
  );
}
