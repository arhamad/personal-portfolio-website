import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared';

// =============================================================================
// Hero Component
// =============================================================================
// Teaching Point: Feature-specific components live inside their feature folder.
// Hero is only used on the Home page, so it belongs in features/home/components.

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `
    <section class="hero">
      <div class="hero__content">
        <p class="hero__greeting">Hello, I'm</p>
        <h1 class="hero__name">Ahmad Hamad</h1>
        <h2 class="hero__title">Full Stack Developer</h2>
        <p class="hero__description">
          I build exceptional digital experiences with modern web technologies.
          Passionate about clean code, user experience, and continuous learning.
        </p>
        <div class="hero__actions">
          <a routerLink="/projects">
            <app-button variant="primary">View My Work</app-button>
          </a>
          <a routerLink="/contact">
            <app-button variant="outline">Get In Touch</app-button>
          </a>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__avatar">
          <span class="hero__avatar-text">AH</span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class HeroComponent {}
