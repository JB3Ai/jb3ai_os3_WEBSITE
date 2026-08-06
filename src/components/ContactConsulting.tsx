import React, { useState } from 'react';

const JB3AI_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwciPurE_2Q-M03tNonrWret-PVsvKaZx3QPTgB7rWK1_EzMuFzyD9c1ElxSaQwj9eS8Q/exec';

export const ContactConsulting: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    organization: '',
    email: '',
    inquiryType: 'deployment',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const fullName = formState.name.trim();
    const nameParts = fullName.split(/\s+/).filter(Boolean);
    const payload = {
      first_name: nameParts[0] || '',
      last_name: nameParts.slice(1).join(' ') || '',
      email: formState.email.trim(),
      phone: '',
      organization: formState.organization.trim(),
      inquiry_type: formState.inquiryType || 'deployment',
      message: formState.message.trim(),
      source: 'WEBSITE',
      opt_in: true,
    };

    try {
      await fetch(JB3AI_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      // no-cors hides response payload from the browser; reaching this line means request dispatch succeeded.
      setStatus('success');
      setFormState({ name: '', organization: '', email: '', inquiryType: 'deployment', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('JB3AI Engine Ingestion Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-24">
      
      {/* Section Header */}
      <div className="mb-16 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 bg-slate-500"></span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Direct Line
          </span>
        </div>
        <h2 className="text-3xl font-semibold text-white tracking-tight">
          Deployment & Consulting
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">
        
        {/* Left Column: Information */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              JB³Ai offers bespoke architectural consulting and on-premise deployments of the OS³ ecosystem for enterprise environments. Engage our team for infrastructure integration, private LLM deployment, or CSR sponsorships.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-slate-700 pl-4">
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                  Global Headquarters
                </span>
                <span className="text-sm text-slate-200">
                  Pretoria, Gauteng<br />
                  South Africa
                </span>
              </div>
              
              <div className="border-l-2 border-slate-700 pl-4">
                <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                  Primary Comm-Link
                </span>
                <a href="mailto:jono@jb3ai.com" className="text-sm text-white hover:text-slate-300 transition-colors font-mono">
                  jono@jb3ai.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Terminal-style status block */}
          <div className="bg-[#11151E]/60 border border-slate-800 p-5">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-3">
              <span className="text-xs font-mono text-slate-400">NETWORK STATUS</span>
              <span className="text-xs font-mono text-green-500/80">ONLINE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-slate-400">PROPOSAL INTAKE</span>
              <span className="text-xs font-mono text-slate-200">ACCEPTING</span>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-[#050608] border border-slate-800 p-8 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  Lead Contact
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-[#11151E] border border-slate-800 text-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors placeholder:text-slate-700"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="organization" className="block text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  Corporate Entity
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  value={formState.organization}
                  onChange={handleChange}
                  className="w-full bg-[#11151E] border border-slate-800 text-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors placeholder:text-slate-700"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Return Address (Email)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full bg-[#11151E] border border-slate-800 text-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors placeholder:text-slate-700"
                placeholder="john@acmecorp.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiryType" className="block text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Inquiry Classification
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formState.inquiryType}
                onChange={handleChange}
                className="w-full bg-[#11151E] border border-slate-800 text-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors appearance-none"
              >
                <option value="deployment">OS³ Enterprise Deployment</option>
                <option value="consulting">Custom AI Architecture Consulting</option>
                <option value="csr">Isikolo AI CSR Sponsorship</option>
                <option value="other">General Inquiry / Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Transmission Data
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-[#11151E] border border-slate-800 text-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors placeholder:text-slate-700 resize-none"
                placeholder="Enter deployment parameters or inquiry details here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs uppercase tracking-widest py-4 border border-slate-700 hover:border-slate-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
            >
              {status === 'idle' && 'Initialize Transmission'}
              {status === 'submitting' && 'Transmitting...'}
              {status === 'success' && 'Transmission Received'}
              {status === 'error' && 'Retry Transmission'}
            </button>
            
            {status === 'success' && (
              <p className="text-center text-xs font-mono text-green-500/80 mt-4">
                Message successfully logged into the OS³ terminal. We will respond shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-xs font-mono text-red-500/80 mt-4">
                There was an issue processing your request. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};