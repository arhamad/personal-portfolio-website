import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

// =============================================================================
// Application Configuration
// =============================================================================
// Teaching Point: This is the bootstrap configuration for the app.
// We configure providers that will be available throughout the application.

export const appConfig: ApplicationConfig = {
  providers: [
    // Global error handling
    provideBrowserGlobalErrorListeners(),

    // Router configuration with component input binding for route params
    provideRouter(routes, withComponentInputBinding()),

    // HTTP client for API calls (using fetch for better performance)
    provideHttpClient(withFetch()),
  ],
};
