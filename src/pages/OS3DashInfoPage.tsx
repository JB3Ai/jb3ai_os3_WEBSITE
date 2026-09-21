import React from 'react';
import { AppModule } from '../types';
import { DashboardBackdrop } from '../components/ui/DashboardBackdrop';
import { SectionHeader } from '../components/ui/SectionHeader';
import { FadeIn } from '../components/ui/FadeIn';
import { BrochureButton } from '../components/BrochureButton';
import { openConsultation } from '../utils/consultation';

interface OS3DashInfoPageProps {
    onNavigate: (module: AppModule) => void;
}

const connections = [
    ['AI & specialist applications', 'Purpose-built tools operate inside one managed environment instead of as disconnected products.'],
    ['Data & knowledge', 'Approved information moves between systems, teams and workflows with its context intact.'],
    ['Workflows & automation', 'Repeatable processes coordinate people, software and AI without removing human responsibility.'],
    ['People & decisions', 'Teams can see what the system is doing, intervene when needed and remain accountable for outcomes.'],
];

const capabilities = [
    'One access point for JB³Ai applications and services',
    'Connected workflows across teams, information and specialist tools',
    'Role-based permissions and traceable activity',
    'Clear separation between testing and live operations',
    'Human review where judgement matters',
    'A managed environment that evolves with the organisation',
];

