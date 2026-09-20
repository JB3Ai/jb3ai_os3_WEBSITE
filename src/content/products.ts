import { AppModule } from '../types';
import { BrochureKey } from './brochures';

export type ProductPortfolioCategoryId =
    | 'os3-operations'
    | 'intelligence'
    | 'communications'
    | 'education'
    | 'media'
    | 'specialist';

export interface ProductPortfolioCategory {
    id: ProductPortfolioCategoryId;
    number: string;
    title: string;
    description: string;
}

export interface ProductPortfolioItem {
    id: string;
    name: string;
    categoryId: ProductPortfolioCategoryId;
    proposition: string;
    description: string;
    type: string;
    status: 'Available' | 'Programme' | 'Specialist deployment';
    imageUrl: string;
    route?: AppModule;
    demoPath?: string;
    brochureId?: BrochureKey;
}

export const PRODUCT_PORTFOLIO_CATEGORIES: ProductPortfolioCategory[] = [
    {
        id: 'os3-operations',
        number: '01',
        title: 'OS³ Core & AI Operations',
        description: 'The managed operating layer and governed AI systems used to coordinate applications, workflows and oversight.',
    },
    {
        id: 'intelligence',
        number: '02',
        title: 'Intelligence & Investigation',
        description: 'Tools for evidence analysis, digital risk visibility, geospatial monitoring and complex operational research.',
    },
    {
        id: 'communications',
        number: '03',
        title: 'Secure Communications',
        description: 'Controlled communication products for sensitive information, multilingual voice operations and live channels.',
    },
    {
        id: 'education',
        number: '04',
        title: 'Education & Social Impact',
        description: 'Accessible technology developed around South African learning environments and public-impact needs.',
    },
    {
        id: 'media',
        number: '05',
        title: 'Media & Creative AI',
        description: 'Purpose-built systems for intelligent content operations and generative creative experiences.',
    },
    {
        id: 'specialist',
        number: '06',
        title: 'Specialist Systems & Client Technology',
        description: 'Specialised AI products configured around business roles, client workflows and organisational knowledge.',
    },
];

