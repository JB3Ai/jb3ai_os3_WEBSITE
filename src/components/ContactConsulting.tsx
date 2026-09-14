import React from 'react';
import { EnquiryForm } from './EnquiryForm';

export const ContactConsulting: React.FC = () => {
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
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};
