import React, { useState } from 'react';
import { ModuleGrid } from './components/ModuleGrid';
import { EcosystemImpact } from './components/EcosystemImpact';
import { CorporateFooter } from './components/CorporateFooter';
import { ContactConsulting } from './components/ContactConsulting';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'main' | 'demo'>('main');

  return (
    <div className="min-h-screen bg-[#080A0E] text-slate-200 font-sans selection:bg-slate-700 selection:text-white">
      <nav className="border-b border-slate-800/80 bg-[#080A0E]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('main')}>
            <span className="font-bold text-white tracking-widest text-lg">JB³Ai</span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-xs text-slate-400 tracking-widest uppercase hidden sm:block">
              OS³ Managed Infrastructure
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveView('main')}
              className={`text-xs font-mono uppercase tracking-wider transition-colors ${activeView === 'main' ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
            >
              Platform
            </button>
            <button
              onClick={() => setActiveView('demo')}
              className={`text-xs font-mono uppercase tracking-wider px-4 py-2 border transition-all ${activeView === 'demo' ? 'bg-slate-800 border-slate-700 text-white' : 'border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white'}`}
            >
              Launch OS³ Demo
            </button>
          </div>
        </div>
      </nav>

      <main>
        {activeView === 'demo' ? (
          <div className="w-full h-[calc(100vh-4rem)] bg-[#050608]">
            <iframe
              src="https://jonoblackburn.com/os"
              className="w-full h-full border-none"
              title="OS3 Interactive Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-24 py-16">
            <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Enterprise AI, <span className="text-slate-500">Containerized.</span>
              </h1>
              <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-400 leading-relaxed">
                Explore the 9 core modules of the OS³ architecture. Built for institutional intelligence, seamless workflow automation, and secure corporate integration.
              </p>
            </header>

            <section id="products" className="scroll-mt-24">
              <ModuleGrid />
            </section>

            <section className="bg-[#0B0E14] border-y border-slate-800/50 py-24">
              <EcosystemImpact />
            </section>

            {/* NEW: Contact & Consulting Section */}
            <ContactConsulting />
          </div>
        )}
      </main>

      {activeView === 'main' && <CorporateFooter />}
    </div>
  );
};
