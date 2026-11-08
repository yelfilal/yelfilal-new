import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CvDataService } from '../../services/cv-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly fullName: string;
  readonly title: string;

  constructor(cvDataService: CvDataService) {
    const personal = cvDataService.getPersonalInfo();
    this.fullName = `${personal.firstName} ${personal.lastName}`;
    this.title = personal.title;
  }
}
