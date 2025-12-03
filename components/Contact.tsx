import React from 'react';
import { SITE_CONTENT } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">{SITE_CONTENT.contact.title}</h2>
            <div className="w-16 h-1 bg-arch-accent mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              {SITE_CONTENT.contact.paragraph}
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-arch-accent shadow-sm mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600">123 Design Avenue, Creative City, Arch State 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-arch-accent shadow-sm mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">contact@architectportfolio.com</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-arch-accent shadow-sm mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full px-4 py-3 border border-gray-300 focus:border-arch-accent focus:ring-1 focus:ring-arch-accent outline-none transition-colors" type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input className="w-full px-4 py-3 border border-gray-300 focus:border-arch-accent focus:ring-1 focus:ring-arch-accent outline-none transition-colors" type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 focus:border-arch-accent focus:ring-1 focus:ring-arch-accent outline-none transition-colors h-32 resize-none" id="message" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full bg-gray-900 text-white font-bold py-4 px-6 hover:bg-arch-accent transition-colors duration-300 uppercase tracking-widest">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;