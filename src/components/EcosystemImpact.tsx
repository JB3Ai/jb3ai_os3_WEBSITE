import React, { useState } from 'react';

export interface SponsorshipTier {
  id: string;
  title: string;
  priceZar: string;
  priceUsd: string;
  description: string;
  badge?: string;
  buttonText: string;
  isManuscript?: boolean;
}

const TIERS: SponsorshipTier[] = [
  {
    id: 'ai-tokens',
    title: 'AI Token Provision',
    priceZar: 'R200',
    priceUsd: '$10',
    description:
      'Contribute directly to the underlying AI token compute costs required to keep Isikolo AI running at zero cost for public end-users.',
    badge: 'Popular Support',
    buttonText: 'Sponsor Tokens',
  },
  {
    id: 'platform-expansion',
    title: 'Platform Expansion',
    priceZar: 'R1,800',
    priceUsd: '$100',
    description:
      'Sponsor direct learner access and infrastructure scaling to deploy Isikolo AI into new rural and under-resourced schools across South Africa.',
    badge: 'High Impact',
    buttonText: 'Sponsor School Access',
  },
  {
    id: 'infrastructure-recovery',
    title: 'Infrastructure Recovery',
    priceZar: 'R4,500',
    priceUsd: '$250',
    description:
      'Direct support toward high-performance hardware recovery, developer toolchains, and expanding the core OS³ public AI infrastructure.',
    badge: 'Institutional',
    buttonText: 'Sponsor Infrastructure',
  },
  {
    id: 'gtr3-manuscript',
    title: 'Reserve GTR³',
    priceZar: 'R900',
    priceUsd: '$50',
    description:
      'Sponsor core development time and reserve a limited-edition physical copy of the GTR³ research manuscript upon public release.',
    badge: 'Limited Edition',
    buttonText: 'Reserve Manuscript',
    isManuscript: true,
  },
];

export const EcosystemImpact: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<SponsorshipTier | null>(null);
  const [paymentGateway, setPaymentGateway] = useState<'payfast' | 'stripe' | 'paypal' | 'crypto'>('payfast');
  const [currency, setCurrency] = useState<'ZAR' | 'USD'>('ZAR');

  const handleOpenModal = (tier: SponsorshipTier) => {
    setSelectedTier(tier);
  };

  const handleCloseModal = () => {
    setSelectedTier(null);
  };

  const executePayment = () => {
    if (!selectedTier) return;

    const amount = currency === 'ZAR' ? selectedTier.priceZar : selectedTier.priceUsd;
    alert(`Initiating ${paymentGateway.toUpperCase()} payment for ${selectedTier.title} (${amount})`);
  };

  return (
    <section id="sponsorship" className="relative overflow-hidden border-t border-slate-800/80 bg-[#0D0F12] py-24 text-slate-100">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-amber-950/15 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/60 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-amber-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            CSR & Ecosystem Sustainability
          </div>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ecosystem Impact & Open Access
          </h2>

          <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
            JB³Ai believes in leveraging institutional-grade technology for societal scale. Support the infrastructure that keeps critical tools like <span className="font-semibold text-amber-300">Isikolo AI</span> free for learners across South Africa.
          </p>

          <div className="mt-6 inline-flex items-center rounded-lg border border-slate-800 bg-slate-900 p-1 text-xs font-mono">
            <button
              onClick={() => setCurrency('ZAR')}
              className={`rounded-md px-3 py-1.5 transition-all ${currency === 'ZAR' ? 'bg-amber-500 font-bold text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              ZAR (South Africa)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`rounded-md px-3 py-1.5 transition-all ${currency === 'USD' ? 'bg-amber-500 font-bold text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'}`}
            >
              USD (Global)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-xl border bg-slate-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 ${tier.isManuscript ? 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]' : 'border-slate-800 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.12)]'}`}
            >
              <div>
                {tier.badge && (
                  <div className="mb-3">
                    <span className={`rounded border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${tier.isManuscript ? 'border-cyan-800 bg-cyan-950/80 text-cyan-300' : 'border-amber-800 bg-amber-950/80 text-amber-300'}`}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold text-white">{tier.title}</h3>

                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-white">{currency === 'ZAR' ? tier.priceZar : tier.priceUsd}</span>
                  <span className="ml-1.5 text-xs font-mono text-slate-500">/ contribution</span>
                </div>

                <p className="mb-6 text-xs leading-relaxed text-slate-300 sm:text-sm">{tier.description}</p>
              </div>

              <button
                onClick={() => handleOpenModal(tier)}
                className={`w-full rounded-lg border px-4 py-2.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${tier.isManuscript ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950' : 'border-amber-500/40 bg-amber-500/10 text-amber-300 hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950'}`}
              >
                {tier.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute right-4 top-4 rounded-md bg-slate-800 p-1 text-xs font-mono text-slate-400 hover:text-white"
            >
              ✕ ESC
            </button>

            <div className="mb-6">
              <span className="mb-1 block text-xs font-mono uppercase tracking-wider text-amber-400">
                Sponsorship Checkout
              </span>
              <h3 className="text-xl font-bold text-white">{selectedTier.title}</h3>
              <p className="mt-1 text-2xl font-extrabold text-amber-400">
                {currency === 'ZAR' ? selectedTier.priceZar : selectedTier.priceUsd}
              </p>
            </div>

            <div className="mb-6 space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400">
                Select Payment Platform
              </label>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPaymentGateway('payfast')}
                  className={`rounded-lg border p-3 text-left text-xs font-semibold transition-all ${paymentGateway === 'payfast' ? 'border-amber-500 bg-amber-500/15 text-amber-300' : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-800'}`}
                >
                  💳 PayFast (ZAR)
                  <span className="mt-0.5 block text-[10px] font-normal text-slate-400">Card / EFT / Instant</span>
                </button>

                <button
                  onClick={() => setPaymentGateway('stripe')}
                  className={`rounded-lg border p-3 text-left text-xs font-semibold transition-all ${paymentGateway === 'stripe' ? 'border-amber-500 bg-amber-500/15 text-amber-300' : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-800'}`}
                >
                  🌐 Stripe (USD)
                  <span className="mt-0.5 block text-[10px] font-normal text-slate-400">Global Cards</span>
                </button>

                <button
                  onClick={() => setPaymentGateway('paypal')}
                  className={`rounded-lg border p-3 text-left text-xs font-semibold transition-all ${paymentGateway === 'paypal' ? 'border-amber-500 bg-amber-500/15 text-amber-300' : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-800'}`}
                >
                  🅿️ PayPal
                  <span className="mt-0.5 block text-[10px] font-normal text-slate-400">International</span>
                </button>

                <button
                  onClick={() => setPaymentGateway('crypto')}
                  className={`rounded-lg border p-3 text-left text-xs font-semibold transition-all ${paymentGateway === 'crypto' ? 'border-amber-500 bg-amber-500/15 text-amber-300' : 'border-slate-700 bg-slate-800/60 text-slate-300 hover:bg-slate-800'}`}
                >
                  ⚡ Web3 / Crypto
                  <span className="mt-0.5 block text-[10px] font-normal text-slate-400">USDT / BTC / ETH</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={executePayment}
                className="w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 transition-colors hover:bg-amber-400"
              >
                Proceed to Checkout ({paymentGateway.toUpperCase()})
              </button>

              <button
                onClick={handleCloseModal}
                className="w-full py-2 text-center text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

