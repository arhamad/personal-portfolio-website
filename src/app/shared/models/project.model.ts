// =============================================================================
// Project Model
// =============================================================================
// Teaching Point: TypeScript interfaces define the shape of data.
// This ensures type safety throughout the application.

/**
 * Represents a portfolio project
 */
export interface Project {
  /** Unique identifier for the project */
  id: string;

  /** Project title */
  title: string;

  /** Short description for cards */
  description: string;

  /** Full detailed description for the detail page */
  fullDescription?: string;

  /** URL to the project image */
  imageUrl: string;

  /** Technologies used in the project */
  technologies: string[];

  /** Link to live demo (optional) */
  demoUrl?: string;

  /** Link to source code (optional) */
  sourceUrl?: string;

  /** Date the project was completed */
  completedDate?: string;

  /** Whether this is a featured project */
  featured?: boolean;
}
