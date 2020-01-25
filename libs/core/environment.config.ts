import { InjectionToken } from '@angular/core';

export interface EnvConfig {
  production: boolean;
  name: string;
}

export const ENV_CONFIG = new InjectionToken<EnvConfig>('environment');
