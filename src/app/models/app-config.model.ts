import { InjectionToken } from '@angular/core';

export interface AppConfig {
    title: string;
    apiEndPoint: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const HERO_DI_CONFIG: AppConfig = {
    title: 'Dependency Injection',
    apiEndPoint: 'api.hero.com',
};
