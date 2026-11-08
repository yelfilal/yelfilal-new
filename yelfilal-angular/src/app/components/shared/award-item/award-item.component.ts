import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Award } from '../../../models/cv-data.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-award-item',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './award-item.component.html',
  styleUrl: './award-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardItemComponent {
  @Input({ required: true }) award!: Award;
}
