import { Component } from '@angular/core';

// =============================================================================
// Footer Component
// =============================================================================
// Teaching Point: Footer is a simple presentational component.
// It has no state or logic, just displays content.

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  /**
   * Get the current year for copyright
   */
  protected readonly currentYear = new Date().getFullYear();

  /**
   * Social links configuration
   */
  protected readonly socialLinks = [
    { name: 'GitHub', url: 'https://github.com/arhamad', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arhamad', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ];
}
