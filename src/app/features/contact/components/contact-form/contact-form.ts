import { Component, inject, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/components/button/button';
import { ContactService } from '../../../../core/services/contact.service';
import { ContactFormData } from '../../../../shared/models';

// =============================================================================
// Contact Form Component
// =============================================================================
// Teaching Point: This component demonstrates:
// 1. Template-driven forms with FormsModule
// 2. Using signals for form state (loading, success)
// 3. Output events to communicate with parent

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  template: `
    <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
      <!-- Success Message -->
      @if (successMessage()) {
        <div class="contact-form__success">
          <p>{{ successMessage() }}</p>
        </div>
      }

      <!-- Error Message -->
      @if (errorMessage()) {
        <div class="contact-form__error">
          <p>{{ errorMessage() }}</p>
        </div>
      }

      <!-- Name Field -->
      <div class="contact-form__field">
        <label for="name" class="contact-form__label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="contact-form__input"
          [(ngModel)]="formData.name"
          required
          minlength="2"
          #nameInput="ngModel"
          [class.contact-form__input--error]="nameInput.invalid && nameInput.touched"
        />
        @if (nameInput.invalid && nameInput.touched) {
          <span class="contact-form__error-text">Please enter your name</span>
        }
      </div>

      <!-- Email Field -->
      <div class="contact-form__field">
        <label for="email" class="contact-form__label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="contact-form__input"
          [(ngModel)]="formData.email"
          required
          email
          #emailInput="ngModel"
          [class.contact-form__input--error]="emailInput.invalid && emailInput.touched"
        />
        @if (emailInput.invalid && emailInput.touched) {
          <span class="contact-form__error-text">Please enter a valid email</span>
        }
      </div>

      <!-- Subject Field -->
      <div class="contact-form__field">
        <label for="subject" class="contact-form__label">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          class="contact-form__input"
          [(ngModel)]="formData.subject"
          required
          minlength="5"
          #subjectInput="ngModel"
          [class.contact-form__input--error]="subjectInput.invalid && subjectInput.touched"
        />
        @if (subjectInput.invalid && subjectInput.touched) {
          <span class="contact-form__error-text">Please enter a subject</span>
        }
      </div>

      <!-- Message Field -->
      <div class="contact-form__field">
        <label for="message" class="contact-form__label">Message</label>
        <textarea
          id="message"
          name="message"
          class="contact-form__input contact-form__textarea"
          [(ngModel)]="formData.message"
          required
          minlength="10"
          rows="5"
          #messageInput="ngModel"
          [class.contact-form__input--error]="messageInput.invalid && messageInput.touched"
        ></textarea>
        @if (messageInput.invalid && messageInput.touched) {
          <span class="contact-form__error-text">Please enter a message (at least 10 characters)</span>
        }
      </div>

      <!-- Submit Button -->
      <div class="contact-form__submit">
        <app-button
          type="submit"
          variant="primary"
          [disabled]="contactForm.invalid || isSubmitting()"
        >
          {{ isSubmitting() ? 'Sending...' : 'Send Message' }}
        </app-button>
      </div>
    </form>
  `,
  styleUrl: './contact-form.scss',
})
export class ContactFormComponent {
  private readonly contactService = inject(ContactService);

  /**
   * Form data model
   */
  protected formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  /**
   * Form state signals
   * Teaching Point: Signals are perfect for simple UI state like this
   */
  protected readonly isSubmitting = signal(false);
  protected readonly successMessage = signal('');
  protected readonly errorMessage = signal('');

  /**
   * Event emitted when form is successfully submitted
   */
  readonly formSubmitted = output<void>();

  /**
   * Handle form submission
   */
  onSubmit(): void {
    // Clear previous messages
    this.successMessage.set('');
    this.errorMessage.set('');
    this.isSubmitting.set(true);

    this.contactService.submitContactForm(this.formData).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        if (response.success) {
          this.successMessage.set(response.message);
          this.resetForm();
          this.formSubmitted.emit();
        } else {
          this.errorMessage.set(response.message);
        }
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set('An error occurred. Please try again later.');
      },
    });
  }

  /**
   * Reset the form after successful submission
   */
  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }
}
