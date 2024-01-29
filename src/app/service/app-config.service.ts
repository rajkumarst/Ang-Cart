import { Injectable, InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment.development';

export const APPCONFIG_SERVICE_TOKEN = new InjectionToken<AppConfig>('Injection Token for APP Config ')

export const APP_CONFIG: AppConfig = {
  userApiEndpoint: environment.userApiEndpoint,
  drinksApiEndpoint: environment.drinksApiEndpoint,
}

export interface AppConfig {
  userApiEndpoint: string;
  drinksApiEndpoint: string;
}