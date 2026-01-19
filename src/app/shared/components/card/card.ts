import { Component, input } from '@angular/core';

// =============================================================================
// Card Component
// =============================================================================
// Teaching Point: This is a "dumb" or "presentational" component.
// It receives data via inputs and displays it. No business logic here.

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <article class="card">
      @if (imageUrl()) {
        <div class="card__image">
          <img [src]="imageUrl()" [alt]="imageAlt()" />
        </div>
      }
      <div class="card__content">
        <ng-content></ng-content>
      </div>
    </article>
  `,
  styleUrl: './card.scss',
})
export class CardComponent {
  /**
   * URL for the card image (optional)
   * Teaching Point: input() is the signals-based alternative to @Input()
   */
  readonly imageUrl = input<string>('');

  /**
   * Alt text for the image
   */
  readonly imageAlt = input<string>('');
}
