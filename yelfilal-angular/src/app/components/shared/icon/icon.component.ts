import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/** Icônes disponibles (tracés de l'annexe A du brief Espresso, style Lucide). */
export type IconName =
  | 'download'
  | 'sun'
  | 'moon'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'mail'
  | 'graduation-cap'
  | 'medal'
  | 'book'
  | 'ball'
  | 'chip'
  | 'menu'
  | 'star'
  | 'linkedin'
  | 'github';

/** Icônes pleines ; toutes les autres sont au trait. */
const FILLED_ICONS: ReadonlySet<IconName> = new Set<IconName>(['star', 'linkedin', 'github']);

/** Icônes au trait de 2 ; les autres traits font 1.8. */
const BOLD_ICONS: ReadonlySet<IconName> = new Set<IconName>([
  'download',
  'arrow-right',
  'arrow-up-right',
  'mail',
  'menu'
]);

/**
 * Icône SVG en ligne, décorative (`aria-hidden`) : le lien ou le bouton qui
 * l'affiche seule doit porter son propre `aria-label`.
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }

    svg {
      display: block;
    }
  `,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      [attr.viewBox]="viewBox"
      [attr.fill]="filled ? 'currentColor' : 'none'"
      [attr.stroke]="filled ? null : 'currentColor'"
      [attr.stroke-width]="filled ? null : strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      @switch (name) {
        @case ('download') {
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        }
        @case ('sun') {
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        }
        @case ('moon') {
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ('arrow-up-right') {
          <path d="M7 17L17 7M8 7h9v9" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        }
        @case ('graduation-cap') {
          <path d="M22 10L12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
        }
        @case ('medal') {
          <circle cx="12" cy="9" r="6" />
          <path d="M8.5 14L7 22l5-3 5 3-1.5-8" />
        }
        @case ('book') {
          <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z" />
          <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z" />
        }
        @case ('ball') {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7l4.5 3.3-1.7 5.2H9.2L7.5 10.3z" />
          <path d="M12 2v5M21.5 9.5l-5 .8M18 20l-3.2-4.5M6 20l3.2-4.5M2.5 9.5l5 .8" />
        }
        @case ('chip') {
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        }
        @case ('menu') {
          <path d="M4 6h16M4 12h16M4 18h16" />
        }
        @case ('star') {
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        }
        @case ('linkedin') {
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.1c0-1.7-.03-3.88-2.36-3.88-2.36 0-2.72 1.84-2.72 3.75V23h-4V8z" />
        }
        @case ('github') {
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
        }
      }
    </svg>
  `
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;

  /** Côté de l'icône en pixels. */
  @Input() size = 24;

  protected get filled(): boolean {
    return FILLED_ICONS.has(this.name);
  }

  protected get strokeWidth(): number {
    return BOLD_ICONS.has(this.name) ? 2 : 1.8;
  }

  protected get viewBox(): string {
    return this.name === 'github' ? '0 0 16 16' : '0 0 24 24';
  }
}
