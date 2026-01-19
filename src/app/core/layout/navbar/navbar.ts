import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppState } from '@core';

// =============================================================================
// Navbar Component
// =============================================================================
// Teaching Point: Layout components like Navbar belong in core/ because
// they appear once in the app and are not reusable across features.

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  /**
   * Inject app state for mobile menu toggle
   * Teaching Point: Use inject() instead of constructor injection for cleaner code
   */
  protected readonly appState = inject(AppState);

  /**
   * Navigation links configuration
   * Teaching Point: Centralizing navigation data makes it easy to modify
   */
  protected readonly navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/projects', label: 'Projects', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];

  /**
   * Toggle mobile menu and close when a link is clicked
   */
  onNavLinkClick(): void {
    this.appState.closeMobileMenu();
  }
}
