import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Award } from '../../../models/cv-data.model';

@Component({
  selector: 'app-award-item',
  standalone: true,
  imports: [],
  templateUrl: './award-item.component.html',
  styleUrl: './award-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AwardItemComponent {
  @Input({ required: true }) award!: Award;
}
