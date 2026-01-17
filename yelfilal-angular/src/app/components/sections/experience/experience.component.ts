import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { Experience } from '../../../models/cv-data.model';
import { ExperienceItemComponent } from '../../shared/experience-item/experience-item.component';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experiences: Experience[];

  constructor(private cvDataService: CvDataService) {
    this.experiences = this.cvDataService.getExperiences();
  }
}

