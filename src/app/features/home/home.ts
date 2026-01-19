import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { SectionTitleComponent } from '@shared';
import { CardComponent } from '@shared';
import { ButtonComponent } from '@shared';
import { TruncatePipe } from '@shared';
import { ProjectsService } from '@core';

// =============================================================================
// Home Page Component
// =============================================================================
// Teaching Point: Page components orchestrate feature components and connect
// to services. They're the "smart" components that manage data.

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    SectionTitleComponent,
    CardComponent,
    ButtonComponent,
    TruncatePipe,
  ],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <app-hero />

      <!-- Featured Projects Section -->
      <section class="home__section">
        <app-section-title
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div class="home__projects">
          @for (project of featuredProjects(); track project.id) {
            <app-card [imageUrl]="project.imageUrl" [imageAlt]="project.title">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">
                {{ project.description | truncate:120 }}
              </p>
              <div class="project-tech">
                @for (tech of project.technologies.slice(0, 3); track tech) {
                  <span class="project-tech__tag">{{ tech }}</span>
                }
              </div>
              <a [routerLink]="['/projects', project.id]" class="project-link">
                <app-button variant="outline">View Details</app-button>
              </a>
            </app-card>
          } @empty {
            <p class="home__loading">Loading projects...</p>
          }
        </div>

        <div class="home__more">
          <a routerLink="/projects">
            <app-button variant="secondary">View All Projects</app-button>
          </a>
        </div>
      </section>
    </div>
  `,
  styleUrl: './home.scss',
})
export class HomeComponent {
  private readonly projectsService = inject(ProjectsService);

  /**
   * Featured projects converted to signal for reactive template binding
   * Teaching Point: toSignal() converts Observables to Signals for simpler templates
   */
  protected readonly featuredProjects = toSignal(
    this.projectsService.getFeaturedProjects(),
    { initialValue: [] }
  );
}
