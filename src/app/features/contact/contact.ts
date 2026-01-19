import { Component } from '@angular/core';
import { SectionTitleComponent } from '@shared';
import { ContactFormComponent } from './components/contact-form/contact-form';

// =============================================================================
// Contact Page Component
// =============================================================================
// Teaching Point: The Contact page is simple - it displays contact info
// and delegates form handling to the ContactForm component.

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent, ContactFormComponent],
  template: `
    <div class="contact">
      <app-section-title
        title="Get In Touch"
        subtitle="I'd love to hear from you"
      />

      <div class="contact__content">
        <!-- Contact Info -->
        <div class="contact__info">
          <div class="contact__info-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:arhamad@qou.edu">arhamad&#64;qou.edu</a>
            </p>
          </div>

          <div class="contact__info-item">
            <h3>Location</h3>
            <p>Nablus, PS</p>
          </div>

          <div class="contact__info-item">
            <h3>Social</h3>
            <div class="contact__social">
              <a href="https://github.com/arhamad" target="_blank" rel="noopener">GitHub</a>
              <a href="https://www.linkedin.com/in/arhamad/" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact__form">
          <app-contact-form (formSubmitted)="onFormSubmitted()" />
        </div>
      </div>
    </div>
  `,
  styleUrl: './contact.scss',
})
export class ContactComponent {
  /**
   * Handle successful form submission
   */
  onFormSubmitted(): void {
    console.log('Contact form submitted successfully!');
  }
}
