import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { PersonalInfo } from '../../../models/cv-data.model';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  personalInfo: PersonalInfo;

  constructor(private cvDataService: CvDataService) {
    this.personalInfo = this.cvDataService.getPersonalInfo();
  }
}
