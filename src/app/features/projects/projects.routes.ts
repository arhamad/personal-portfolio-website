import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects';
import { ProjectDetailComponent } from './components/project-detail/project-detail';

// =============================================================================
// Projects Feature Routes
// =============================================================================
// Teaching Point: Nested routes allow the feature to have multiple views.
// The empty path shows the list, and :id shows the detail.

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    title: 'Projects | Ahmad Hamad Portfolio',
  },
  {
    path: ':id',
    component: ProjectDetailComponent,
    title: 'Project Details | Ahmad Hamad Portfolio',
  },
];
