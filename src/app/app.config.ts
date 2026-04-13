import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
    // Si on veut communiquer avec le backend on ajoute le module http client pr exmpl
    //provideHTTPClient() // si on travaille avec une version avec modules on utilisera app.module.ts dans imports []

};
