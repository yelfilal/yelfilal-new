import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/sections/about/about.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { EducationComponent } from './components/sections/education/education.component';
import { AwardsComponent } from './components/sections/awards/awards.component';
import { InterestsComponent } from './components/sections/interests/interests.component';
import { ContactComponent } from './components/sections/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    AwardsComponent,
    InterestsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Yassine El FILALI - CV';

  // Injection du ThemeService pour initialiser le thème au démarrage
  private readonly themeService = inject(ThemeService);
}
