import React from 'react';
import { AppModule } from '../types';
import { DashboardBackdrop } from '../components/ui/DashboardBackdrop';
import { FadeIn } from '../components/ui/FadeIn';
import { ProductPortfolioGrid } from '../components/ProductPortfolioGrid';
import { PRODUCT_PORTFOLIO, PRODUCT_PORTFOLIO_CATEGORIES } from '../content/products';

interface AppsListPageProps {
    onNavigate: (module: AppModule) => void;
}

export const AppsListPage: React.FC<AppsListPageProps> = ({ onNavigate }) => (
    <div className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <DashboardBackdrop />
        <div className="relative z-10 mx-auto max-w-7xl space-y-20 md:space-y-28">
            <header className="mx-auto max-w-4xl space-y-6 text-center">
                <FadeIn>
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.38em] text-amber-300/80">Technology Portfolio</p>
                    <h1 className="text-3xl font-bold uppercase tracking-tighter text-white md:text-5xl">JB³AI Products</h1>
                </FadeIn>
                <FadeIn className="space-y-4">
                    <p className="text-sm leading-7 text-slate-300 md:text-base">
                        The wider JB³Ai technology portfolio — specialist applications, intelligence systems, communication platforms and purpose-built AI products developed around real operational needs.
                    </p>
                    <p className="mx-auto max-w-3xl text-xs leading-6 text-slate-500 md:text-sm">
                        Some products operate directly within OS³, while others can be deployed independently, integrated into client environments, or connected into the wider JB³Ai operating architecture.
                    </p>
                </FadeIn>
            </header>

            <div className="space-y-20 md:space-y-24">
                {PRODUCT_PORTFOLIO_CATEGORIES.map((category) => {
                    const products = PRODUCT_PORTFOLIO.filter((product) => product.categoryId === category.id);
                    if (products.length === 0) return null;

                    return (
                        <FadeIn key={category.id}>
                            <ProductPortfolioGrid category={category} products={products} onNavigate={onNavigate} />
                        </FadeIn>
                    );
                })}
            </div>

            <FadeIn>
                <section className="grid gap-8 border border-slate-800 bg-slate-900/80 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end md:p-12">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-amber-300/80">Custom Systems</p>
                        <h2 className="text-2xl font-semibold uppercase tracking-tight text-white md:text-3xl">Built Around the Requirement</h2>
                        <p className="text-sm leading-7 text-slate-400 md:text-base">
                            JB³Ai products can operate independently, connect into OS³, or form part of a custom client environment. Where an off-the-shelf product is not the right answer, JB³Ai combines advisory, system design and development to build around the operational requirement.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onNavigate(AppModule.CONSULTING)}
                        className="inline-flex min-h-11 items-center justify-center border border-slate-600 bg-slate-100 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-950 transition-colors hover:bg-white"
                    >
                        Book a Consultation
                    </button>
                </section>
            </FadeIn>
        </div>
    </div>
);
