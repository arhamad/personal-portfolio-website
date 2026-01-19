import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '@shared';
import { CardComponent } from '@shared';
import { ButtonComponent } from '@shared';
import { TruncatePipe } from '@shared';
import { ProjectsService } from '@core';

// =============================================================================
// Projects Page Component
// =============================================================================
// Teaching Point: This page displays all projects from the ProjectsService.
// It uses toSignal() to convert the Observable to a Signal for the template.

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    SectionTitleComponent,
    CardComponent,
    ButtonComponent,
    TruncatePipe,
  ],
  template: `
    <div class="projects">
      <app-section-title
        title="My Projects"
        subtitle="A collection of my recent work"
      />

      <div class="projects__grid">
        @for (project of projects(); track project.id) {
          <app-card [imageUrl]="project.imageUrl" [imageAlt]="project.title">
            <div class="project-card">
              @if (project.featured) {
                <span class="project-card__badge">Featured</span>
              }
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__description">
                {{ project.description | truncate:150 }}
              </p>
              <div class="project-card__tech">
                @for (tech of project.technologies; track tech) {
                  <span class="project-card__tag">{{ tech }}</span>
                }
              </div>
              <div class="project-card__actions">
                <a [routerLink]="['/projects', project.id]">
                  <app-button variant="primary">View Details</app-button>
                </a>
                @if (project.demoUrl) {
                  <a [href]="project.demoUrl" target="_blank" rel="noopener">
                    <app-button variant="outline">Live Demo</app-button>
                  </a>
                }
              </div>
            </div>
          </app-card>
        } @empty {
          <div class="projects__loading">
            <p>Loading projects...</p>
          </div>
        }
      </div>
    </div>
  `,
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  private readonly projectsService = inject(ProjectsService);

  /**
   * All projects as a signal
   */
  protected readonly projects = toSignal(
    this.projectsService.getProjects(),
    { initialValue: [] }
  );
}
