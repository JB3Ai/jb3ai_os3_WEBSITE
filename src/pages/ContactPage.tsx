
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Briefcase, ArrowRight } from 'lucide-react';
import { AppModule } from '../types';
import { DashboardBackdrop } from '../components/ui/DashboardBackdrop';
import { FadeIn } from '../components/ui/FadeIn';

interface ContactPageProps {
    onNavigate: (m: AppModule) => void;
}

const JB3AI_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwciPurE_2Q-M03tNonrWret-PVsvKaZx3QPTgB7rWK1_EzMuFzyD9c1ElxSaQwj9eS8Q/exec';

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const fullName = String(formData.get('name') || '').trim();
        const nameParts = fullName.split(/\s+/).filter(Boolean);
        const payload = {
            first_name: nameParts[0] || '',
            last_name: nameParts.slice(1).join(' ') || '',
            email: String(formData.get('email') || '').trim(),
            phone: String(formData.get('phone') || '').trim(),
            organization: '',
            inquiry_type: String(formData.get('inquiry_type') || 'investor_access'),
            message: '',
            source: 'WEBSITE',
            opt_in: Boolean((form.querySelector('#opt_in') as HTMLInputElement | null)?.checked),
        };
        const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;

        try {
            if (submitButton) submitButton.disabled = true;

            await fetch(JB3AI_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify(payload),
            });

            // no-cors hides response payload from the browser; reaching this line means request dispatch succeeded.
            setStatus('success');
            form.reset();
        } catch (error) {
            console.error('Network error:', error);
            setStatus('error');
        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    };

    return (
        <div className="w-full bg-[#050505] min-h-screen relative overflow-hidden">
            <DashboardBackdrop />
            <div className="max-w-4xl mx-auto py-32 px-10 space-y-24 relative z-10">
                <header className="space-y-8">
                    <FadeIn>
                        <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none">Lead Request</h1>
                    </FadeIn>
                    <FadeIn>
                        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl uppercase tracking-tight">
                            Submit your details and route them directly into the JB³Ai lead engine.
                        </p>
                    </FadeIn>
                </header>

                {status === 'success' ? (
                    <FadeIn className="p-12 border border-cyan-500/20 bg-cyan-500/5 text-cyan-500 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.3em]">Lead Submitted</h3>
                        <p className="text-xs uppercase tracking-widest leading-relaxed">Your request has been received and queued for the MASTER_PIPELINE sheet.</p>
                        <button onClick={() => { setStatus('idle'); onNavigate(AppModule.HOME); }} className="text-[10px] font-bold uppercase tracking-[0.4em] mt-8 hover:text-white transition-colors flex items-center gap-4">
                            <ArrowRight className="w-3 h-3 rotate-180" /> Return to Terminal
                        </button>
                    </FadeIn>
                ) : (
                    <FadeIn className="space-y-10">
                        <form id="contact-form" onSubmit={handleSubmit} className="space-y-10">
                            {status === 'error' && (
                                <div className="p-4 border border-red-500/20 bg-red-500/5 text-red-500 text-xs uppercase tracking-widest">
                                    Submission failed. Please try again.
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                                        <User className="w-3 h-3" /> Full Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full bg-black border border-gray-800 p-4 text-sm focus:border-cyan-500 outline-none transition-all placeholder:text-gray-800 font-mono text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="email" className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                                        <Mail className="w-3 h-3" /> Professional Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-black border border-gray-800 p-4 text-sm focus:border-cyan-500 outline-none transition-all placeholder:text-gray-800 font-mono text-white"
                                        placeholder="john@enterprise.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="phone" className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                                    <Phone className="w-3 h-3" /> Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    className="w-full bg-black border border-gray-800 p-4 text-sm focus:border-cyan-500 outline-none transition-all placeholder:text-gray-800 font-mono text-white"
                                    placeholder="+27 00 000 0000"
                                />
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="inquiry_type" className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                                    <Briefcase className="w-3 h-3" /> Interest
                                </label>
                                <select
                                    id="inquiry_type"
                                    name="inquiry_type"
                                    className="w-full bg-black border border-gray-800 p-4 text-sm focus:border-cyan-500 outline-none transition-all font-mono text-white"
                                    defaultValue="investor_access"
                                >
                                    <option value="investor_access">Investor Access</option>
                                    <option value="consulting_enquiry">Consulting Enquiry</option>
                                    <option value="general_lead">General Lead</option>
                                </select>
                            </div>

                            <div className="space-y-3 border border-gray-900 bg-black/30 p-5">
                                <label htmlFor="opt_in" className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        id="opt_in"
                                        name="opt_in"
                                        type="checkbox"
                                        defaultChecked
                                        className="mt-1 w-4 h-4 bg-black border border-gray-800 checked:bg-cyan-500 transition-all appearance-none cursor-pointer"
                                    />
                                    <span className="text-[9px] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors uppercase tracking-widest font-mono">
                                        Consent to contact (POPIA)
                                    </span>
                                </label>
                            </div>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`w-full md:w-auto px-20 py-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gray-200 transition-all active:scale-[0.98] ${status === 'submitting' ? 'opacity-50 cursor-wait' : ''}`}
                                >
                                    {status === 'submitting' ? 'Transmitting...' : 'Transmit Lead Request'}
                                </motion.button>
                            </div>
                        </form>
                    </FadeIn>
                )}

                <section className="pt-20 opacity-40">
                    <FadeIn className="p-12 border-l border-gray-900 space-y-6">
                        <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest font-mono">Lead Engine</h4>
                        <p className="text-[10px] text-gray-700 leading-relaxed uppercase tracking-[0.2em] font-mono">
                            Requests are posted to the lead engine endpoint and routed into MASTER_PIPELINE in real time.
                        </p>
                    </FadeIn>
                </section>
            </div>
        </div>
    );
};
