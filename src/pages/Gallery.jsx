import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MapPin } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import Lightbox from '../components/common/Lightbox';
import { galleryItems, galleryCategories } from '../data/gallery';
import FinalCTA from '../components/home/FinalCTA';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <main className="w-full pt-32 sm:pt-40 bg-[#F4F0E8] text-[#292B26] min-h-screen">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-14 border-b border-[#292B26]/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#777B6A]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                  Visual Magazine
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#292B26] font-light tracking-tight leading-[1.02]">
                Architectural Archive
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                A curated photographic study of light, spatial volume, raw materiality, and craftsmanship across our built portfolio.
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-12 flex flex-wrap items-center gap-2 sm:gap-3 pt-6 border-t border-[#292B26]/10">
            {galleryCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#292B26] text-[#F4F0E8] shadow-sm'
                      : 'bg-[#EAE5DA] text-[#77766F] hover:text-[#292B26] hover:bg-[#E2DBD0]'
                  }`}
                >
                  {category}
                  {category === "All" && ` (${galleryItems.length})`}
                </button>
              );
            })}
          </div>
        </section>

        {/* Masonry / Editorial Asymmetrical Gallery */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <motion.div
            layout
            className="grid grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className={`${item.span || 'col-span-12 md:col-span-6'} group relative cursor-pointer`}
                  onClick={() => handleOpenLightbox(idx)}
                >
                  <div className={`relative overflow-hidden bg-[#292B26] ${item.aspectRatio || 'aspect-[4/3]'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover img-editorial-zoom filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/residence-clean-crop.webp';
                      }}
                    />

                    {/* Dark Vignette Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-[#F4F0E8]/90 text-[#292B26] font-semibold">
                          {item.category}
                        </span>
                        <div className="p-2 rounded-full bg-[#F4F0E8]/20 backdrop-blur-md text-white">
                          <Maximize2 className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="text-[#F4F0E8] space-y-1">
                        <h3 className="font-editorial text-2xl font-light">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs text-[#F4F0E8]/80 line-clamp-1 font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Below photo label */}
                  <div className="pt-3 pb-1 flex items-baseline justify-between text-xs text-[#77766F] font-sans">
                    <span className="font-medium text-[#292B26] group-hover:text-[#777B6A] transition-colors">
                      {item.title}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-[#B8A58A]" />
                      {item.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={filteredItems}
          currentIndex={currentIndex}
          onPrev={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
          onNext={() => setCurrentIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
        />

        <FinalCTA />
      </main>
    </PageTransition>
  );
}

