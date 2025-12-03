import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-serif font-bold tracking-widest mb-2">
              ARCH<span className="text-arch-accent">.</span>ENG
            </div>
            <p className="text-gray-500 text-sm">
              Creating spaces that inspire since 2014.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Behance</a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Architectural Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;