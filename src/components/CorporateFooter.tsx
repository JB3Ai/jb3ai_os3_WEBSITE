import React from 'react';

interface CorporateDoc {
  title: string;
  category: string;
  description: string;
  path: string;
}

const CORPORATE_DOCS: CorporateDoc[] = [
  {
    title: 'Executive Profile & Resume',
    category: 'Leadership',
    description: 'Jonathan Blackburn premium executive resume and background overview.',
    path: '/assets/pdfs/Jonathan_Blackburn_Premium_Resume.pdf',
  },
  {
    title: '2026 Intelligence Catalogue',
    category: 'Corporate Reports',
    description: 'Comprehensive catalogue of business intelligence and research deliverables.',
    path: '/assets/pdfs/JB3_Business_Intelligence_Reports_Catalogue_2026_v2_F1.pdf',
  },
  {
    title: 'Dukebox London Console',
    category: 'Hardware Spec',
    description: 'Hardware specification and cutsheet for the OS³ London Dukebox console.',
    path: '/assets/pdfs/OS³ DUKEBOX LONDON CUTSHEET.pdf',
  },
  {
    title: 'Isikolo AI CSR Advert',
    category: 'CSR & Sponsorship',
    description: 'Sponsorship briefing and community impact overview for Isikolo AI.',
    path: '/assets/pdfs/AD_ISIKOLOAI - ADVERT SPONCERSHIP F1.pdf',
  },
];

export const CorporateFooter: React.FC = () => {
  return (
    <footer className="bg-[#080A0E] text-slate-300 border-t border-slate-800/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/60">
        <div className="mb-10">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-1">
            Institutional Repository
          </span>
          <h3 className="text-xl font-semibold text-white tracking-tight">
            Corporate Library & Downloads
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORPORATE_DOCS.map((doc, index) => (
            <a
              key={index}
              href={doc.path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-5 bg-[#11151E]/60 border border-slate-800/80 rounded-lg hover:border-slate-600 hover:bg-[#151A24] transition-all group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                  {doc.category}
                </span>
                <h4 className="text-sm font-medium text-slate-200 group-hover:text-white mb-2">
                  {doc.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-200">
                <span>PDF Document</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="font-bold text-white tracking-wider">JB³Ai</span>
          <span>—</span>
          <span>OS³ Managed AI Operating System</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px]">
          <a href="/demo" className="hover:text-slate-300 transition-colors">OS³ DEMO</a>
          <a href="#sponsorship" className="hover:text-slate-300 transition-colors">CSR SPONSORSHIP</a>
          <a href="https://github.com/JB3Ai/jb3ai_os3_WEBSITE" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">GITHUB REPO</a>
        </div>

        <p className="text-[11px]">
          © {new Date().getFullYear()} JB³Ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default CorporateFooter;
