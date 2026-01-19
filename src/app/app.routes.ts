import { Routes } from '@angular/router';

// =============================================================================
// Main Application Routes
// =============================================================================
// Teaching Point: Lazy loading keeps the initial bundle small.
// Each feature is only loaded when the user navigates to it.
// The loadChildren function returns a Promise that resolves to the routes.

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home.routes').then(m => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.routes').then(m => m.ABOUT_ROUTES),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/projects.routes').then(m => m.PROJECTS_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES),
  },
  {
    // Catch-all redirect to home
    path: '**',
    redirectTo: '',
  },
];
