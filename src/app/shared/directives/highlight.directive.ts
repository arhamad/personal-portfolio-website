import { Directive, ElementRef, input, effect, inject } from '@angular/core';

// =============================================================================
// Highlight Directive
// =============================================================================
// Teaching Point: Attribute directives modify the behavior or appearance
// of existing elements. Use them for reusable DOM manipulations.

/**
 * Highlights an element with a background color on hover.
 *
 * @example
 * <p appHighlight>Hover over me!</p>
 * <p appHighlight="yellow">Custom color!</p>
 */
@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  private readonly el = inject(ElementRef);

  /**
   * The highlight color to apply on hover
   */
  readonly appHighlight = input<string>('#f0f0f0');

  constructor() {
    const element = this.el.nativeElement as HTMLElement;

    // Store original background
    const originalBg = element.style.backgroundColor;

    // Add transition for smooth effect
    element.style.transition = 'background-color 0.2s ease';

    // Set up event listeners
    element.addEventListener('mouseenter', () => {
      element.style.backgroundColor = this.appHighlight();
    });

    element.addEventListener('mouseleave', () => {
      element.style.backgroundColor = originalBg;
    });
  }
}
