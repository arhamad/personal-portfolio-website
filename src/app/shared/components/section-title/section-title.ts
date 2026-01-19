import { Component, input } from '@angular/core';

// =============================================================================
// Section Title Component
// =============================================================================
// Teaching Point: Small, focused components like this promote consistency
// and make it easy to update the design across the entire app.

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="section-title">
      <h2 class="section-title__heading">{{ title() }}</h2>
      @if (subtitle()) {
        <p class="section-title__subtitle">{{ subtitle() }}</p>
      }
    </div>
  `,
  styleUrl: './section-title.scss',
})
export class SectionTitleComponent {
  /**
   * Main title text
   */
  readonly title = input.required<string>();

  /**
   * Optional subtitle text
   */
  readonly subtitle = input<string>('');
}
