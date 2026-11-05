import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { brandInfo } from '../../data/brand';

export default function FinalCTA() {
  return (
    <section className="relative bg-[#201E1C] text-[#F1EEE8] py-28 sm:py-36 overflow-hidden">
      {/* Background Architectural Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-dusk-residence-clean.webp"
          alt="Eshvara Design Architects Final Call to Action"
          className="w-full h-full object-cover filter brightness-[0.28] contrast-[1.1]"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/concept-night-sanctuary.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C] via-[#201E1C]/80 to-[#201E1C]/65" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B49A62]/35 bg-[#201E1C]/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B49A62]" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold">
              Start Your Project
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#F1EEE8] font-light leading-[1.08] tracking-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="italic text-[#B49A62]">Together.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg lg:text-xl text-[#F1EEE8]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Have a project in mind? Let's begin with a conversation. Whether planning a new residence, developing a villa community, or renovating an existing property.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-[4px] bg-[#B49A62] text-[#201E1C] font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#F1EEE8] transition-all duration-300 shadow-xl active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${brandInfo.contacts.whatsapp}?text=Hello%20Eshvara%20Design%20Architects,%20I%20would%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-[4px] border border-[#F1EEE8]/30 hover:border-[#B49A62] bg-[#201E1C]/40 backdrop-blur-md text-[#F1EEE8] font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#B49A62]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-sans text-[#F1EEE8]/60 border-t border-[#F1EEE8]/10 max-w-xl mx-auto">
            <span>Ar. Sreejith: {brandInfo.contacts.principalArchitect.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>K. Sreeramachandran: {brandInfo.contacts.managingDirector.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
