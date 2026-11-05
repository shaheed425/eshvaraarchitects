import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { brandInfo } from '../../data/brand';

const navItems = [
  { name: "HOME", path: "/" },
  { name: "PROJECTS", path: "/projects" },
  { name: "SERVICES", path: "/services" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT", path: "/contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isHome = location.pathname === '/';
  const isDarkNav = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF8F5]/96 backdrop-blur-md pt-[calc(17px+env(safe-area-inset-top,0px))] pb-3 sm:py-3.5 border-b border-[#201E1C]/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] text-[#201E1C] translate-y-0 opacity-100'
            : isDarkNav
            ? 'bg-gradient-to-b from-[#111318]/85 via-[#111318]/40 to-transparent pt-[calc(17px+env(safe-area-inset-top,0px))] pb-3.5 sm:py-6 text-white translate-y-0 opacity-100'
            : 'bg-[#FAF8F5]/96 backdrop-blur-md pt-[calc(17px+env(safe-area-inset-top,0px))] pb-3.5 sm:py-4 border-b border-[#201E1C]/10 text-[#201E1C] translate-y-0 opacity-100'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-14 flex items-center justify-between">
          {/* Logo with vertical divider line matching screenshot */}
          <div className="flex items-center">
            <Link
              to="/"
              className="group flex flex-col focus:outline-none"
              aria-label="Eshvara Design Architects Home"
            >
              <span
                className={`font-editorial text-2xl sm:text-3xl tracking-[0.22em] font-normal uppercase transition-colors leading-none ${
                  isDarkNav
                    ? 'text-[#F4F0E8] group-hover:text-[#B49A62]'
                    : 'text-[#201E1C] group-hover:text-[#B49A62]'
                }`}
              >
                ESHVARA
              </span>
              <span className="font-sans text-[8.5px] sm:text-[9.5px] tracking-[0.34em] uppercase font-semibold text-[#B49A62] mt-1.5 leading-none">
                DESIGN ARCHITECTS
              </span>
            </Link>

            {/* Subtle vertical separator next to logo matching screenshot */}
            <div
              className={`hidden xl:block h-7 w-[1px] ml-7 mr-2 transition-colors ${
                isDarkNav ? 'bg-[#F4F0E8]/25' : 'bg-[#201E1C]/20'
              }`}
            />
          </div>

          {/* Desktop Navigation Links matching screenshot */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 py-1 ${
                    isActive
                      ? isDarkNav
                        ? 'text-[#F4F0E8]'
                        : 'text-[#201E1C]'
                      : isDarkNav
                      ? 'text-[#F4F0E8]/80 hover:text-[#B49A62]'
                      : 'text-[#201E1C]/75 hover:text-[#B49A62]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicatorActiveSeam"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#B49A62]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Top CTA (Desktop only) & Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-[4px] bg-[#B49A62] text-[#161513] font-sans text-xs uppercase tracking-[0.18em] font-bold hover:bg-[#F4F0E8] hover:text-[#161513] transition-all duration-300 shadow-md active:scale-95"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>

            {/* Mobile / Secondary Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors focus:outline-none ${
                isDarkNav
                  ? 'text-[#F4F0E8] hover:text-[#B49A62]'
                  : 'text-[#201E1C] hover:text-[#B49A62]'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#B49A62]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          IPHONE-STYLE FLOATING BOTTOM CONTROL BAR (Mobile Viewport Only)
          ========================================================================= */}
      {!mobileMenuOpen && (
        <nav
          aria-label="Mobile Bottom Control Dock"
          className="fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] inset-x-3 sm:inset-x-6 z-50 lg:hidden pointer-events-none"
          style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="max-w-md mx-auto bg-[#161513]/95 backdrop-blur-2xl border border-[#3A3022] rounded-[28px] px-2.5 xs:px-3 sm:px-4 py-2 shadow-[0_14px_45px_rgba(0,0,0,0.85)] flex items-center justify-between pointer-events-auto gap-1 xs:gap-1.5 sm:gap-2">
            {/* Quick Call */}
            <a
              href={`tel:${brandInfo.contacts?.principalArchitect?.phoneRaw || '+918848758571'}`}
              className="flex items-center gap-1.5 sm:gap-2 px-2 xs:px-2.5 py-1.5 text-white hover:text-[#D4A373] text-[11px] xs:text-[12px] sm:text-sm font-medium tracking-wide transition-colors shrink-0 cursor-pointer"
              aria-label="Call Architect"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A373] shrink-0" />
              <span>Call</span>
            </a>

            {/* Subtle Divider */}
            <div className="h-4 sm:h-5 w-[1px] bg-white/15 shrink-0" />

            {/* Quick WhatsApp / Chat */}
            <a
              href="https://wa.me/918848758571?text=Hello%20Eshvara%20Design%20Architects,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-2 xs:px-2.5 py-1.5 text-white hover:text-[#D4A373] text-[11px] xs:text-[12px] sm:text-sm font-medium tracking-wide transition-colors shrink-0 cursor-pointer"
              aria-label="WhatsApp Us"
            >
              <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4A373] shrink-0" />
              <span>Chat</span>
            </a>

            {/* Primary Action: START A PROJECT */}
            <Link
              to="/contact"
              className="flex items-center gap-1 sm:gap-1.5 px-3 xs:px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-[20px] bg-[#D4A373] text-[#14161C] font-sans text-[10.5px] xs:text-[11px] sm:text-xs uppercase tracking-wider font-bold hover:bg-[#E2B17B] transition-all shadow-md active:scale-95 ml-0.5 sm:ml-1 shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </nav>
      )}

      {/* Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#161513] text-[#F4F0E8] flex flex-col justify-between pt-24 pb-10 px-8 sm:px-12 lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-[#F4F0E8]/10 pb-5">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#B49A62] font-semibold">
                DESIGN. COORDINATE. BUILD.
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F4F0E8] hover:text-[#B49A62]"
                aria-label="Close Navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 py-8">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-editorial text-3xl sm:text-4xl uppercase tracking-wider block transition-colors ${
                        isActive ? 'text-[#B49A62] italic' : 'text-[#F4F0E8] hover:text-[#B49A62]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-[#F4F0E8]/10 space-y-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#B49A62] text-[#161513] font-sans text-xs uppercase tracking-[0.2em] font-bold shadow-lg"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex flex-col gap-2 text-xs text-[#C5C0B8] pt-2 font-sans">
                <a
                  href={`tel:${brandInfo.contacts?.principalArchitect?.phoneRaw || '+918848758571'}`}
                  className="flex items-center gap-2 hover:text-[#B49A62]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B49A62]" />
                  <span>{brandInfo.contacts?.principalArchitect?.phone || '+91 88487 58571'}</span>
                </a>
                <a
                  href={`mailto:${brandInfo.contacts?.email || 'hello@eshvara.design'}`}
                  className="flex items-center gap-2 hover:text-[#B49A62]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B49A62]" />
                  <span>{brandInfo.contacts?.email || 'hello@eshvara.design'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
