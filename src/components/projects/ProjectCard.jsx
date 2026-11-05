import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, layout = "standard" }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between"
    >
      <Link
        to="/projects"
        className="block overflow-hidden relative"
        data-cursor="VIEW"
        aria-label={`View project details for ${project.title}`}
      >
        {/* Image Container with subtle reveal */}
        <div className={`w-full overflow-hidden bg-[#EAE5DA] ${project.aspectRatio || 'aspect-[4/3]'} relative`}>
          <img
            src={project.heroImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover img-editorial-zoom filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
          />

          {/* Dark Overlay Gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#292B26]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Floating Index Tag */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#292B26]/75 backdrop-blur-md text-[#F4F0E8] font-sans text-[11px] font-medium tracking-widest uppercase">
            {project.index || `0${index + 1}`}
          </div>

          {/* Category Tag */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#F4F0E8]/85 backdrop-blur-md text-[#292B26] font-sans text-[10px] font-semibold tracking-wider uppercase">
            {project.category}
          </div>
        </div>

        {/* Card Metadata / Typography */}
        <div className="pt-5 pb-2 flex flex-col justify-between">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#292B26] group-hover:text-[#777B6A] transition-colors duration-300 font-normal">
              {project.title}
            </h3>
            <span className="p-2 rounded-full border border-[#292B26]/10 group-hover:border-[#777B6A] group-hover:bg-[#777B6A] group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#77766F] font-light mt-1.5 line-clamp-2">
            {project.subtitle || project.overview}
          </p>

          <div className="mt-4 pt-3 border-t border-[#292B26]/10 flex items-center justify-between text-xs text-[#77766F] font-sans">
            <span className="flex items-center gap-1.5 text-[#77766F] group-hover:text-[#292B26] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#B8A58A]" />
              {project.location}
            </span>
            <span className="text-[#B8A58A] font-medium tracking-wider">
              {project.year} • {project.area}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

