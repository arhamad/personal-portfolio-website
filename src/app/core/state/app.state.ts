import { Injectable, signal, computed } from '@angular/core';

// =============================================================================
// App State - Global State Management with Signals
// =============================================================================
// Teaching Point: For simple apps, signals provide reactive state without
// the complexity of NgRx or other state management libraries. This service
// holds app-wide state that multiple components might need.

@Injectable({ providedIn: 'root' })
export class AppState {
  /**
   * Current theme: 'light' or 'dark'
   * Teaching Point: Use signal() for synchronous state like UI toggles
   */
  readonly theme = signal<'light' | 'dark'>('light');

  /**
   * Whether the mobile navigation menu is open
   */
  readonly mobileMenuOpen = signal(false);

  /**
   * Global loading state (e.g., during navigation)
   */
  readonly isLoading = signal(false);

  /**
   * Computed signal: is dark theme active?
   * Teaching Point: computed() creates derived state that updates automatically
   */
  readonly isDarkTheme = computed(() => this.theme() === 'dark');

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
  }

  /**
   * Toggle mobile menu open/closed
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  /**
   * Close the mobile menu
   */
  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  /**
   * Set loading state
   */
  setLoading(loading: boolean): void {
    this.isLoading.set(loading);
  }
}
