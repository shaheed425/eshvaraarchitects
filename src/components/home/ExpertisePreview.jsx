import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';

export default function ExpertisePreview() {
  const [activeService, setActiveService] = useState(services[0]);

  // Take the 6 primary categories for the homepage preview
  const previewServices = services.slice(0, 6);

  return (
    <section className="relative bg-[#F4F0E8] py-24 sm:py-36 overflow-hidden border-b border-[#292B26]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#292B26]/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#777B6A]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                Practice Scope
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl text-[#292B26] font-light">
              Thoughtfully designed. <br className="hidden sm:inline" />
              <span className="italic font-normal">Carefully delivered.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed mb-4">
              From conceptual sketches to turnkey construction, we orchestrate every stage of the built environment with architectural precision.
            </p>
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#292B26] hover:text-[#777B6A] transition-colors group"
            >
              <span>Explore All 10 Disciplines</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Desktop Split View: Interactive List on Left, Floating Sticky Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Services List */}
          <div className="lg:col-span-7 divide-y divide-[#292B26]/10">
            {previewServices.map((service) => {
              const isActive = activeService?.id === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className={`group py-8 transition-all duration-300 cursor-pointer ${
                    isActive ? 'pl-2 sm:pl-4' : 'hover:pl-2'
                  }`}
                >
                  <Link to="/expertise" className="block">
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-6 sm:gap-8">
                        <span className={`font-sans text-sm font-semibold tracking-wider transition-colors duration-300 ${
                          isActive ? 'text-[#777B6A]' : 'text-[#77766F]/60 group-hover:text-[#292B26]'
                        }`}>
                          {service.number}
                        </span>
                        <h3 className={`font-editorial text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 ${
                          isActive ? 'text-[#292B26] translate-x-1 font-normal' : 'text-[#292B26]/80 group-hover:text-[#292B26]'
                        }`}>
                          {service.title}
                        </h3>
                      </div>

                      <div className={`p-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#292B26] text-[#F4F0E8] rotate-45'
                          : 'border border-[#292B26]/10 text-[#77766F] group-hover:border-[#292B26]'
                      }`}>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className={`font-sans text-xs sm:text-sm text-[#77766F] font-light mt-3 max-w-xl transition-all duration-300 pl-12 sm:pl-16 ${
                      isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'
                    }`}>
                      {service.shortDesc}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Sticky Architectural Image Preview */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#292B26] shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#F4F0E8]">
                    <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B8A58A] block mb-1">
                      Discipline {activeService.number}
                    </span>
                    <h4 className="font-editorial text-2xl font-light">{activeService.title}</h4>
                    <p className="font-sans text-xs text-[#F4F0E8]/70 mt-1 font-light">{activeService.highlight}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

