import React from 'react';
import { AppModule } from '../types';

interface ModuleItem {
  id: string;
  demoId?: string;
  title: string;
  tag: string;
  description: string;
  demoPath: string;
  pdfUrl?: string;
  primaryPdf?: {
    label: string;
    path: string;
  };
  secondaryPdf?: {
    label: string;
    path: string;
  };
  tertiaryPdf?: {
    label: string;
    path: string;
  };
  videoLink?: {
    label: string;
    url: string;
  };
}

// 9 Core Modules mapped exactly to your updated file list
export const MODULES: ModuleItem[] = [
  {
    id: 'investigator-ai',
    demoId: 'investigator',
    title: 'Investigator AI',
    tag: 'Forensic Analysis',
    description: 'Forensic Data & Sequence Mapping. Export complex communications into fully transcribed, forensic-level timelines.',
    demoPath: '/demo?app=investigator',
    pdfUrl: '/assets/pdfs/OS3-INVESTIGATOR_CUTSHEET_WEB.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/OS3-INVESTIGATOR_CUTSHEET_WEB.pdf',
    },
    secondaryPdf: {
      label: 'Brochure',
      path: '/assets/pdfs/JB3InvestigatorAi-VER1-Dash.pdf',
    },
  },
  {
    id: 'super-agents',
    demoId: 'superagents',
    title: 'SuperAgents',
    tag: 'AI Workforce',
    description: 'Automated AI Workforce. Deploy a multilingual AI workforce optimized for operations, research, and legal workflows.',
    demoPath: '/demo?app=superagents',
    pdfUrl: '/assets/pdfs/JB3-OS3-Dash-The-Operating-SystemF1.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/JB3-OS3-Dash-The-Operating-SystemF1.pdf',
    },
  },
  {
    id: 'clipboard-ai',
    demoId: 'clipboard',
    title: 'ClipboardAI',
    tag: 'Encrypted Comms',
    description: 'Secure Containerized Communications. Container-to-container protocol with 256-bit encryption for chat and document sharing.',
    demoPath: '/demo?app=clipboard',
    pdfUrl: '/assets/pdfs/OS3-CLIPBOARDAI.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/OS3-CLIPBOARDAI.pdf',
    },
  },
  {
    id: 'voicegrid-ai',
    demoId: 'voicegrid',
    title: 'VoiceGrid AI',
    tag: 'Multilingual Voice',
    description: 'High-Volume Voice Operations. Supports 8 South African languages and 50+ international languages with pay-per-second billing.',
    demoPath: '/demo?app=voicegrid',
    pdfUrl: '/assets/pdfs/OS3-VOICEGRID-CUTSHEET.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/OS3-VOICEGRID-CUTSHEET.pdf',
    },
    secondaryPdf: {
      label: 'Brochure',
      path: '/assets/pdfs/Sovereign-VOICEGRID-V2-Infrastructure-ManualF1.pdf',
    },
  },
  {
    id: 'viewgrid',
    demoId: 'viewgrid',
    title: 'ViewGrid',
    tag: 'Aerial Intelligence',
    description: 'Global Satellite Overlay & Surveillance System. Digital satellite monitoring for logistical and security oversight.',
    demoPath: '/demo?app=viewgrid',
    pdfUrl: '/assets/pdfs/Global-Satellite-Overlay-The-Sentinel-EyeF1.pdf',
    primaryPdf: {
      label: 'Brochure',
      path: '/assets/pdfs/Global-Satellite-Overlay-The-Sentinel-EyeF1.pdf',
    },
  },
  {
    id: 'isikolo-ai',
    demoId: 'isikolo',
    title: 'Isikolo AI',
    tag: 'Educational CSR',
    description: 'Accessible Educational Intelligence. Zero-cost AI platform preloaded with South African school curriculum.',
    demoPath: '/demo?app=isikolo',
    pdfUrl: '/assets/pdfs/OS3-ISIKOLOAI-CUTSHEET.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/OS3-ISIKOLOAI-CUTSHEET.pdf',
    },
    secondaryPdf: {
      label: 'Brochure',
      path: '/assets/pdfs/IsikoloAi-for-learnersF1.pdf',
    },
    tertiaryPdf: {
      label: 'Story Book',
      path: '/assets/pdfs/The-Bridge-of-Voices_-The-Story-of-Isikolo-AI.pdf',
    },
    videoLink: {
      label: 'Watch Video',
      url: 'https://youtu.be/IQnM2uDoVQ0?si=3xwBXpPd_-0E2kHH',
    }
  },
  {
    id: 'newsroom-ai',
    demoId: 'newsroom',
    title: 'NewsRoom AI',
    tag: 'Content Intelligence',
    description: 'Automated Media & Content Intelligence. Real-time newsroom curation, automated indexing, and editorial synthesis.',
    demoPath: '/demo?app=newsroom',
    pdfUrl: '/assets/pdfs/OS3-NEWSROOMAI-CUTSHEET.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/OS3-NEWSROOMAI-CUTSHEET.pdf',
    },
  },
  {
    id: 'os3-core',
    demoId: 'core',
    title: 'OS3 Core System',
    tag: 'Managed Operating System',
    description: 'Institutional AI Operating System. Containerized infrastructure handling enterprise AI workloads with full data sovereignty.',
    demoPath: '/demo?app=core',
    pdfUrl: '/assets/pdfs/CHECK-OS3-Core-Platform-BriefingsF1OPEN.pdf',
    primaryPdf: {
      label: 'Cutsheet',
      path: '/assets/pdfs/CHECK-OS3-Core-Platform-BriefingsF1OPEN.pdf',
    },
    secondaryPdf: {
      label: 'Brochure',
      path: '/assets/pdfs/JB3-OS3-Dash-The-Operating-SystemF1.pdf',
    },
  },
  {
    id: 'investment-intel',
    demoId: 'investment',
    title: 'Investment Intelligence',
    tag: 'Quantitative Motion',
    description: 'Data Motion & Accelerator Platform. Quantitative intelligence modeling for institutional asset oversight.',
    demoPath: '/demo?app=investment',
    pdfUrl: '/assets/pdfs/JBInvestment-Intelligence-in-MotionV2_F!.pdf',
    primaryPdf: {
      label: 'Brochure',
      path: '/assets/pdfs/JBInvestment-Intelligence-in-MotionV2_F!.pdf',
    }
  }
];

