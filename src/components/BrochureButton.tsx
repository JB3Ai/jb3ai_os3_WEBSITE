import React from 'react';
import { BROCHURES, BrochureKey, getDocumentDownloadName, isDocumentAvailable } from '../content/brochures';

interface BrochureButtonProps {
    k?: BrochureKey;
    label?: string;
    className?: string;
    action?: 'preview' | 'download';
}

export function BrochureButton({
    k,
    label,
    className = '',
    action = 'preview',
}: BrochureButtonProps) {
    const document = k ? BROCHURES[k] : undefined;

    if (!isDocumentAvailable(document)) {
        return (
            <span
                role="status"
                aria-label="Document is currently being updated"
                className={`inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-gray-500 ${className}`}
            >
                Document being updated
            </span>
        );
    }

    const isDownload = action === 'download';

    return (
        <a
            href={document.pdfUrl}
            target={isDownload ? undefined : '_blank'}
            rel={isDownload ? undefined : 'noopener noreferrer'}
            download={isDownload ? getDocumentDownloadName(document) : undefined}
            className={`inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[12px] uppercase tracking-[0.18em] transition-all hover:bg-white/10 ${className}`}
        >
            {label ?? (isDownload ? 'Download document (PDF)' : 'Preview document (PDF)')}
        </a>
    );
}
