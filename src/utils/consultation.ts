import { AppModule } from '../types';

export type MarketingNavigate = (module: AppModule) => void;

export const CONSULTATION_DESTINATION = AppModule.CONSULTING;

export const openConsultation = (navigate: MarketingNavigate): void => {
    navigate(CONSULTATION_DESTINATION);
};
