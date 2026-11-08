import { Injectable, signal, computed, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'yelfilal-cv-theme';
  private readonly _theme = signal<Theme>(this.getInitialTheme());
  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  constructor() {
    effect(() => {
      this.applyTheme(this._theme());
    });
  }

  /**
   * Détermine le thème initial : localStorage > prefers-color-scheme > sombre.
   * Le design Espresso est pensé sombre d'abord. Le script inline de
   * `index.html` applique la même logique avant le démarrage d'Angular.
   */
  private getInitialTheme(): Theme {
    const stored = this.readStoredTheme();
    if (stored) {
      return stored;
    }

    if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
      return 'light';
    }

    return 'dark';
  }

  private readStoredTheme(): Theme | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
      return null; // stockage indisponible (navigation privée, cookies bloqués…)
    }
  }

  private storeTheme(theme: Theme): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch {
      // le choix ne sera simplement pas mémorisé
    }
  }

  private applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    this.setTheme(this._theme() === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: Theme): void {
    this._theme.set(theme);
    this.storeTheme(theme);
  }
}