export const OS3ModuleGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B0E14] text-slate-100 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Corporate Header Section */}
        <div className="mb-16">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">
            OS3 Intelligence Architecture
          </h2>
          <h3 className="text-3xl font-semibold text-white tracking-tight">
            Integrated Applications Suite
          </h3>
          <div className="h-px w-24 bg-slate-700 mt-6" />
        </div>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module) => (
            <div 
              key={module.id} 
              className="flex flex-col h-full bg-[#11151E] border border-slate-800 p-6 transition-colors duration-200 hover:bg-[#151A24] hover:border-slate-600"
            >
              
              {/* Card Header: Tag */}
              <div className="mb-5 flex items-start justify-between">
                <span className="inline-block px-2.5 py-1 bg-slate-800/50 text-[10px] font-mono uppercase tracking-wider text-slate-400 border border-slate-700/50">
                  {module.tag}
                </span>
              </div>

              {/* Card Body: Title & Description */}
              <div className="flex-grow">
                <h4 className="text-xl font-medium text-slate-100 mb-3 tracking-tight">
                  {module.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Card Footer: Actions */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-col gap-4">
                {/* Demo Link */}
                <a
                  href="https://jonoblackburn.com/os"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-white hover:text-slate-300 transition-colors"
                >
                  Access Module Sandbox
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                {/* Document & Media Links */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-1">
                  
                  {module.primaryPdf && (
                    <a
                      href={module.primaryPdf.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider"
                      title={`Download ${module.primaryPdf.label}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {module.primaryPdf.label}
                    </a>
                  )}

                  {module.secondaryPdf && (
                    <a
                      href={module.secondaryPdf.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider"
                      title={`Download ${module.secondaryPdf.label}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {module.secondaryPdf.label}
                    </a>
                  )}

                  {module.tertiaryPdf && (
                    <a
                      href={module.tertiaryPdf.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider"
                      title={`Download ${module.tertiaryPdf.label}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {module.tertiaryPdf.label}
                    </a>
                  )}

                  {module.videoLink && (
                    <a
                      href={module.videoLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-mono text-red-400 hover:text-red-300 transition-colors uppercase tracking-wider"
                      title={module.videoLink.label}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      {module.videoLink.label}
                    </a>
                  )}

                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
// Provide a backwards-compatible default `ModuleGrid` wrapper that supports
// the old props: `onSelect`, `onNavigate`, and `selectedId` so existing
// pages continue to work.

const DEMO_TO_APPMODULE: Record<string, AppModule | undefined> = {
  investigator: AppModule.INVESTIGATOR_AI,
  superagents: AppModule.NEURAL_CORE,
  clipboard: AppModule.PHONE_SYSTEM,
  voicegrid: AppModule.VOICE_GRID,
  viewgrid: AppModule.MOTION_LAB,
  isikolo: AppModule.MEDIA_LAB,
  newsroom: AppModule.MEDIA_LAB,
  core: AppModule.WORKSPACE,
  investment: AppModule.ACCELERATOR,
};

export interface ModuleGridProps {
  onSelect?: (id: string) => void;
  onNavigate?: (module: AppModule) => void;
  selectedId?: string;
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({ onSelect, onNavigate, selectedId }) => {
  const handleClick = (m: ModuleItem) => {
    const id = m.demoId || m.id;
    if (onSelect) {
      onSelect(id as string);
      return;
    }

    const mapped = id ? DEMO_TO_APPMODULE[id] : undefined;
    if (mapped && onNavigate) {
      onNavigate(mapped);
      return;
    }

    // fallback: open first primary pdf if present
    if (m.primaryPdf) {
      window.open(m.primaryPdf.path, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {MODULES.map((m) => {
        const isSelected = selectedId === m.id || selectedId === m.demoId;
        return (
          <div
            key={m.id}
            className={`group flex h-full flex-col justify-between border bg-slate-900/95 p-6 transition-all ${isSelected ? 'border-amber-400/20 shadow-[0_20px_40px_rgba(248,182,70,0.08)]' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900'}`}
            onClick={() => handleClick(m)}
          >
            <div className="space-y-4">
              <span className="inline-flex border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">
                {m.tag}
              </span>
              <h3 className="text-xl font-semibold text-slate-100">{m.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{m.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 pt-6 border-t border-slate-800 text-sm text-slate-400">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  if (m.primaryPdf) window.open(m.primaryPdf.path, '_blank', 'noopener,noreferrer');
                }}
                className="border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-800"
              >
                {m.primaryPdf?.label || 'Details'}
              </button>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">PDF</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
