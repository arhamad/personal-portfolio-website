import { Routes } from '@angular/router';
import { HomeComponent } from './home';

// =============================================================================
// Home Feature Routes
// =============================================================================
// Teaching Point: Each feature has its own routes file.
// This enables lazy loading and keeps routing logic co-located with the feature.

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home | Ahmad Hamad Portfolio',
  },
];
