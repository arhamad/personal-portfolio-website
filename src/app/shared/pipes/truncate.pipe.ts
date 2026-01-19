import { Pipe, PipeTransform } from '@angular/core';

// =============================================================================
// Truncate Pipe
// =============================================================================
// Teaching Point: Pipes transform data for display without modifying the original.
// They're perfect for formatting text, dates, currencies, etc.

/**
 * Truncates a string to a specified length and adds an ellipsis.
 *
 * @example
 * {{ longText | truncate:100 }}
 * {{ longText | truncate:50:'...' }}
 */
@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  /**
   * @param value - The string to truncate
   * @param limit - Maximum length before truncation (default: 100)
   * @param trail - String to append when truncated (default: '...')
   */
  transform(value: string | null | undefined, limit = 100, trail = '...'): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    return value.substring(0, limit).trim() + trail;
  }
}
