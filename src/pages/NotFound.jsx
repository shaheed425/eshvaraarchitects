import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/common/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen bg-[#201E1C] text-[#F1EEE8] flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B49A62] font-semibold block">
            Error 404 • Spatial Void
          </span>

          <h1 className="font-editorial text-8xl sm:text-9xl text-[#F1EEE8] font-light leading-none">
            404
          </h1>

          <div className="space-y-3">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#F1EEE8] font-light">
              This space does not exist.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#F1EEE8]/70 font-light max-w-md mx-auto leading-relaxed">
              The architectural blueprint or coordinate you requested cannot be located within the Eshvara archive.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B49A62] text-[#201E1C] font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#F1EEE8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Homepage</span>
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#F1EEE8]/20 text-[#F1EEE8] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:border-white transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#B49A62]" />
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
