import React from 'react';
import ModuleGrid from './ModuleGrid';

export const ApplicationGrid: React.FC = () => {
  return (
    <section id="applications" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <div className="mb-4 inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            OS³ Intelligence Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Applications Suite
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A unified 3x3 platform module grid for institutional intelligence, operations, and governance.
          </p>
        </div>

        <ModuleGrid />
      </div>
    </section>
  );
};

export default ApplicationGrid;
