import React from 'react';
import { SITE_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* About Me */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/architect/800/1000"
              alt="Architectural Engineer"
              className="w-full h-[500px] object-cover shadow-xl rounded-sm"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 relative">
              {SITE_CONTENT.about.title}
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-arch-accent"></span>
            </h2>
            <p className="text-gray-600 leading-8 text-lg mb-6">
              {SITE_CONTENT.about.paragraph}
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8 border-gray-200">
               <div>
                 <span className="block text-3xl font-bold text-arch-accent">10+</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-arch-accent">50+</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Projects Done</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-arch-accent">100%</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wide">Client Satisfaction</span>
               </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-arch-concrete p-10 md:p-16 rounded-sm shadow-inner mt-12 border-l-4 border-arch-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              {SITE_CONTENT.missionVision.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              "{SITE_CONTENT.missionVision.paragraph}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;