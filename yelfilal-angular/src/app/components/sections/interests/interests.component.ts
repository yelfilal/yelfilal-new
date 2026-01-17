import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestsComponent {
  interests: string;

  constructor(private cvDataService: CvDataService) {
    this.interests = this.cvDataService.getInterests();
  }
}
