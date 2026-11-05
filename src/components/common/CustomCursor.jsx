import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || 'VIEW');
        setIsHovered(true);
      } else if (e.target.closest('a, button, input, select, textarea')) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handlePointerOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center font-sans uppercase tracking-widest text-[9px] font-semibold select-none backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorText ? 44 : isHovered ? 20 : 6),
          y: mousePosition.y - (cursorText ? 44 : isHovered ? 20 : 6),
          width: cursorText ? 88 : isHovered ? 40 : 12,
          height: cursorText ? 88 : isHovered ? 40 : 12,
          backgroundColor: cursorText
            ? 'rgba(32, 30, 28, 0.94)'
            : isHovered
            ? 'rgba(180, 154, 98, 0.28)'
            : 'rgba(32, 30, 28, 0.85)',
          color: '#F1EEE8',
          border: cursorText
            ? '1px solid rgba(180, 154, 98, 0.6)'
            : isHovered
            ? '1px solid rgba(180, 154, 98, 0.8)'
            : 'none'
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.2
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-2 leading-tight tracking-wider text-[#B49A62]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
