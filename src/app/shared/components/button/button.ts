import { Component, input, output } from '@angular/core';

// =============================================================================
// Button Component
// =============================================================================
// Teaching Point: A reusable button component ensures consistent styling
// and behavior across the application.

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [type]="type()"
      [class]="'btn btn--' + variant()"
      [disabled]="disabled()"
      (click)="handleClick()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './button.scss',
})
export class ButtonComponent {
  /**
   * Button type attribute
   */
  readonly type = input<'button' | 'submit' | 'reset'>('button');

  /**
   * Visual variant of the button
   */
  readonly variant = input<'primary' | 'secondary' | 'outline'>('primary');

  /**
   * Whether the button is disabled
   */
  readonly disabled = input(false);

  /**
   * Click event emitter
   * Teaching Point: output() is the signals-based alternative to @Output()
   */
  readonly clicked = output<void>();

  handleClick(): void {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
