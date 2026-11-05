import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Eye, Maximize2 } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';
import { projects, projectCategories } from '../data/projects';
import ArchitecturalShowcase from '../components/showcase/ArchitecturalShowcase';
import FinalCTA from '../components/home/FinalCTA';
import Lightbox from '../components/common/Lightbox';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  // Lightbox items mapping from filteredProjects
  const lightboxItems = filteredProjects.map((p) => ({
    image: p.heroImage || '/residence-clean-crop.jpg',
    title: p.title,
    category: p.category,
    location: p.location,
    description: p.description || p.summary || p.overview || ''
  }));

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxItems.length - 1));
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev < lightboxItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <PageTransition>
      <main className="w-full pt-32 sm:pt-40 bg-[#F1EEE8] text-[#201E1C] min-h-screen">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 border-b border-[#201E1C]/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#B49A62]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                  Architectural Portfolio
                </span>
              </div>
              <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-[#201E1C] font-light tracking-tight leading-[1.02]">
                Our Projects
              </h1>
            </div>

            <div className="max-w-md">
              <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
                A selection of private residences, gated villa developments, architectural remodelings, and climate-responsive concepts across Kerala.
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap items-center gap-2 sm:gap-3 pt-6 border-t border-[#201E1C]/10">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-[4px] font-sans text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#201E1C] text-[#F1EEE8] shadow-md'
                      : 'bg-[#D9D0C1]/40 text-[#77766F] hover:bg-[#D9D0C1] hover:text-[#201E1C]'
                  }`}
                >
                  {category}
                  {category === "All Projects" && ` (${projects.length})`}
                </button>
              );
            })}
          </div>
        </section>

        {/* Dynamic Project Cards Grid (Self-Contained in-page view, No Single Page navigation) */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="group flex flex-col justify-between bg-[#F1EEE8] border border-[#201E1C]/10 hover:border-[#B49A62] transition-colors p-5 shadow-sm"
                >
                  <div className="block">
                    {/* Image with Click-to-Zoom Lightbox trigger */}
                    <div
                      onClick={() => handleOpenLightbox(index)}
                      className="relative aspect-[4/3] w-full overflow-hidden bg-[#201E1C] mb-5 cursor-pointer"
                      title="Click to view full photo"
                    >
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover img-editorial-zoom filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/projects/parachantha-villa-enclave.jpg';
                        }}
                      />

                      {/* Hover Overlay with Eye Icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#161513]/85 text-[#F4F0E8] border border-white/20 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 className="w-5 h-5 text-[#B49A62]" />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 px-3 py-0.5 rounded-full bg-[#201E1C]/80 text-[#B49A62] text-[10px] font-sans font-bold tracking-widest uppercase">
                        {project.number}
                      </div>
                      <div className="absolute top-3 right-3 px-3 py-0.5 rounded-full bg-[#F1EEE8]/90 text-[#201E1C] text-[10px] font-sans font-bold uppercase tracking-wider">
                        {project.category}
                      </div>
                    </div>

                    {/* Metadata Content */}
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-editorial text-2xl sm:text-3xl text-[#201E1C] font-normal">
                          {project.title}
                        </h3>
                        <span className="text-xs text-[#B49A62] font-sans font-medium">
                          {project.siteArea || project.builtUpArea || project.year}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-[#77766F] font-light line-clamp-2 leading-relaxed">
                        {project.summary || project.description}
                      </p>
                    </div>

                    {/* Footer Info & Quick Zoom Button */}
                    <div className="mt-4 pt-3 border-t border-[#201E1C]/10 flex items-center justify-between text-xs text-[#77766F] font-sans">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#B49A62]" />
                        {project.location}
                      </span>

                      <button
                        type="button"
                        onClick={() => handleOpenLightbox(index)}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-[#201E1C] hover:text-[#B49A62] transition-colors"
                      >
                        <span>View Photo</span>
                        <Eye className="w-3.5 h-3.5 text-[#B49A62]" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* In-page Fullscreen Lightbox Modal (No Single Page Navigation) */}
        <Lightbox
          isOpen={lightboxIndex !== null}
          onClose={handleCloseLightbox}
          items={lightboxItems}
          currentIndex={lightboxIndex !== null ? lightboxIndex : 0}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />

        <ArchitecturalShowcase />

        <FinalCTA />
      </main>
    </PageTransition>
  );
}
