import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Education } from '../../../models/cv-data.model';

@Component({
  selector: 'app-education-item',
  standalone: true,
  imports: [],
  templateUrl: './education-item.component.html',
  styleUrl: './education-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationItemComponent {
  @Input({ required: true }) education!: Education;
}
