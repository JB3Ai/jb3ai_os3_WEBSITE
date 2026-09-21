import React from 'react';
import { AppModule } from '../types';
import { openConsultation } from '../utils/consultation';

interface CorporateFooterProps {
  onNavigate: (module: AppModule) => void;
}

export const CorporateFooter: React.FC<CorporateFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#080A0E] text-slate-300 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-wider">JB3Ai</span>
          <span>/</span>
          <span>OS3 Managed AI Operating System</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px]" aria-label="Footer navigation">
          <button type="button" onClick={() => onNavigate(AppModule.OS3_INFO)} className="hover:text-slate-300 transition-colors">OS³</button>
          <button type="button" onClick={() => openConsultation(onNavigate)} className="hover:text-slate-300 transition-colors">ADVISORY</button>
          <button type="button" onClick={() => onNavigate(AppModule.BROCHURES)} className="hover:text-slate-300 transition-colors">LIBRARY</button>
          <a href="https://jonoblackburn.com/os" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">OS3 DEMO</a>
          <a href="https://github.com/JB3Ai/jb3ai_os3_WEBSITE" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">GITHUB REPO</a>
        </nav>

        <p className="text-[11px]">
          © {new Date().getFullYear()} JB3Ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
