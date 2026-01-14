
import React from 'react';
import { IMAGES } from '../constants';

interface HeroProps {
  title: string;
  tagline?: string;
  backgroundImage: string;
  primaryCTA?: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  overlayOpacity?: string;
  centered?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  tagline,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  overlayOpacity = 'bg-black/40',
  centered = true,
}) => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={`absolute inset-0 z-10 ${overlayOpacity}`} />
      
      <div className={`relative z-20 w-full max-w-[1200px] mx-auto px-6 ${centered ? 'text-center' : 'text-left'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
          {title}
        </h1>
        {tagline && (
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {tagline}
          </p>
        )}
        <div className={`flex flex-col sm:flex-row gap-4 ${centered ? 'justify-center' : 'justify-start'}`}>
          {primaryCTA && (
            <a
              href={primaryCTA.link}
              className="bg-[#1e3a8a] text-white px-8 py-4 rounded-md font-bold text-sm md:text-base hover:bg-blue-800 transition-all transform hover:-translate-y-1"
            >
              {primaryCTA.text}
            </a>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.link}
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold text-sm md:text-base hover:bg-white/20 transition-all transform hover:-translate-y-1"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

interface CardProps {
  image: string;
  title: string;
  text: string;
  metadata?: string;
  ctaText?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ image, title, text, metadata, ctaText, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#0f172a] mb-2">{title}</h3>
        <p className="text-[#475569] text-sm mb-4 line-clamp-3">{text}</p>
        {metadata && (
          <p className="text-xs font-medium text-[#1e3a8a] uppercase tracking-wider mb-6 mt-auto">
            {metadata}
          </p>
        )}
        <button
          onClick={onClick}
          className="mt-auto inline-flex items-center text-[#1e3a8a] font-bold text-sm hover:underline"
        >
          {ctaText || 'Läs mer'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl">
        <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#0f172a]">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <img src={IMAGES.img8} alt="Stäng" className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
