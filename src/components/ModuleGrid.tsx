import React from 'react';
import { AppModule } from '../types';
import { BROCHURES, BrochureKey, isDocumentAvailable } from '../content/brochures';

interface DocumentLink {
  label: string;
  documentId: BrochureKey;
}

export type ProductCategory =
  | 'OS³ Core'
  | 'Intelligence & Investigation'
  | 'Communications'
  | 'Business & Automation'
  | 'Education & Social Impact'
  | 'Media / Creative';

export interface ModuleItem {
  id: string;
  demoId?: string;
  title: string;
  tag: string;
  description: string;
  category: ProductCategory;
  isFlagship?: boolean;
  demoPath: string;
  primaryPdf?: DocumentLink;
  secondaryPdf?: DocumentLink;
  tertiaryPdf?: DocumentLink;
  videoLink?: { label: string; url: string };
}

export const MODULES: ModuleItem[] = [
  {
    id: 'investigator-ai', demoId: 'investigator', title: 'Investigator AI', tag: 'Forensic Analysis',
    description: 'Forensic Data & Sequence Mapping. Export complex communications into fully transcribed, forensic-level timelines.',
    category: 'Intelligence & Investigation',
    isFlagship: true,
    demoPath: '/demo?app=investigator',
    primaryPdf: { label: 'Cutsheet', documentId: 'investigatorCutsheet' },
    secondaryPdf: { label: 'Brochure', documentId: 'investigatorDash' },
  },
  {
    id: 'super-agents', demoId: 'superagents', title: 'SuperAgents', tag: 'AI Workforce',
    description: 'Automated AI Workforce. Deploy a multilingual AI workforce optimized for operations, research, and legal workflows.',
    category: 'Business & Automation',
    isFlagship: true,
    demoPath: '/demo?app=superagents',
    primaryPdf: { label: 'Cutsheet', documentId: 'os3dash' },
    secondaryPdf: { label: 'Brochure', documentId: 'os3dash' },
  },
  {
    id: 'clipboard-ai', demoId: 'clipboard', title: 'ClipboardAI', tag: 'Encrypted Comms',
    description: 'Secure Containerized Communications. Container-to-container protocol with 256-bit encryption for chat and document sharing.',
    category: 'Communications',
    isFlagship: true,
    demoPath: '/demo?app=clipboard',
    primaryPdf: { label: 'Cutsheet', documentId: 'clipboard' },
  },
  {
    id: 'voicegrid-ai', demoId: 'voicegrid', title: 'VoiceGrid AI', tag: 'Multilingual Voice',
    description: 'High-Volume Voice Operations. Supports 8 South African languages and 50+ international languages with pay-per-second billing.',
    category: 'Communications',
    isFlagship: true,
    demoPath: '/demo?app=voicegrid',
    primaryPdf: { label: 'Cutsheet', documentId: 'voicegrid' },
    secondaryPdf: { label: 'Brochure', documentId: 'voicegridInfrastructure' },
    tertiaryPdf: { label: 'Infrastructure Manual', documentId: 'voicegridBrief' },
  },
  {
    id: 'viewgrid', demoId: 'viewgrid', title: 'ViewGrid', tag: 'Aerial Intelligence',
    description: 'Global Satellite Overlay & Surveillance System. Digital satellite monitoring for logistical and security oversight.',
    category: 'Intelligence & Investigation',
    demoPath: '/demo?app=viewgrid',
    primaryPdf: { label: 'Brochure', documentId: 'sentinelEye' },
  },
  {
    id: 'isikolo-ai', demoId: 'isikolo', title: 'Isikolo AI', tag: 'Educational CSR',
    description: 'Accessible Educational Intelligence. Zero-cost AI platform preloaded with South African school curriculum.',
    category: 'Education & Social Impact',
    demoPath: '/demo?app=isikolo',
    primaryPdf: { label: 'Cutsheet', documentId: 'isikolo' },
    secondaryPdf: { label: 'Brochure', documentId: 'isikoloLearners' },
    tertiaryPdf: { label: 'Story Book', documentId: 'isikoloStory' },
    videoLink: { label: 'Watch Video', url: 'https://youtu.be/IQnM2uDoVQ0?si=3xwBXpPd_-0E2kHH' },
  },
  {
    id: 'newsroom-ai', demoId: 'newsroom', title: 'NewsRoom AI', tag: 'Content Intelligence',
    description: 'Automated Media & Content Intelligence. Real-time newsroom curation, automated indexing, and editorial synthesis.',
    category: 'Media / Creative',
    demoPath: '/demo?app=newsroom',
    primaryPdf: { label: 'Cutsheet', documentId: 'newsroom' },
  },
  {
    id: 'os3-core', demoId: 'core', title: 'OS3 Core System', tag: 'Managed Operating System',
    description: 'Institutional AI Operating System. Containerized infrastructure handling enterprise AI workloads with full data sovereignty.',
    category: 'OS³ Core',
    isFlagship: true,
    demoPath: '/demo?app=core',
    primaryPdf: { label: 'Cutsheet', documentId: 'coreOpen' },
    secondaryPdf: { label: 'Brochure', documentId: 'os3dash' },
  },
  {
    id: 'investment-intel', demoId: 'investment', title: 'Investment Intelligence', tag: 'Quantitative Motion',
    description: 'Data Motion & Accelerator Platform. Quantitative intelligence modeling for institutional asset oversight.',
    category: 'Intelligence & Investigation',
    demoPath: '/demo?app=investment',
    primaryPdf: { label: 'Brochure', documentId: 'investment' },
  },
];

