import React from 'react';
import { studioInfo } from '../../data/studio';

export default function Partners() {
  return (
    <section className="bg-[#F4F0E8] py-20 border-b border-[#292B26]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] block mb-2 font-medium">
            Strategic Alliances
          </span>
          <p className="font-editorial text-2xl sm:text-3xl text-[#292B26] font-light">
            Collaborating with specialized engineering and artisan partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studioInfo.partners.map((partner) => (
            <div
              key={partner.name}
              className="p-8 border border-[#292B26]/10 bg-[#EAE5DA]/60 hover:bg-[#EAE5DA] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-editorial text-3xl text-[#292B26] tracking-wider font-light group-hover:text-[#777B6A] transition-colors">
                    {partner.name}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#B8A58A]" />
                </div>
                <p className="font-sans text-xs uppercase tracking-widest text-[#77766F] font-semibold mb-2">
                  {partner.role}
                </p>
                <p className="font-sans text-xs text-[#77766F] font-light leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

