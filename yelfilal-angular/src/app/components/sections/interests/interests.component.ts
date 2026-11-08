import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { Interest } from '../../../models/cv-data.model';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [ScrollAnimationDirective, IconComponent],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestsComponent {
  interests: Interest[];

  constructor(private cvDataService: CvDataService) {
    this.interests = this.cvDataService.getInterests();
  }
}
