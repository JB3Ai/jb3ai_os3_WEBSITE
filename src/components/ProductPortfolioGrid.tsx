import React from 'react';
import { ArrowUpRight, FileText, Play } from 'lucide-react';
import { AppModule } from '../types';
import { BROCHURES, isDocumentAvailable } from '../content/brochures';
import { ProductPortfolioCategory, ProductPortfolioItem } from '../content/products';

interface ProductPortfolioGridProps {
    category: ProductPortfolioCategory;
    products: ProductPortfolioItem[];
    onNavigate: (module: AppModule) => void;
}

const actionClass = 'inline-flex min-h-10 items-center justify-center gap-2 border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition-colors';

export const ProductPortfolioGrid: React.FC<ProductPortfolioGridProps> = ({ category, products, onNavigate }) => (
    <section className="space-y-8" aria-labelledby={`portfolio-${category.id}`}>
        <header className="grid gap-4 border-t border-slate-800 pt-7 md:grid-cols-[auto_1fr] md:gap-7">
            <span className="font-mono text-sm text-amber-300/80" aria-hidden="true">{category.number}</span>
            <div className="max-w-3xl space-y-3">
                <h2 id={`portfolio-${category.id}`} className="text-xl font-semibold uppercase tracking-[0.08em] text-white md:text-2xl">
                    {category.title}
                </h2>
                <p className="text-sm leading-6 text-slate-400">{category.description}</p>
            </div>
        </header>

        <div className="grid items-start grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
                const brochure = product.brochureId ? BROCHURES[product.brochureId] : undefined;
                const brochureAvailable = isDocumentAvailable(brochure);

                return (
                    <article key={product.id} className="group overflow-hidden border border-slate-800 bg-slate-900/80 transition-colors hover:border-slate-700">
                        <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-800 bg-slate-950">
                            <img
                                src={product.imageUrl}
                                alt={`${product.name} product interface`}
                                decoding="async"
                                className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                            <span className="absolute bottom-4 left-4 border border-slate-700/80 bg-slate-950/90 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-300">
                                {product.status}
                            </span>
                        </div>

                        <div className="space-y-6 p-5 sm:p-6">
                            <div className="space-y-3">
                                <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-amber-300/80">{product.type}</p>
                                <h3 className="text-2xl font-semibold tracking-tight text-white">{product.name}</h3>
                                <p className="text-sm font-medium leading-6 text-slate-200">{product.proposition}</p>
                                <p className="text-sm leading-6 text-slate-400">{product.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 border-t border-slate-800 pt-5">
                                {product.route ? (
                                    <button
                                        type="button"
                                        onClick={() => onNavigate(product.route!)}
                                        className={`${actionClass} border-slate-600 bg-slate-100 text-slate-950 hover:bg-white`}
                                    >
                                        View Product <ArrowUpRight className="h-3.5 w-3.5" />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => onNavigate(AppModule.CONSULTING)}
                                        className={`${actionClass} border-slate-600 bg-slate-100 text-slate-950 hover:bg-white`}
                                    >
                                        Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                                    </button>
                                )}
                                {product.demoPath && (
                                    <a href={product.demoPath} className={`${actionClass} border-slate-700 bg-slate-950 text-slate-100 hover:border-slate-500 hover:bg-slate-800`}>
                                        Demo <Play className="h-3.5 w-3.5" />
                                    </a>
                                )}
                                {brochureAvailable && (
                                    <a
                                        href={brochure.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${actionClass} border-slate-700 bg-slate-950 text-slate-100 hover:border-slate-500 hover:bg-slate-800`}
                                    >
                                        Brochure <FileText className="h-3.5 w-3.5" />
                                    </a>
                                )}
                            </div>

                            {product.brochureId && !brochureAvailable && (
                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-600" role="status">
                                    Document being updated
                                </p>
                            )}
                        </div>
                    </article>
                );
            })}
        </div>
    </section>
);
