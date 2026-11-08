import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../../services/cv-data.service';
import { PersonalInfo } from '../../../models/cv-data.model';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { IconComponent } from '../../shared/icon/icon.component';

/**
 * Bloc contact sable. Invitation à garder le contact, pas une offre de service.
 * Le pied de page est rendu par FooterComponent, hors du <main>.
 */
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollAnimationDirective, IconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  personalInfo: PersonalInfo;

  constructor(private cvDataService: CvDataService) {
    this.personalInfo = this.cvDataService.getPersonalInfo();
  }
}
