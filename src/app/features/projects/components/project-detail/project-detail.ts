import { Component, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { ButtonComponent } from '@shared';
import { ProjectsService } from '@core';

// =============================================================================
// Project Detail Component
// =============================================================================
// Teaching Point: This component demonstrates how to:
// 1. Read route parameters using ActivatedRoute
// 2. Use switchMap to chain Observables
// 3. Handle loading and not-found states

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `
    <div class="project-detail">
      @if (project(); as project) {
        <!-- Project Header -->
        <header class="project-detail__header">
          <a routerLink="/projects" class="project-detail__back">
            &larr; Back to Projects
          </a>
          <h1 class="project-detail__title">{{ project.title }}</h1>
          @if (project.completedDate) {
            <p class="project-detail__date">
              Completed: {{ project.completedDate }}
            </p>
          }
        </header>

        <!-- Project Image -->
        <div class="project-detail__image">
          <img [src]="project.imageUrl" [alt]="project.title" />
        </div>

        <!-- Project Content -->
        <div class="project-detail__content">
          <!-- Description -->
          <section class="project-detail__section">
            <h2>About This Project</h2>
            <p class="project-detail__description">
              {{ project.fullDescription || project.description }}
            </p>
          </section>

          <!-- Technologies -->
          <section class="project-detail__section">
            <h2>Technologies Used</h2>
            <div class="project-detail__tech">
              @for (tech of project.technologies; track tech) {
                <span class="project-detail__tag">{{ tech }}</span>
              }
            </div>
          </section>

          <!-- Links -->
          <section class="project-detail__actions">
            @if (project.demoUrl) {
              <a [href]="project.demoUrl" target="_blank" rel="noopener">
                <app-button variant="primary">View Live Demo</app-button>
              </a>
            }
            @if (project.sourceUrl) {
              <a [href]="project.sourceUrl" target="_blank" rel="noopener">
                <app-button variant="outline">View Source Code</app-button>
              </a>
            }
          </section>
        </div>
      } @else if (isLoading()) {
        <div class="project-detail__loading">
          <p>Loading project...</p>
        </div>
      } @else {
        <div class="project-detail__not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <a routerLink="/projects">
            <app-button variant="primary">Back to Projects</app-button>
          </a>
        </div>
      }
    </div>
  `,
  styleUrl: './project-detail.scss',
})
export class ProjectDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  /**
   * Project data fetched based on route parameter
   * Teaching Point: switchMap cancels the previous Observable when the route changes
   */
  protected readonly project = toSignal(
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') ?? '';
        return this.projectsService.getProjectById(id);
      })
    )
  );

  /**
   * Loading state (project is undefined initially)
   */
  protected readonly isLoading = computed(() => this.project() === undefined);
}
