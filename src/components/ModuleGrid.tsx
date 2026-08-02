import React from 'react';
import { AppModule } from '../types';

export interface ModuleCard {
  id: string;
  demoId?: string;
  title: string;
  tag: string;
  description: string;
  pdfUrl: string;
  actionLabel: string;
  module?: AppModule;
}

export const MODULES: ModuleCard[] = [
  {
    id: 'investigator-ai',
    demoId: 'investigator',
    title: 'Investigator AI',
    tag: 'Forensic Analysis',
    description:
      'Forensic Data & Sequence Mapping. Export complex communications into fully transcribed, forensic-level timelines.',
    pdfUrl: '/assets/pdfs/OS³ InvestigatorAi CUTSHEET.pdf',
    actionLabel: 'View cutsheet',
    module: AppModule.INVESTIGATOR_AI,
  },
  {
    id: 'superagents',
    demoId: 'superagents',
    title: 'SuperAgents',
    tag: 'AI Workforce',
    description:
      'Automated AI Workforce. Deploy a multilingual AI workforce optimized for operations, research, and legal workflows.',
    pdfUrl: '/assets/pdfs/JB3Ai_Super_Agent_Operating_System_V5.pdf',
    actionLabel: 'View cutsheet',
    module: AppModule.NEURAL_CORE,
  },
  {
    id: 'clipboard-ai',
    demoId: 'clipboard',
    title: 'ClipboardAI',
    tag: 'Encrypted Comms',
    description:
      'Secure Containerized Communications. Container-to-container protocol with 256-bit encryption for chat and document sharing.',
    pdfUrl: '/assets/pdfs/OS³ ClipboardAi CUTSHEET.pdf',
    actionLabel: 'View cutsheet',
  },
  {
    id: 'voicegrid-ai',
    demoId: 'voicegrid',
    title: 'VoiceGrid AI',
    tag: 'Multilingual Voice',
    description:
      'High-Volume Voice Operations. Supports 8 South African languages and 50+ international languages with pay-per-second billing.',
    pdfUrl: '/assets/pdfs/OS³ VOICEGRID CUTSHEET.pdf',
    actionLabel: 'View cutsheet',
    module: AppModule.VOICE_GRID,
  },
  {
    id: 'viewgrid',
    demoId: 'viewgrid',
    title: 'ViewGrid',
    tag: 'Aerial Intelligence',
    description:
      'Global Satellite Overlay & Surveillance System. Digital satellite monitoring for logistical and security oversight.',
    pdfUrl: '/assets/pdfs/Global Satellite Overlay The Sentinel EyeF1.pdf',
    actionLabel: 'View cutsheet',
  },
  {
    id: 'isikolo-ai',
    demoId: 'isikolo',
    title: 'Isikolo AI',
    tag: 'Educational CSR',
    description:
      'Accessible Educational Intelligence. Zero-cost AI platform preloaded with South African school curriculum.',
    pdfUrl: '/assets/pdfs/OS³ ISIKOLOAI CUTSHEET.pdf',
    actionLabel: 'View cutsheet',
  },
  {
    id: 'newsroom-ai',
    title: 'NewsRoom AI',
    tag: 'Content Intelligence',
    description:
      'Automated Media & Content Intelligence. Real-time newsroom curation, automated indexing, and editorial synthesis.',
    pdfUrl: '/assets/pdfs/OS³ NewsRoomAi CUTSHEET.pdf',
    actionLabel: 'View cutsheet',
  },
  {
    id: 'os3-core-system',
    title: 'OS³ Core System',
    tag: 'Managed Operating System',
    description:
      'Institutional AI Operating System. Containerized infrastructure handling enterprise AI workloads with full data sovereignty.',
    pdfUrl: '/assets/pdfs/JB³ OS³ Dash The Operating SystemF1.pdf',
    actionLabel: 'View cutsheet',
  },
  {
    id: 'investment-intelligence',
    title: 'Investment Intelligence',
    tag: 'Quantitative Motion',
    description:
      'Data Motion & Accelerator Platform. Quantitative intelligence modeling for institutional asset oversight.',
    pdfUrl: '/assets/pdfs/JBInvestment Intelligence in MotionV2_F1.pdf',
    actionLabel: 'View cutsheet',
  },
];

interface ModuleGridProps {
  onSelect?: (id: string) => void;
  onNavigate?: (module: AppModule) => void;
  selectedId?: string;
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({ onSelect, onNavigate, selectedId }) => {
  const handleAction = (card: ModuleCard) => {
    if (card.module && onNavigate) {
      onNavigate(card.module);
      return;
    }

    window.open(card.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {MODULES.map((card) => {
        const isSelected = selectedId === card.id;
        return (
          <div
            key={card.id}
            className={`group flex h-full flex-col justify-between rounded-3xl border bg-slate-900/95 p-6 transition-all ${isSelected ? 'border-amber-400/20 shadow-[0_20px_40px_rgba(248,182,70,0.08)]' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900'}`}
            onClick={() => onSelect?.(card.id)}
          >
            <div className="space-y-4">
              <span className="inline-flex rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">
                {card.tag}
              </span>
              <h3 className="text-xl font-semibold text-slate-100">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{card.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 pt-6 border-t border-slate-800 text-sm text-slate-400">
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleAction(card);
                }}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-800"
              >
                {card.actionLabel}
              </button>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">PDF</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModuleGrid;
