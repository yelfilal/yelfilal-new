import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CvDataService } from '../../services/cv-data.service';
import { PersonalInfo } from '../../models/cv-data.model';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  personalInfo: PersonalInfo;
  isMenuOpen = signal(false);

  constructor(private cvDataService: CvDataService) {
    this.personalInfo = this.cvDataService.getPersonalInfo();
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  navigateToSection(sectionId: string): void {
    this.isMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
