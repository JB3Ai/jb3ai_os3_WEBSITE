export const BROCHURES = {
    os3dash: "/assets/pdfs/JB³ OS³ Dash The Operating SystemF1.pdf",
    mindcare: "/assets/pdfs/OS³ ISIKOLOAI CUTSHEET.pdf",
    shield: "/assets/pdfs/Dual-Layer Intelligencetar×JBF1.pdf",
    investigator: "/assets/pdfs/FINAL V2 JB³Ai Forensic Intelligence Systems Overview F1.pdf",
    consulting: "/assets/pdfs/JB3_Consulting & Accelerator_F1.pdf",
    investment: "/assets/pdfs/JBInvestment Intelligence in MotionV2_F!.pdf",
    voicegrid: "/assets/pdfs/OS³ VOICEGRID CUTSHEET.pdf",
} as const;

export type BrochureKey = keyof typeof BROCHURES;
