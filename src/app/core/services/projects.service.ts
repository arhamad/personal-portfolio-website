import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { Project } from '@shared';

// =============================================================================
// Projects Service
// =============================================================================
// Teaching Point: Feature-specific services encapsulate data access logic.
// This keeps components focused on presentation, not data fetching.

/**
 * Mock project data for development.
 * In a real app, this would come from a database.
 */
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    fullDescription: `
      A comprehensive e-commerce solution built with modern web technologies.
      Features include product catalog with search and filtering, shopping cart
      with persistent storage, secure checkout process, and integration with
      multiple payment providers. The admin dashboard allows inventory management
      and order tracking.
    `,
    imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
    technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://example.com/demo',
    sourceUrl: 'https://github.com/example/ecommerce',
    completedDate: '2024-06-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task manager with real-time updates and team features.',
    fullDescription: `
      A productivity application designed for teams. Features include task creation
      and assignment, due date tracking, priority levels, and real-time collaboration.
      Team members can comment on tasks, attach files, and receive notifications.
      The dashboard provides insights into team productivity and project progress.
    `,
    imageUrl: 'https://picsum.photos/seed/taskapp/600/400',
    technologies: ['Angular', 'Firebase', 'RxJS', 'Material Design'],
    demoUrl: 'https://example.com/tasks',
    sourceUrl: 'https://github.com/example/tasks',
    completedDate: '2024-03-20',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather app with 7-day forecasts and location-based data.',
    fullDescription: `
      A weather application that provides accurate forecasts using multiple data sources.
      Features include current conditions, hourly forecasts, 7-day outlook, and severe
      weather alerts. Users can save favorite locations and switch between Celsius
      and Fahrenheit. The responsive design works great on both desktop and mobile.
    `,
    imageUrl: 'https://picsum.photos/seed/weather/600/400',
    technologies: ['Angular', 'OpenWeather API', 'Chart.js', 'SCSS'],
    demoUrl: 'https://example.com/weather',
    completedDate: '2024-01-10',
    featured: false,
  },
  {
    id: '4',
    title: 'Recipe Finder',
    description: 'Search and save recipes with nutritional information and meal planning.',
    fullDescription: `
      A recipe discovery platform that helps users find and organize meals.
      Features include ingredient-based search, dietary filters (vegan, gluten-free, etc.),
      nutritional information display, and a personal recipe collection. Users can
      create weekly meal plans and generate shopping lists automatically.
    `,
    imageUrl: 'https://picsum.photos/seed/recipes/600/400',
    technologies: ['Angular', 'Spoonacular API', 'NgRx', 'Tailwind CSS'],
    sourceUrl: 'https://github.com/example/recipes',
    completedDate: '2023-11-05',
    featured: false,
  },
];

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly apiService = inject(ApiService);

  /**
   * Get all projects
   */
  getProjects(): Observable<Project[]> {
    return this.apiService.get<Project[]>('/projects', MOCK_PROJECTS);
  }

  /**
   * Get featured projects only
   */
  getFeaturedProjects(): Observable<Project[]> {
    return this.getProjects().pipe(
      map(projects => projects.filter(p => p.featured))
    );
  }

  /**
   * Get a single project by ID
   */
  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }
}
