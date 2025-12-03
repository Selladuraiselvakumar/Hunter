import React from 'react';
import { SITE_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/archhero2/1920/1080"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
          {SITE_CONTENT.hero.title}
        </h1>
        <div className="w-24 h-1 bg-arch-accent mx-auto mb-8"></div>
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-gray-200">
          {SITE_CONTENT.hero.paragraph}
        </p>
        <div className="mt-10">
          <a
            href="#portfolio"
            className="inline-block px-8 py-3 border-2 border-white text-white font-semibold uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;