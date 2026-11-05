import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowRight, MapPin } from 'lucide-react';
import { projects } from '../../data/projects';

export default function FeaturedProjects() {
  const featuredList = projects.filter((p) => p.featured).slice(0, 6);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate transform for horizontal scroll on large screens
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  return (
    <section id="featured-works" className="relative bg-[#F4F0E8] py-24 sm:py-32 overflow-hidden border-b border-[#292B26]/10">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 sm:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#292B26]/10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#777B6A]" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F] font-semibold">
                Portfolio Curation
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#292B26] font-light tracking-tight">
              Selected Works
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-sm sm:text-base text-[#77766F] font-light leading-relaxed">
              Spaces shaped by context, material, light, and life. An exploration into honest tectonic expressions across Kerala and South India.
            </p>
            <div className="mt-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#292B26] hover:text-[#777B6A] transition-colors group"
              >
                <span>View Full Index</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Scroll Experience */}
      <div ref={containerRef} className="hidden lg:block relative h-[320vh]">
        <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 pl-12 pr-24 w-max">
            {featuredList.map((project, idx) => (
              <motion.div
                key={project.id}
                className="w-[580px] xl:w-[640px] flex-shrink-0 group"
              >
                <Link
                  to="/projects"
                  data-cursor="EXPLORE"
                  className="block relative"
                >
                  {/* Image Frame */}
                  <div className="relative w-full h-[420px] xl:h-[460px] overflow-hidden bg-[#EAE5DA]">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover img-editorial-zoom filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Badge */}
                    <div className="absolute top-5 left-5 z-10 px-3.5 py-1 rounded-full bg-[#292B26]/85 backdrop-blur-md text-[#F4F0E8] font-sans text-[11px] font-medium tracking-widest uppercase">
                      {project.index} / 06
                    </div>

                    <div className="absolute top-5 right-5 z-10 px-3.5 py-1 rounded-full bg-[#F4F0E8]/90 backdrop-blur-md text-[#292B26] font-sans text-[10px] font-semibold tracking-wider uppercase">
                      {project.category}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Metadata */}
                  <div className="pt-6 pb-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-editorial text-3xl xl:text-4xl text-[#292B26] group-hover:text-[#777B6A] transition-colors">
                        {project.title}
                      </h3>
                      <span className="p-2.5 rounded-full border border-[#292B26]/10 group-hover:bg-[#292B26] group-hover:text-[#F4F0E8] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    <p className="font-sans text-sm text-[#77766F] font-light mt-2 line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#292B26]/10 flex items-center justify-between text-xs font-sans text-[#77766F]">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#B8A58A]" />
                        {project.location}
                      </span>
                      <span className="text-[#292B26] font-medium tracking-wider">
                        {project.year} • {project.area}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* End of Horizontal Reel Card: Link to all */}
            <div className="w-[380px] flex-shrink-0 flex items-center justify-center bg-[#EAE5DA] p-12 border border-[#292B26]/10 my-4">
              <div className="text-center space-y-6">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#77766F]">
                  Archive Portfolio
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#292B26]">
                  Looking for more projects?
                </h3>
                <p className="font-sans text-xs text-[#77766F] leading-relaxed">
                  Browse our complete catalog of private villas, corporate towers, and interior sanctuaries.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#292B26] text-[#F4F0E8] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#777B6A] transition-colors"
                >
                  <span>View All Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile & Tablet Editorial Asymmetrical Grid Fallback */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {featuredList.map((project, idx) => (
          <article key={project.id} className="group">
            <Link to="/projects" className="block">
              <div className="relative aspect-[16/11] overflow-hidden bg-[#EAE5DA]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover img-editorial-zoom"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#292B26]/80 text-[#F4F0E8] text-[10px] font-sans tracking-widest uppercase">
                  {project.index}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#F4F0E8]/90 text-[#292B26] text-[10px] font-sans font-semibold uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              <div className="pt-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#292B26]">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-[#777B6A]" />
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#77766F] mt-1.5 font-light">
                  {project.subtitle}
                </p>
                <div className="mt-3 pt-2 border-t border-[#292B26]/10 flex items-center justify-between text-xs text-[#77766F] font-sans">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}

        <div className="pt-8 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#292B26] text-[#F4F0E8] font-sans text-xs uppercase tracking-[0.2em] font-semibold"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

