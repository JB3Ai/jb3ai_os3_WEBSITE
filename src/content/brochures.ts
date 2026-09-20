export type DocumentStatus = 'available' | 'missing' | 'placeholder';

export interface BrochureAsset {
    id: string;
    title: string;
    category: string;
    description: string;
    pdfUrl: string;
    imageUrl?: string;
    featured?: boolean;
    fileSize?: string;
    status: DocumentStatus;
}

const image = {
    operations: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    security: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    voice: 'https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop',
    education: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop',
    advisory: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    intelligence: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    satellite: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
} as const;

// This is the only document registry. A file may be marked available only after it
// exists in public/assets/pdfs and its bytes begin with a valid PDF signature (%PDF-).
export const DOCUMENTS = {
    os3dash: {
        id: 'os3dash', title: 'OS³ Dash', category: 'Enterprise Operations',
        description: 'The modular AI operating system designed for enterprise-scale integration and real-time operational efficiency.',
        pdfUrl: '/assets/pdfs/JB3-OS3-Dash-The-Operating-SystemF1.pdf', imageUrl: image.operations, featured: true, status: 'placeholder',
    },
    investigator: {
        id: 'investigator', title: 'Investigator AI', category: 'Legal & Compliance',
        description: 'Advanced forensic intelligence platform for deep-dive investigations and automated evidence synthesis.',
        pdfUrl: '/assets/pdfs/FINAL-V2-JB3Ai-Forensic-Intelligence-Systems-Overview-F1.pdf', imageUrl: image.security, featured: true, status: 'placeholder',
    },
    shield: {
        id: 'shield', title: 'Shield AI', category: 'Cybersecurity Teams',
        description: 'Silent, proactive protection layering that neutralizes threats before they reach core infrastructure.',
        pdfUrl: '/assets/pdfs/Dual-Layer-Intelligencetar-JBF1.pdf', imageUrl: image.security, status: 'placeholder',
    },
    voicegrid: {
        id: 'voicegrid', title: 'OS³ VoiceGrid', category: 'Communications',
        description: 'Intelligent, low-latency voice architecture integrating natural language processing at the edge.',
        pdfUrl: '/assets/pdfs/OS3-VOICEGRID-CUTSHEET.pdf', imageUrl: image.voice, featured: true, status: 'placeholder',
    },
    isikolo: {
        id: 'isikolo', title: 'Isikolo AI', category: 'Education',
        description: 'Accessible educational intelligence designed for South African learners and curriculum environments.',
        pdfUrl: '/assets/pdfs/OS3-ISIKOLOAI-CUTSHEET.pdf', imageUrl: image.education, featured: true, status: 'placeholder',
    },
    coreBriefing: {
        id: 'coreBriefing', title: 'Intelligence Managed', category: 'Managed Services',
        description: 'A briefing on managed intelligence services and the OS³ core platform.',
        pdfUrl: '/assets/pdfs/OS3-Core-Platform-Briefings-WEB-F1.pdf', imageUrl: image.intelligence, status: 'placeholder',
    },
    consulting: {
        id: 'consulting', title: 'Consulting & Accelerator', category: 'Advisory',
        description: 'Strategic roadmaps and high-impact deployment frameworks for practical AI transformation.',
        pdfUrl: '/assets/pdfs/JB3-Consulting-Accelerator-F1.pdf', imageUrl: image.advisory, featured: true, status: 'placeholder',
    },
    intelligenceCatalogue: {
        id: 'intelligenceCatalogue', title: 'Business Intelligence Reports Catalogue', category: 'Corporate Material',
        description: 'The 2026 catalogue of JB³Ai business intelligence and research deliverables.',
        pdfUrl: '/assets/pdfs/JB3_Business_Intelligence_Reports_Catalogue_2026_v2_F1.pdf', imageUrl: image.advisory, status: 'placeholder',
    },
    investment: {
        id: 'investment', title: 'Investment Intelligence in Motion', category: 'Investment Intelligence',
        description: 'A strategic overview of quantitative intelligence modelling and institutional asset oversight.',
        pdfUrl: '/assets/pdfs/JBInvestment-Intelligence-in-Motion-V2-F1.pdf', imageUrl: image.intelligence, status: 'placeholder',
    },
    sentinelEye: {
        id: 'sentinelEye', title: 'The Sentinel Eye', category: 'Aerial Intelligence',
        description: 'Global satellite overlay and surveillance intelligence for logistical and security oversight.',
        pdfUrl: '/assets/pdfs/Global-Satellite-Overlay-The-Sentinel-EyeF1.pdf', imageUrl: image.satellite, status: 'placeholder',
    },
    investigatorCutsheet: {
        id: 'investigatorCutsheet', title: 'Investigator AI Cutsheet', category: 'Product Brief', description: 'Technical product cutsheet for Investigator AI.',
        pdfUrl: '/assets/pdfs/OS3-INVESTIGATOR_CUTSHEET_WEB.pdf', status: 'placeholder',
    },
    investigatorDash: {
        id: 'investigatorDash', title: 'Investigator AI Dash Brief', category: 'Product Brief', description: 'Platform brief for Investigator AI within OS³ Dash.',
        pdfUrl: '/assets/pdfs/JB3InvestigatorAi-VER1-Dash.pdf', status: 'placeholder',
    },
    investigatorOpen: {
        id: 'investigatorOpen', title: 'Investigator AI Open Briefing', category: 'Product Brief', description: 'Open briefing for Investigator AI.',
        pdfUrl: '/assets/pdfs/CHECK-OS3-INVESTIGATORAI-OPEN.pdf', status: 'placeholder',
    },
    clipboard: {
        id: 'clipboard', title: 'ClipboardAI', category: 'Product Brief', description: 'Technical product brief for secure containerized communications.',
        pdfUrl: '/assets/pdfs/OS3-CLIPBOARDAI.pdf', status: 'placeholder',
    },
    voicegridInfrastructure: {
        id: 'voicegridInfrastructure', title: 'Sovereign VoiceGrid Infrastructure Manual', category: 'Technical Document', description: 'Infrastructure manual for sovereign VoiceGrid deployments.',
        pdfUrl: '/assets/pdfs/Sovereign-VOICEGRID-V2-Infrastructure-ManualF1.pdf', status: 'placeholder',
    },
    voicegridBrief: {
        id: 'voicegridBrief', title: 'OS³ VoiceGrid Platform Brief', category: 'Product Brief', description: 'Platform overview for OS³ VoiceGrid.',
        pdfUrl: '/assets/pdfs/OS3-VER1-Voice-Grid_F1.pdf', status: 'placeholder',
    },
    isikoloLearners: {
        id: 'isikoloLearners', title: 'Isikolo AI for Learners', category: 'Education', description: 'Learner-facing introduction to Isikolo AI.',
        pdfUrl: '/assets/pdfs/IsikoloAi-for-learnersF1.pdf', status: 'placeholder',
    },
    isikoloStory: {
        id: 'isikoloStory', title: 'The Bridge of Voices', category: 'Education', description: 'The story of Isikolo AI and accessible multilingual education.',
        pdfUrl: '/assets/pdfs/The-Bridge-of-Voices_-The-Story-of-Isikolo-AI.pdf', status: 'placeholder',
    },
    isikoloSponsorship: {
        id: 'isikoloSponsorship', title: 'Isikolo AI Sponsorship Brief', category: 'Corporate Material', description: 'Sponsorship overview for the Isikolo AI education initiative.',
        pdfUrl: '/assets/pdfs/AD_ISIKOLOAI---ADVERT-SPONCERSHIP-F1.pdf', status: 'placeholder',
    },
    newsroom: {
        id: 'newsroom', title: 'NewsRoom AI Cutsheet', category: 'Product Brief', description: 'Technical product cutsheet for NewsRoom AI.',
        pdfUrl: '/assets/pdfs/OS3-NEWSROOMAI-CUTSHEET.pdf', status: 'placeholder',
    },
    coreOpen: {
        id: 'coreOpen', title: 'OS³ Core Platform Open Briefing', category: 'Technical Document', description: 'Open technical briefing for the OS³ core platform.',
        pdfUrl: '/assets/pdfs/CHECK-OS3-Core-Platform-BriefingsF1OPEN.pdf', status: 'placeholder',
    },
    dukebox: {
        id: 'dukebox', title: 'OS³ Dukebox London Cutsheet', category: 'Hardware Specification', description: 'Hardware specification for the OS³ London Dukebox console.',
        pdfUrl: '/assets/pdfs/OS3-DUKEBOX-LONDON-CUTSHEET.pdf', status: 'placeholder',
    },
} as const satisfies Record<string, BrochureAsset>;

export type BrochureKey = keyof typeof DOCUMENTS;
export const BROCHURES = DOCUMENTS;
export const LIBRARY_DOCUMENTS: BrochureAsset[] = Object.values(DOCUMENTS);

export const isDocumentAvailable = (document: BrochureAsset | undefined): document is BrochureAsset =>
    document?.status === 'available';

export const getDocumentDownloadName = (document: BrochureAsset): string =>
    document.pdfUrl.split('/').pop() || `${document.id}.pdf`;
