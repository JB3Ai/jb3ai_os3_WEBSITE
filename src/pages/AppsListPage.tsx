
import React from 'react';
import { AppModule } from '../types';
import { DashboardBackdrop } from '../components/ui/DashboardBackdrop';
import { FadeIn } from '../components/ui/FadeIn';
import { ModuleGrid } from '../components/ModuleGrid';
import { SHARED_TRUST_LINE } from '../data/content';

interface AppsListPageProps {
    onNavigate: (m: AppModule) => void;
}

export const AppsListPage: React.FC<AppsListPageProps> = ({ onNavigate }) => {
    return (
        <div className="w-full bg-slate-950 min-h-[80vh] py-32 px-10 relative overflow-hidden">
            <DashboardBackdrop />
            <div className="max-w-7xl mx-auto space-y-24 relative z-10">
                <header className="space-y-6 text-center">
                    <FadeIn>
                        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase">Applications</h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-sm text-slate-400 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                            A unified 3x3 module grid for enterprise intelligence, designed to align with JB3Ai’s corporate system.
                        </p>
                    </FadeIn>
                </header>

                <ModuleGrid onNavigate={onNavigate} />

                <section className="pt-20 space-y-20">
                    <FadeIn className="border border-slate-800 bg-slate-900/80 p-16 space-y-8">
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Module Framework Expansion</h3>
                        <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-widest max-w-3xl">
                            Additional modules for financial forensics, creative asset orchestration, and supply-chain intelligence are currently in briefing. Custom module development is available via the Accelerator Program.
                        </p>
                        <button onClick={() => onNavigate(AppModule.ACCELERATOR)} className="text-slate-100 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">
                            Learn more about custom development
                        </button>
                    </FadeIn>

                    <FadeIn className="text-center opacity-60">
                        <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] leading-relaxed italic max-w-2xl mx-auto">
                            {SHARED_TRUST_LINE}
                        </p>
                    </FadeIn>
                </section>
            </div>
        </div>
    );
};
