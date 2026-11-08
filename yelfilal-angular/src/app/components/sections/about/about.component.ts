import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { PersonalInfo } from '../../../models/cv-data.model';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { IconComponent } from '../../shared/icon/icon.component';
import { scrollToSection } from '../../../utils/scroll-to-section';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  personalInfo: PersonalInfo;
  fullName: string;

  constructor(private cvDataService: CvDataService) {
    this.personalInfo = this.cvDataService.getPersonalInfo();
    this.fullName = `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
  }

  goToExperience(event: Event): void {
    event.preventDefault();
    scrollToSection('experience');
  }
}
