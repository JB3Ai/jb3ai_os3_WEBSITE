import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import { AppModule } from '../types';

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
  badge: string;
  demoUrl: string;
}

const DEMO_APPS: DemoAppDefinition[] = [
  {
    id: 'investigator',
    label: 'Investigator AI',
    title: 'Forensic discovery in motion',
    subtitle: 'Cross-silo analysis with evidentiary traceability',
    description: 'Surface timelines, entities, and hidden relationships from fragmented records without losing accountability.',
    badge: 'Forensic',
    demoUrl: 'https://jb3ai.com/demo?app=investigator',
  },
  {
    id: 'superagents',
    label: 'SuperAgents',
    title: 'Autonomous operations at scale',
    subtitle: 'Managed AI workforce orchestration',
    description: 'Coordinate specialised AI agents for research, finance, operations, and legal review with governed handoffs.',
    badge: 'Operations',
    demoUrl: 'https://jb3ai.com/demo?app=superagents',
  },
  {
    id: 'clipboard',
    label: 'ClipboardAI',
    title: 'Secure collaboration, encrypted end to end',
    subtitle: 'Container-to-container communication',
    description: 'Protect sensitive exchanges with policy-rich messaging and secure document workflows.',
    badge: 'Secure Comms',
    demoUrl: 'https://jb3ai.com/demo?app=clipboard',
  },
  {
    id: 'voicegrid',
    label: 'VoiceGrid AI',
    title: 'Multilingual voice workflows',
    subtitle: 'High-volume call automation and qualification',
    description: 'Route calls through layered voice intelligence, translation, and structured response pipelines.',
    badge: 'Voice',
    demoUrl: 'https://jb3ai.com/demo?app=voicegrid',
  },
  {
    id: 'viewgrid',
    label: 'ViewGrid',
    title: 'Aerial visibility for institutions',
    subtitle: 'Satellite and geospatial insight',
    description: 'Monitor operational conditions, movement, and strategic events with integrated visual intelligence.',
    badge: 'Visual Intelligence',
    demoUrl: 'https://jb3ai.com/demo?app=viewgrid',
  },
  {
    id: 'isikolo',
    label: 'Isikolo AI',
    title: 'Open education for the public good',
    subtitle: 'Curriculum-aligned teaching and learning',
    description: 'Power inclusive instruction across South African classrooms with multilingual, zero-cost access.',
    badge: 'Education',
    demoUrl: 'https://jb3ai.com/demo?app=isikolo',
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
    const nextValue = activeApp === 'investigator' ? 'investigator' : activeApp;
    currentParams.set('app', nextValue);
    const nextUrl = `${window.location.pathname}?${currentParams.toString()}`;
    window.history.replaceState({}, '', nextUrl);
  }, [activeApp]);

  const activeDefinition = useMemo(() => DEMO_APPS.find(app => app.id === activeApp) ?? DEMO_APPS[0], [activeApp]);

  const openFullDemo = () => {
    window.open(activeDefinition.demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] px-4 py-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-[#1E242B] bg-[#0D0F12]/95 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)] md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-cyan-400/80">
              <Sparkles className="h-3.5 w-3.5" />
              SYSTEM STATUS
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl">OS³ Demo Environment Online</h1>
            <p className="max-w-3xl text-sm leading-7 text-gray-400">
              Launch a sandboxed experience for each module and auto-open the right workflow through the app query string.
            </p>
          </div>
          <button
            onClick={() => onNavigate(AppModule.HOME)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <ArrowLeft className="h-4 w-4" />
            RETURN TO JB³AI
          </button>
        </div>

        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-[#1E242B] bg-[#0D0F12]/85 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/80">APP SELECTOR</p>
            <div className="mt-4 space-y-2">
              {DEMO_APPS.map(app => (
                <button
                  key={app.id}
                  onClick={() => setActiveApp(app.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition ${activeApp === app.id ? 'border-cyan-500/40 bg-cyan-500/10 text-white' : 'border-[#1E242B] bg-[#05070A] text-gray-300 hover:border-cyan-500/30 hover:bg-[#10141A]'}`}
                >
                  <div className="text-sm font-semibold">{app.label}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-gray-500">{app.badge}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#1E242B] bg-[#05070A] p-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">SESSION CONTEXT</p>
              <h2 className="mt-3 text-lg font-semibold text-white">{activeDefinition.title}</h2>
              <p className="mt-2 text-sm leading-7 text-gray-400">{activeDefinition.description}</p>
              <button
                onClick={openFullDemo}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300 transition hover:bg-cyan-500/20"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Open full demo
              </button>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-[#1E242B] bg-[#0D0F12]/90 p-5 shadow-[0_0_40px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-400/80">LIVE PREVIEW</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{activeDefinition.label}</h2>
                <p className="mt-2 text-sm leading-7 text-gray-400">{activeDefinition.subtitle}</p>
              </div>
              <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {activeDefinition.badge}
              </div>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.5rem] border border-[#1E242B] bg-black/80">
              {!isLoaded && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#0D0F12]/95 p-6 text-center">
                  <div className="h-14 w-14 animate-spin rounded-full border-4 border-cyan-500/30 border-t-cyan-300" />
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Loading sandbox preview…</p>
                  <p className="max-w-md text-xs text-gray-500">
                    If the embedded frontier is blocked, the full demo will open in a new tab instead.
                  </p>
                </div>
              )}
              <iframe
                src={activeDefinition.demoUrl}
                title={`JB³Ai demo — ${activeDefinition.label}`}
                className="min-h-[560px] w-full border-0 bg-[#05070A]"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
