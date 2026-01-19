// =============================================================================
// Contact Model
// =============================================================================
// Teaching Point: Separate interfaces for form data and API responses
// helps maintain clear data flow in your application.

/**
 * Data structure for the contact form submission
 */
export interface ContactFormData {
  /** Sender's name */
  name: string;

  /** Sender's email address */
  email: string;

  /** Subject of the message */
  subject: string;

  /** Message content */
  message: string;
}

/**
 * Response from the contact form API
 */
export interface ContactResponse {
  /** Whether the submission was successful */
  success: boolean;

  /** Message to display to the user */
  message: string;
}
