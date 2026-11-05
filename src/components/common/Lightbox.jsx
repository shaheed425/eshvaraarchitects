import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export default function Lightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onPrev,
  onNext
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex] || items[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#292B26]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Bar */}
        <div
          className="flex items-center justify-between z-10 text-[#F4F0E8] border-b border-[#F4F0E8]/10 pb-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="font-editorial text-xl sm:text-2xl text-[#F4F0E8]">
              {currentItem.title || currentItem.caption}
            </span>
            {currentItem.category && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest bg-[#B8A58A]/20 text-[#B8A58A] border border-[#B8A58A]/30">
                {currentItem.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-xs tracking-widest text-[#F4F0E8]/50">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F4F0E8]/10 hover:bg-[#F4F0E8]/20 text-[#F4F0E8] transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Middle Image Area */}
        <div
          className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#292B26]/70 hover:bg-[#292B26] text-[#F4F0E8] border border-[#F4F0E8]/20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="max-h-[75vh] max-w-[90vw] flex items-center justify-center shadow-2xl"
          >
            <img
              src={currentItem.image || currentItem.url}
              alt={currentItem.title || currentItem.caption || "Eshvara Design Architects Gallery View"}
              className="max-h-[75vh] max-w-full object-contain rounded-sm"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/residence-clean-crop.jpg';
              }}
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#292B26]/70 hover:bg-[#292B26] text-[#F4F0E8] border border-[#F4F0E8]/20 transition-all duration-300 backdrop-blur-sm"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Details Bar */}
        <div
          className="border-t border-[#F4F0E8]/10 pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#F4F0E8]/70 gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="font-sans font-light max-w-2xl text-xs sm:text-sm text-[#F4F0E8]/90">
            {currentItem.description || currentItem.caption || ""}
          </p>
          {currentItem.location && (
            <div className="flex items-center gap-1.5 text-[#B8A58A] font-sans text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>{currentItem.location}</span>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

