import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@core/layout/navbar/navbar';
import { FooterComponent } from '@core/layout/footer/footer';

// =============================================================================
// Root Application Component
// =============================================================================
// Teaching Point: The App component serves as the shell for the entire application.
// It contains the layout structure: Navbar, main content area, and Footer.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
