import React from 'react';

export interface AppModuleCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  demoUrl?: string;
  pdfUrl?: string;
  isSponsorshipLinked?: boolean;
}

const MODULES: AppModuleCard[] = [
  {
    id: 'investigator-ai',
    title: 'Investigator AI',
    tag: 'Forensic Analysis',
    description:
      'Forensic Data & Sequence Mapping: Export complex communications (WhatsApp archives, voice notes, imagery) into fully transcribed, forensic-level timelines.',
    demoUrl: '/demo?app=investigator',
    pdfUrl: '/docs/investigator-ai-spec.pdf',
  },
  {
    id: 'superagents',
    title: 'SuperAgents',
    tag: 'AI Workforce',
    description:
      'Automated AI Workforce: Deploy a multilingual AI workforce optimized for operations, research, finance, and legal workflows with native ecosystem integrations.',
    demoUrl: '/demo?app=superagents',
    pdfUrl: '/docs/superagents-spec.pdf',
  },
  {
    id: 'clipboard-ai',
    title: 'ClipboardAI',
    tag: 'Encrypted Comms',
    description:
      'Secure Containerized Communications: An open-source, container-to-container communication protocol featuring strict 256-bit encryption for chat and document sharing.',
    demoUrl: '/demo?app=clipboard',
    pdfUrl: '/docs/clipboard-ai-spec.pdf',
  },
  {
    id: 'voicegrid-ai',
    title: 'VoiceGrid AI',
    tag: 'Multilingual Voice',
    description:
      'High-Volume Voice Operations: Next-generation call center architecture supporting 8 South African languages and 50+ international languages with pay-per-second billing.',
    demoUrl: '/demo?app=voicegrid',
    pdfUrl: '/docs/voicegrid-ai-spec.pdf',
  },
  {
    id: 'viewgrid',
    title: 'ViewGrid',
    tag: 'Satellite Surveillance',
    description:
      'Open-Source Aerial Intelligence: A digital satellite surveillance system offering advanced overhead monitoring for logistical, security, or environmental oversight.',
    demoUrl: '/demo?app=viewgrid',
    pdfUrl: '/docs/viewgrid-spec.pdf',
  },
  {
    id: 'isikolo-ai',
    title: 'Isikolo AI',
    tag: 'Educational CSR',
    description:
      'Accessible Educational Intelligence: A zero-cost, AI-powered educational platform preloaded with the South African school curriculum across 11 official languages.',
    demoUrl: '/demo?app=isikolo',
    pdfUrl: '/docs/isikolo-ai-spec.pdf',
    isSponsorshipLinked: true,
  },
];

export const ApplicationGrid: React.FC = () => {
  const handleInitialize = (app: AppModuleCard) => {
    if (app.demoUrl) {
      window.location.assign(app.demoUrl);
    }
  };

  const handleOpenPdf = (app: AppModuleCard) => {
    if (app.pdfUrl) {
      window.open(app.pdfUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToSponsorship = () => {
    const section = document.getElementById('sponsorship');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="applications" className="relative py-20 bg-[#0D0F12] text-slate-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-950/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            OS³ Intelligence Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Applications Suite
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A specialized suite of intelligent modules designed for institutional scale, security, and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((app) => (
            <div
              key={app.id}
              className="group relative flex flex-col justify-between bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700/60 text-[11px] font-mono tracking-wide text-cyan-400 uppercase">
                    {app.tag}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {app.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleInitialize(app)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-400 font-medium text-xs tracking-wider uppercase transition-all duration-200"
                  >
                    Initialize
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleOpenPdf(app)}
                    title="View Technical Documentation"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 text-xs transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                </div>

                {app.isSponsorshipLinked && (
                  <button
                    onClick={scrollToSponsorship}
                    className="w-full text-center text-xs text-amber-400/90 hover:text-amber-300 font-mono tracking-wide underline underline-offset-4 transition-colors pt-1 block"
                  >
                    ♥ Support Isikolo CSR Program →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationGrid;