export const PRODUCT_PORTFOLIO: ProductPortfolioItem[] = [
    {
        id: 'os3-dash', name: 'OS³ Dash', categoryId: 'os3-operations',
        proposition: 'Managed AI operating environment connecting intelligence, workflows, applications and human oversight.',
        description: 'OS³ Dash provides a governed environment for coordinating data, AI applications and operational activity. It gives organisations a central view of connected systems without removing human accountability.',
        type: 'Managed operating environment', status: 'Available',
        imageUrl: '/assets/images/os3-dash-command-dashboard.jpg', route: AppModule.OS3_INFO, brochureId: 'os3dash',
    },
    {
        id: 'investigator-ai', name: 'InvestigatorAi', categoryId: 'intelligence',
        proposition: 'Due-diligence, forensic analysis and evidence intelligence for complex investigations.',
        description: 'InvestigatorAi brings fragmented documents, communications and records into a traceable investigative view. It supports timeline reconstruction, relationship analysis and evidence-led human decision-making.',
        type: 'Forensic intelligence', status: 'Available',
        imageUrl: '/assets/images/investigator-ai-product.jpg', route: AppModule.INVESTIGATOR_AI,
        demoPath: '/demo?app=investigator', brochureId: 'investigatorCutsheet',
    },
    {
        id: 'shield-ai', name: 'ShieldAi', categoryId: 'intelligence',
        proposition: 'Digital risk monitoring and intelligence designed to surface threats, anomalies and exposure.',
        description: 'ShieldAi is the monitoring and governance layer represented across the JB³Ai environment. It supports risk visibility, policy control and the review of activity across connected systems.',
        type: 'Risk and governance intelligence', status: 'Specialist deployment',
        imageUrl: '/assets/images/os3-dash-command-dashboard.jpg', brochureId: 'shield',
    },
    {
        id: 'viewgrid', name: 'ViewGrid', categoryId: 'intelligence',
        proposition: 'Satellite and geospatial visual intelligence for monitoring, investigation and situational awareness.',
        description: 'ViewGrid brings satellite and location-based visual information into an operational monitoring context. It is positioned for logistical oversight, investigation and broader situational understanding.',
        type: 'Geospatial intelligence', status: 'Specialist deployment',
        imageUrl: '/assets/images/viewgrid-satellite.jpg', demoPath: '/demo?app=viewgrid', brochureId: 'sentinelEye',
    },
    {
        id: 'clipboard-ai', name: 'Clipboard AI', categoryId: 'communications',
        proposition: 'Secure container-based communication and controlled information sharing for sensitive environments.',
        description: 'Clipboard AI provides a controlled workspace for sensitive conversations and document exchange. Its container-based approach keeps communication workflows separated and easier to govern.',
        type: 'Secure communications', status: 'Available',
        imageUrl: '/assets/images/clipboard-ai-private-workspace.jpg', demoPath: '/demo?app=clipboard', brochureId: 'clipboard',
    },
    {
        id: 'voicegrid-ai', name: 'VoiceGrid AI', categoryId: 'communications',
        proposition: 'Multilingual voice and communications infrastructure, a call centre and intelligent voice layer in your pocket.',
        description: 'VoiceGrid supports structured inbound and outbound voice workflows across multiple languages. Calls can become governed operational signals, transcripts and qualification data inside a wider environment.',
        type: 'Voice infrastructure', status: 'Available',
        imageUrl: '/assets/images/voicegrid-dashboard.jpg', route: AppModule.PHONE_SYSTEM,
        demoPath: '/demo?app=voicegrid', brochureId: 'voicegrid',
    },
    {
        id: 'newsroom', name: 'Newsroom', categoryId: 'communications',
        proposition: 'Secure live information and communication channels designed for controlled public and organisational communication.',
        description: 'Newsroom supports structured information publishing, curation and communication in fast-moving environments. It is designed around controlled content flows rather than disconnected publishing tools.',
        type: 'Information channel', status: 'Specialist deployment',
        imageUrl: '/assets/images/newsroom-hud.jpg', brochureId: 'newsroom',
    },
    {
        id: 'isikolo-ai', name: 'IsikoloAi', categoryId: 'education',
        proposition: 'AI-supported South African education across local languages and curriculum environments.',
        description: 'IsikoloAi focuses on accessible learning support for South African learners and educators. The programme combines curriculum-aware assistance with multilingual access and public-impact delivery.',
        type: 'Education initiative', status: 'Programme',
        imageUrl: '/assets/images/isikolo-ai-cover-education-visual.jpg', demoPath: '/demo?app=isikolo', brochureId: 'isikolo',
    },
    {
        id: 'dukebox', name: 'DukeBox of London', categoryId: 'media',
        proposition: 'Generative music technology creating unique AI-generated playback experiences.',
        description: 'DukeBox of London explores generative music through a dedicated playback experience. It represents JB³Ai work at the intersection of creative systems, interface design and generated media.',
        type: 'Generative music system', status: 'Specialist deployment',
        imageUrl: '/assets/images/dukebox-project.jpg', brochureId: 'dukebox',
    },
    {
        id: 'superagents', name: 'JB³ SuperAgents', categoryId: 'specialist',
        proposition: 'Specialised AI agents configured around business roles, workflows and organisational knowledge.',
        description: 'SuperAgents support repeatable work across research, operations and specialist business functions. Deployments are shaped around defined responsibilities, knowledge sources and human hand-offs.',
        type: 'AI workforce system', status: 'Specialist deployment',
        imageUrl: '/assets/images/jb3ai-super-agent-os-architecture.jpg', demoPath: '/demo?app=superagents',
    },
];
