import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { SkillCategory } from '../../../models/cv-data.model';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skills: SkillCategory[];

  constructor(private cvDataService: CvDataService) {
    this.skills = this.cvDataService.getSkills();
  }
}
