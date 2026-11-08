import {
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';
import { CvDataService } from '../../services/cv-data.service';
import { ThemeService } from '../../services/theme.service';
import { PersonalInfo } from '../../models/cv-data.model';
import { IconComponent } from '../shared/icon/icon.component';
import { scrollToSection } from '../../utils/scroll-to-section';

interface NavLink {
  id: string;
  label: string;
}

/**
 * Barre de navigation en pilule, collante : nom, liens vers les sections,
 * export PDF et bascule de thème. Sous 1200px, les liens passent dans un menu.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
    '(document:keydown.escape)': 'onEscape()',
    '(focusout)': 'onFocusOut($event)'
  }
})
export class HeaderComponent {
  protected readonly themeService = inject(ThemeService);
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly injector = inject(Injector);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly navLinks = viewChildren<ElementRef<HTMLAnchorElement>>('navLink');

  readonly personalInfo: PersonalInfo = inject(CvDataService).getPersonalInfo();
  readonly initials = this.personalInfo.firstName.charAt(0) + this.personalInfo.lastName.charAt(0);

  readonly links: readonly NavLink[] = [
    { id: 'experience', label: 'Expérience' },
    { id: 'skills', label: 'Compétences' },
    { id: 'education', label: 'Formation' },
    { id: 'awards', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  readonly isMenuOpen = signal(false);

  /**
   * Ouvre ou ferme le menu replié. À l'ouverture, le focus va au premier lien :
   * le bouton est placé après les liens dans le DOM (ordre visuel du desktop),
   * Tab ne mènerait donc pas au panneau.
   */
  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
    if (this.isMenuOpen()) {
      afterNextRender(() => this.navLinks()[0]?.nativeElement.focus(), { injector: this.injector });
    }
  }

  /** Ferme le menu quand le focus quitte la navigation (Tab au-delà du dernier contrôle). */
  onFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget as Node | null;
    if (this.isMenuOpen() && next && !this.host.nativeElement.contains(next)) {
      this.isMenuOpen.set(false);
    }
  }

  navigateToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.isMenuOpen.set(false);
    scrollToSection(sectionId);
  }

  exportPdf(): void {
    this.isMenuOpen.set(false);
    window.print();
  }

  onDocumentClick(event: MouseEvent): void {
    if (this.isMenuOpen() && !this.host.nativeElement.contains(event.target as Node)) {
      this.isMenuOpen.set(false);
    }
  }

  onEscape(): void {
    if (this.isMenuOpen()) {
      this.isMenuOpen.set(false);
      this.menuButton()?.nativeElement.focus();
    }
  }
}
