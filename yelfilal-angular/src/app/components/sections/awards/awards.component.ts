import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { Award } from '../../../models/cv-data.model';
import { AwardItemComponent } from '../../shared/award-item/award-item.component';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [AwardItemComponent, ScrollAnimationDirective],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardsComponent {
  awards: Award[];

  constructor(private cvDataService: CvDataService) {
    this.awards = this.cvDataService.getAwards();
  }
}

