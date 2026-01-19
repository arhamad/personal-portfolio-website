import { Component, input } from '@angular/core';
import { SkillCategory } from '@shared';

// =============================================================================
// Skills List Component
// =============================================================================
// Teaching Point: This component receives data via inputs and displays it.
// The parent component (About page) provides the skill categories.

@Component({
  selector: 'app-skills-list',
  standalone: true,
  template: `
    <div class="skills-list">
      @for (category of categories(); track category.name) {
        <div class="skills-list__category">
          <h3 class="skills-list__category-name">{{ category.name }}</h3>
          <div class="skills-list__skills">
            @for (skill of category.skills; track skill.name) {
              <div class="skill">
                <div class="skill__header">
                  <span class="skill__name">{{ skill.name }}</span>
                  <span class="skill__level">{{ skill.level }}%</span>
                </div>
                <div class="skill__bar">
                  <div
                    class="skill__progress"
                    [style.width.%]="skill.level"
                  ></div>
                </div>
              </div>
            }
          </div>
        </div>
      }
    </div>
  `,
  styleUrl: './skills-list.scss',
})
export class SkillsListComponent {
  /**
   * Skill categories to display
   */
  readonly categories = input.required<SkillCategory[]>();
}
