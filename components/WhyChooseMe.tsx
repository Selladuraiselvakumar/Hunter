import React from 'react';
import { SITE_CONTENT } from '../constants';

const WhyChooseMe: React.FC = () => {
  return (
    <section className="py-24 bg-arch-dark text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-arch-accent rounded-full mix-blend-overlay filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
                 <h2 className="text-4xl font-serif font-bold mb-8">
                    {SITE_CONTENT.whyChooseMe.title}
                </h2>
                <div className="h-1 w-20 bg-arch-accent mb-8"></div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {SITE_CONTENT.whyChooseMe.paragraph}
                </p>
                <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-arch-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Uncompromising Quality
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-arch-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Sustainable Design Practices
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-arch-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Client-Centric Approach
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2">
                 <img src="https://picsum.photos/seed/blueprint/800/600" alt="Detailed Blueprint" className="w-full h-auto rounded-sm border-4 border-gray-700 shadow-2xl opacity-90" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;