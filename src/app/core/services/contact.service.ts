import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ContactFormData, ContactResponse } from '@shared';

// =============================================================================
// Contact Service
// =============================================================================
// Teaching Point: Even simple operations benefit from a service layer.
// This makes testing easier and keeps components lean.

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly apiService = inject(ApiService);

  /**
   * Submit the contact form
   *
   * @param formData - The contact form data
   * @returns Observable with the submission result
   */
  submitContactForm(formData: ContactFormData): Observable<ContactResponse> {
    // Mock success response
    const mockResponse: ContactResponse = {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    };

    return this.apiService.post<ContactFormData, ContactResponse>(
      '/contact',
      formData,
      mockResponse
    );
  }
}
