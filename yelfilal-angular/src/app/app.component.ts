import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { EducationComponent } from './components/sections/education/education.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { InterestsComponent } from './components/sections/interests/interests.component';
import { AwardsComponent } from './components/sections/awards/awards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    InterestsComponent,
    AwardsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Yassine El FILALI - CV';

  // Injection du ThemeService pour initialiser le thème au démarrage
  private readonly themeService = inject(ThemeService);
}
