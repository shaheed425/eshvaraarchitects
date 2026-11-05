import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandInfo } from '../../data/brand';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${brandInfo.contacts.whatsapp}?text=${encodeURIComponent(
    'Hello Eshvara Design Architects, I would like to discuss an architectural project.'
  )}`;

  return (
    <aside
      className="fixed right-3.5 sm:right-6 lg:right-8 bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] sm:bottom-[calc(5.5rem+env(safe-area-inset-bottom,0px))] lg:bottom-8 z-50 select-none pointer-events-none"
      aria-label="Direct WhatsApp Contact"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center justify-center w-[43px] h-[43px] sm:w-[51px] sm:h-[51px] rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] hover:bg-[#22c35e] transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Chat directly with Eshvara Design Architects on WhatsApp"
        >
          {/* Subtle Breathing Pulse Glow Ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none opacity-75" />

          {/* Official WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 32 32"
            className="w-[21px] h-[21px] sm:w-[26px] sm:h-[26px] fill-current relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.68.75 5.19 2.06 7.33L2 30l6.87-2.01A13.9 13.9 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.54c-2.31 0-4.48-.67-6.31-1.83l-.45-.29-4.24 1.24 1.27-4.13-.3-.47A11.45 11.45 0 0 1 4.46 16c0-6.36 5.18-11.54 11.54-11.54s11.54 5.18 11.54 11.54-5.18 11.54-11.54 11.54zm6.65-8.52c-.36-.18-2.15-1.06-2.48-1.18-.33-.12-.57-.18-.81.18-.24.36-.93 1.18-1.14 1.42-.21.24-.42.27-.78.09-.36-.18-1.53-.56-2.91-1.79-1.08-.96-1.8-2.15-2.01-2.51-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61l-.69-.01c-.24 0-.63.09-.96.45s-1.26 1.23-1.26 3c0 1.77 1.29 3.48 1.47 3.72.18.24 2.54 3.88 6.16 5.44.86.37 1.53.59 2.06.76.87.28 1.66.24 2.28.15.7-.1 2.15-.88 2.45-1.73.3-.85.3-1.58.21-1.73-.09-.15-.33-.24-.69-.42z" />
          </svg>

          {/* Desktop Tooltip Pill on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:flex items-center gap-2 absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3.5 py-2 rounded-[6px] bg-[#161513]/95 backdrop-blur-md border border-white/15 text-white shadow-2xl pointer-events-none whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-sans text-xs font-semibold tracking-wider">
                  Chat with Architect
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      </motion.div>
    </aside>
  );
}

