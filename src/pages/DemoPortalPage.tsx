import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AppModule } from '../types';
import { ModuleGrid, MODULES as DEMO_MODULES } from '../components/ModuleGrid';

interface DemoPortalPageProps {
  onNavigate: (m: AppModule) => void;
}

type DemoAppId = 'investigator' | 'superagents' | 'clipboard' | 'voicegrid' | 'viewgrid' | 'isikolo';

interface DemoAppDefinition {
  id: DemoAppId;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  demoUrl: string;
}

const DEMO_APPS: DemoAppDefinition[] = [
  {
    id: 'investigator',
    label: 'Investigator AI',
    title: 'Forensic discovery in motion',
    subtitle: 'Cross-silo analysis with evidentiary traceability',
    description: 'Surface timelines, entities, and hidden relationships from fragmented records without losing accountability.',
    demoUrl: '/demo?app=investigator',
  },
  {
    id: 'superagents',
    label: 'SuperAgents',
    title: 'Autonomous operations at scale',
    subtitle: 'Managed AI workforce orchestration',
    description: 'Coordinate specialised AI agents for research, finance, operations, and legal review with governed handoffs.',
    demoUrl: '/demo?app=superagents',
  },
  {
    id: 'clipboard',
    label: 'ClipboardAI',
    title: 'Secure collaboration, encrypted end to end',
    subtitle: 'Container-to-container communication',
    description: 'Protect sensitive exchanges with policy-rich messaging and secure document workflows.',
    demoUrl: '/demo?app=clipboard',
  },
  {
    id: 'voicegrid',
    label: 'VoiceGrid AI',
    title: 'Multilingual voice workflows',
    subtitle: 'High-volume call automation and qualification',
    description: 'Route calls through layered voice intelligence, translation, and structured response pipelines.',
    demoUrl: '/demo?app=voicegrid',
  },
  {
    id: 'viewgrid',
    label: 'ViewGrid',
    title: 'Aerial visibility for institutions',
    subtitle: 'Satellite and geospatial insight',
    description: 'Monitor operational conditions, movement, and strategic events with integrated visual intelligence.',
    demoUrl: '/demo?app=viewgrid',
  },
  {
    id: 'isikolo',
    label: 'Isikolo AI',
    title: 'Open education for the public good',
    subtitle: 'Curriculum-aligned teaching and learning',
    description: 'Power inclusive instruction across South African classrooms with multilingual, zero-cost access.',
    demoUrl: '/demo?app=isikolo',
  },
];

const isDemoApp = (value: string | null): value is DemoAppId => {
  return Boolean(value && DEMO_APPS.some(app => app.id === value));
};

export const DemoPortalPage: React.FC<DemoPortalPageProps> = ({ onNavigate }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeApp, setActiveApp] = useState<DemoAppId>(() => {
    if (typeof window === 'undefined') {
      return 'investigator';
    }

    const appParam = new URLSearchParams(window.location.search).get('app');
    return isDemoApp(appParam) ? appParam : 'investigator';
  });

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('app', activeApp);
    const nextUrl = `${window.location.pathname}?${currentParams.toString()}`;
    window.history.replaceState({}, '', nextUrl);
  }, [activeApp]);

  const activeDefinition = useMemo(() => DEMO_APPS.find(app => app.id === activeApp) ?? DEMO_APPS[0], [activeApp]);

  const openFullDemo = () => {
    window.open(activeDefinition.demoUrl, '_blank', 'noopener,noreferrer');
  };

  const activeModule = DEMO_MODULES.find((module) => module.demoId === activeApp);

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-slate-950 px-4 py-6 lg:px-8 text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-4 border border-slate-800 bg-slate-900/95 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">System Status</p>
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">OS³ Demo Environment Online</h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-400">
              Launch a sandboxed experience for each module and keep the preview aligned with JB3Ai's dashboard design.
            </p>
          </div>
          <button
            onClick={() => onNavigate(AppModule.HOME)}
            className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to JB³Ai
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="border border-slate-800 bg-slate-900/95 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Application Grid</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">OS³ Module Matrix</h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">A unified 3x3 interface that mirrors the JB³Ai dashboard experience.</p>
              </div>
              <button
                onClick={() => openFullDemo()}
                className="border border-slate-700 bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Open full demo
              </button>
            </div>
            <ModuleGrid onSelect={(id) => setActiveApp(id as DemoAppId)} selectedId={activeApp} />
          </div>

          <aside className="border border-slate-800 bg-slate-900/95 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Selected Module</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{activeModule?.title ?? activeDefinition.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">{activeModule?.description ?? activeDefinition.description}</p>
            <div className="mt-6 space-y-4">
              <div className="border border-slate-800 bg-slate-950 p-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Tag</p>
                <p className="mt-2 text-sm font-semibold text-slate-100">{activeModule?.tag ?? activeDefinition.subtitle}</p>
              </div>
              <button
                onClick={() => {
                  const pdfUrl = activeModule?.pdfUrl ?? '#';
                  window.open(pdfUrl, '_blank', 'noopener,noreferrer');
                }}
                className="w-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
              >
                View cutsheet
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
