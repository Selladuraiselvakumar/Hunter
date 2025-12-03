import React from 'react';
import { SITE_CONTENT } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    { id: 1, title: "The Glass House", category: "Residential", imageUrl: "https://picsum.photos/seed/arch1/600/400" },
    { id: 2, title: "Azure Office Complex", category: "Commercial", imageUrl: "https://picsum.photos/seed/arch2/600/800" },
    { id: 3, title: "Urban Loft Interior", category: "Interior", imageUrl: "https://picsum.photos/seed/arch3/600/600" },
    { id: 4, title: "Eco-Friendly Villa", category: "Sustainable", imageUrl: "https://picsum.photos/seed/arch4/600/400" },
    { id: 5, title: "Skyline Tower", category: "Commercial", imageUrl: "https://picsum.photos/seed/arch5/600/800" },
    { id: 6, title: "Modernist Pavilion", category: "Public", imageUrl: "https://picsum.photos/seed/arch6/600/500" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{SITE_CONTENT.portfolio.title}</h2>
          <p className="text-gray-600 leading-relaxed">
            {SITE_CONTENT.portfolio.paragraph}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group break-inside-avoid overflow-hidden cursor-pointer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-sm transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/70 transition-colors duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-arch-accent text-sm uppercase tracking-widest">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;