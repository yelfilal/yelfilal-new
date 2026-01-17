import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Experience } from '../../../models/cv-data.model';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceItemComponent {
  @Input({ required: true }) experience!: Experience;
}
