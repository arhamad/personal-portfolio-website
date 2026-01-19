// =============================================================================
// Skill Model
// =============================================================================
// Teaching Point: Group related interfaces in the same file when they're
// always used together.

/**
 * Represents a single skill
 */
export interface Skill {
  /** Skill name (e.g., "TypeScript") */
  name: string;

  /** Proficiency level (1-100) */
  level: number;

  /** Icon identifier (optional, for icon libraries) */
  icon?: string;
}

/**
 * A category of skills (e.g., "Frontend", "Backend")
 */
export interface SkillCategory {
  /** Category name */
  name: string;

  /** Skills in this category */
  skills: Skill[];
}
