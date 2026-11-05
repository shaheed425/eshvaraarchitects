import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Common Components
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Services from './pages/Services';
import Process from './pages/Process';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Navigate to="/projects" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise" element={<Navigate to="/services" replace />} />
        <Route path="/process" element={<Process />} />
        <Route path="/approach" element={<Navigate to="/process" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#F1EEE8] text-[#201E1C] flex flex-col font-sans selection:bg-[#B49A62] selection:text-white pb-16 lg:pb-0">
        <ScrollToTop />
        <ScrollProgress />
        <FloatingWhatsApp />
        <Navbar />
        <div className="flex-1">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