const DocumentLinkItem: React.FC<{ link: DocumentLink }> = ({ link }) => {
  const document = BROCHURES[link.documentId];
  if (!isDocumentAvailable(document)) {
    return <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600">Document being updated</span>;
  }

  return (
    <a
      href={document.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-slate-500 transition-colors hover:text-slate-300"
      title={`Preview ${link.label}`}
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      {link.label}
    </a>
  );
};

export const OS3ModuleGrid: React.FC = () => (
  <section className="border-t border-slate-900 bg-[#0B0E14] py-24 font-sans text-slate-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="mb-2 text-sm font-mono uppercase tracking-widest text-slate-500">OS3 Intelligence Architecture</h2>
        <h3 className="text-3xl font-semibold tracking-tight text-white">Integrated Applications Suite</h3>
        <div className="mt-6 h-px w-24 bg-slate-700" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MODULES.map((module) => (
          <div key={module.id} className="flex h-full flex-col border border-slate-800 bg-[#11151E] p-6 transition-colors duration-200 hover:border-slate-600 hover:bg-[#151A24]">
            <div className="mb-5"><span className="inline-block border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400">{module.tag}</span></div>
            <div className="flex-grow">
              <h4 className="mb-3 text-xl font-medium tracking-tight text-slate-100">{module.title}</h4>
              <p className="text-sm leading-relaxed text-slate-400">{module.description}</p>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-slate-800/80 pt-5">
              <a href="https://jonoblackburn.com/os" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-white transition-colors hover:text-slate-300">
                Access Module Sandbox
              </a>
              <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-3">
                {module.primaryPdf && <DocumentLinkItem link={module.primaryPdf} />}
                {module.secondaryPdf && <DocumentLinkItem link={module.secondaryPdf} />}
                {module.tertiaryPdf && <DocumentLinkItem link={module.tertiaryPdf} />}
                {module.videoLink && <a href={module.videoLink.url} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono uppercase tracking-wider text-red-400 hover:text-red-300">{module.videoLink.label}</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
  modules?: ModuleItem[];
}

export const FLAGSHIP_MODULES = MODULES.filter((module) => module.isFlagship);

export const ModuleGrid: React.FC<ModuleGridProps> = ({ onSelect, onNavigate, selectedId, modules = MODULES }) => {
  const handleClick = (module: ModuleItem) => {
    const id = module.demoId || module.id;
    if (onSelect) return onSelect(id);
    const mapped = DEMO_TO_APPMODULE[id];
    if (mapped && onNavigate) onNavigate(mapped);
  };

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {modules.map((module) => {
        const isSelected = selectedId === module.id || selectedId === module.demoId;
        const document = module.primaryPdf ? BROCHURES[module.primaryPdf.documentId] : undefined;
        const available = isDocumentAvailable(document);
        return (
          <div
            key={module.id}
            className={`group flex h-full flex-col justify-between border bg-slate-900/95 p-5 sm:p-6 transition-all ${isSelected ? 'border-amber-400/20 shadow-[0_20px_40px_rgba(248,182,70,0.08)]' : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900'}`}
            onClick={() => handleClick(module)}
          >
            <div className="space-y-4">
              <span className="inline-flex border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300">{module.tag}</span>
              <h3 className="text-xl font-semibold text-slate-100">{module.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{module.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400">
              {available ? (
                <a
                  href={document.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-800"
                >
                  {module.primaryPdf?.label}
                </a>
              ) : (
                <span className="border border-slate-800 bg-slate-950 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">Document being updated</span>
              )}
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">PDF</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
