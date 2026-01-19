import { Component } from '@angular/core';
import { SectionTitleComponent } from '@shared';
import { SkillsListComponent } from './components/skills-list/skills-list';
import { SkillCategory } from '@shared';

// =============================================================================
// About Page Component
// =============================================================================
// Teaching Point: Page components can define their own data when it doesn't
// need to come from a service. Static content like skills can be defined here.

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, SkillsListComponent],
  template: `
    <div class="about">
      <!-- Introduction Section -->
      <section class="about__intro">
        <app-section-title
          title="About Me"
          subtitle="Get to know me better"
        />

        <div class="about__content">
          <div class="about__avatar">
            <span class="about__avatar-text">AH</span>
          </div>
          <div class="about__text">
            <p>
              Hi! I'm <strong>Ahmad Hamad</strong>, a passionate Full Stack Developer
              with over 5 years of experience building web applications. I specialize
              in creating clean, efficient, and user-friendly solutions.
            </p>
            <p>
              My journey in software development started with a curiosity about how
              websites work. That curiosity has evolved into a career where I get to
              solve interesting problems and create impactful digital experiences every day.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or enjoying a good cup of coffee while reading
              tech blogs.
            </p>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="about__skills">
        <app-section-title
          title="My Skills"
          subtitle="Technologies I work with"
        />

        <app-skills-list [categories]="skillCategories" />
      </section>

      <!-- Experience Section -->
      <section class="about__experience">
        <app-section-title
          title="Experience"
          subtitle="My professional journey"
        />

        <div class="timeline">
          @for (exp of experiences; track exp.company) {
            <div class="timeline__item">
              <div class="timeline__marker"></div>
              <div class="timeline__content">
                <h3 class="timeline__title">{{ exp.role }}</h3>
                <p class="timeline__company">{{ exp.company }}</p>
                <p class="timeline__period">{{ exp.period }}</p>
                <p class="timeline__description">{{ exp.description }}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  `,
  styleUrl: './about.scss',
})
export class AboutComponent {
  /**
   * Skill categories with proficiency levels
   */
  protected readonly skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'RxJS', level: 85 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
      ],
    },
  ];

  /**
   * Work experience history
   */
  protected readonly experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications using Angular and TypeScript.',
    },
    {
      role: 'Full Stack Developer',
      company: 'StartUp Labs',
      period: '2020 - 2022',
      description: 'Built and maintained multiple web applications using Angular, Node.js, and PostgreSQL.',
    },
    {
      role: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Developed responsive websites and learned modern frontend frameworks.',
    },
  ];
}