export const OS3DashInfoPage: React.FC<OS3DashInfoPageProps> = ({ onNavigate }) => (
    <div className="relative w-full overflow-hidden">
        <DashboardBackdrop />
        <main className="relative z-10 mx-auto max-w-6xl space-y-28 px-6 py-28 text-sm leading-relaxed text-gray-400 md:space-y-36 md:px-10 md:py-32">
            <header className="space-y-12 border-b border-white/10 pb-20">
                <FadeIn className="max-w-5xl space-y-7">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">The Operating Layer</p>
                    <h1 className="text-4xl font-bold uppercase leading-none tracking-tighter text-white md:text-7xl">OS³ Dash</h1>
                    <h2 className="text-2xl font-light leading-tight tracking-tight text-white md:text-5xl">
                        One operating environment.<br />
                        <span className="text-cyan-400">Your business, intelligence and AI connected.</span>
                    </h2>
                </FadeIn>

                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
                    <FadeIn className="space-y-6 text-base leading-relaxed text-gray-300 md:text-lg">
                        <p>OS³ Dash is the managed operating environment behind JB³Ai.</p>
                        <p>It connects AI, data, workflows, specialist applications and human decision-making inside one structured environment — giving a business visibility over what its systems are doing, how information moves, and where people remain in control.</p>
                    </FadeIn>
                    <FadeIn className="flex items-end">
                        <div className="border-l border-cyan-500/50 pl-6">
                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">A practical control layer</p>
                            <p className="mt-3 text-base leading-relaxed text-white">Connect the tools already in use with the intelligence and workflows the business needs next.</p>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn className="relative overflow-hidden border border-white/10 bg-black/50">
                    <img src="/media/hero/new_hero2_static.webp" alt="OS³ digital operating environment connecting business systems and intelligence" className="aspect-[16/7] w-full object-cover opacity-70" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-cyan-950/20" />
                    <p className="absolute bottom-0 left-0 p-6 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300 md:p-10">Business systems / connected</p>
                </FadeIn>
            </header>

            <section className="space-y-12">
                <SectionHeader num="01" title="WHAT OS³ IS" />
                <div className="grid gap-12 md:grid-cols-2 md:gap-20">
                    <FadeIn><p className="text-xl font-light leading-relaxed tracking-tight text-white md:text-3xl">A shared operating layer for technology, information and the people responsible for using it.</p></FadeIn>
                    <FadeIn className="space-y-5 text-base leading-relaxed">
                        <p>OS³ gives separate systems a common structure. Applications can share approved information, workflows can move between teams, and decision-makers can see where work sits without replacing every tool the organisation already relies on.</p>
                        <p>It is managed as an environment, not sold as another isolated dashboard.</p>
                    </FadeIn>
                </div>
            </section>

            <section className="space-y-12">
                <SectionHeader num="02" title="THE JB³AI MODEL" />
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <FadeIn className="space-y-6 text-base leading-relaxed text-gray-300 md:text-lg">
                        <p className="text-xl text-white">But technology is only one part of the model.</p>
                        <p>JB³Ai combines OS³ with hands-on business advisory. We first understand how the organisation actually works — its people, processes, risks, bottlenecks and objectives — and then configure the technology around those realities.</p>
                    </FadeIn>
                    <FadeIn className="relative min-h-80 overflow-hidden border border-white/10 bg-slate-950">
                        <img src="/media/dividers/section-divider-dark-v2.jpg" alt="Layered OS³ architecture illustrating connected business workflows" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-cyan-950/30" />
                        <div className="relative flex min-h-80 flex-col justify-end p-8 md:p-12">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-400">The combined model</p>
                            <p className="mt-4 max-w-xl text-2xl font-light leading-tight text-white md:text-3xl">OS³ Dash + JB³Ai Advisory = a system designed around the business, not a business forced to adapt to software.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="space-y-12">
                <SectionHeader num="03" title="WHAT OS³ CONNECTS" />
                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
                    {connections.map(([title, text], index) => (
                        <FadeIn key={title} className="group bg-[#050708] p-8 md:p-10">
                            <div className="flex items-center gap-6"><span className="text-[10px] font-bold tracking-[0.25em] text-cyan-500">0{index + 1}</span><span className="h-px flex-1 bg-white/10 group-hover:bg-cyan-500/40" /></div>
                            <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-white">{title}</h3>
                            <p className="mt-4 max-w-md leading-relaxed text-gray-500">{text}</p>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn className="overflow-hidden border border-white/10 bg-black/40">
                    <img src="/media/dividers/section-divider-dark-v1.jpg" alt="Abstract network of connected OS³ data and operational modules" loading="lazy" className="aspect-[16/5] w-full object-cover opacity-70" />
                </FadeIn>
            </section>

            <section className="space-y-12">
                <SectionHeader num="04" title="CORE CAPABILITIES" />
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map((capability, index) => (
                        <FadeIn key={capability} className="min-h-40 border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-cyan-500">{String(index + 1).padStart(2, '0')}</span>
                            <p className="mt-6 text-xs font-bold uppercase leading-relaxed tracking-[0.14em] text-gray-200">{capability}</p>
                        </FadeIn>
                    ))}
                </div>
            </section>

            <section className="space-y-12">
                <SectionHeader num="05" title="DESIGNED AROUND YOUR BUSINESS" />
                <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
                    <FadeIn className="space-y-6">
                        <p className="text-2xl font-light leading-tight text-white md:text-4xl">Start with the operation.<br /><span className="text-cyan-400">Then shape the system.</span></p>
                        <p className="max-w-2xl text-base leading-relaxed">The advisory process maps what happens today, identifies the areas creating friction or risk, and defines where technology can make a measurable difference. OS³ is then configured in stages around real priorities, responsibilities and ways of working.</p>
                    </FadeIn>
                    <FadeIn className="border-l border-white/10 pl-8">
                        {['Understand the organisation', 'Map people and processes', 'Prioritise useful change', 'Configure and connect', 'Operate, learn and improve'].map((step, index) => (
                            <div key={step} className="flex gap-5 border-b border-white/10 py-4"><span className="text-[10px] text-cyan-500">0{index + 1}</span><span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-200">{step}</span></div>
                        ))}
                    </FadeIn>
                </div>
            </section>

            <section className="space-y-12 border-t border-white/10 pt-20">
                <SectionHeader num="06" title="DEMO / CONSULTATION" />
                <FadeIn className="grid gap-8 border border-white/10 bg-gradient-to-br from-cyan-950/20 to-black p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
                    <div className="space-y-4">
                        <p className="text-2xl font-light text-white md:text-4xl">See the environment. Then discuss what it should solve for your business.</p>
                        <p className="max-w-2xl">Explore the OS³ demo or speak with JB³Ai about your people, processes and priorities.</p>
                        <div className="pt-2"><BrochureButton k="os3dash" /></div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
                        <button onClick={() => onNavigate(AppModule.WORKSPACE)} className="bg-cyan-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-white">View OS³ Demo</button>
                        <button onClick={() => openConsultation(onNavigate)} className="border border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-cyan-400 hover:text-cyan-300">Book a Consultation</button>
                    </div>
                </FadeIn>
            </section>
        </main>
    </div>
);
