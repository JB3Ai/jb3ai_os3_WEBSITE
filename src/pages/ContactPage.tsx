import React from 'react';
import { AppModule } from '../types';
import { DashboardBackdrop } from '../components/ui/DashboardBackdrop';
import { FadeIn } from '../components/ui/FadeIn';
import { EnquiryForm } from '../components/EnquiryForm';

interface ContactPageProps {
    onNavigate: (m: AppModule) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => (
    <div className="w-full bg-[#050505] min-h-screen relative overflow-hidden">
        <DashboardBackdrop />
        <div className="max-w-4xl mx-auto py-32 px-4 sm:px-10 space-y-12 relative z-10">
            <header className="space-y-8">
                <FadeIn>
                    <h1 className="text-3xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-none">Enquiry Form</h1>
                </FadeIn>
                <FadeIn>
                    <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl uppercase tracking-tight">
                        Share your details and enquiry using the form below.
                    </p>
                </FadeIn>
            </header>
            <EnquiryForm />
        </div>
    </div>
);
