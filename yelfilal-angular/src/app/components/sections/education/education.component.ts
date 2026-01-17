import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { Education } from '../../../models/cv-data.model';
import { EducationItemComponent } from '../../shared/education-item/education-item.component';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EducationItemComponent, ScrollAnimationDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  education: Education[];

  constructor(private cvDataService: CvDataService) {
    this.education = this.cvDataService.getEducation();
  }
}

