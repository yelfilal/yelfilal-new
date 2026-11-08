import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  /** Recrée le service après avoir simulé la préférence système. */
  function createWithSystemPreference(prefersLight: boolean): ThemeService {
    TestBed.resetTestingModule();
    spyOn(window, 'matchMedia').and.callFake(
      (query: string) => ({ matches: query.includes('light') && prefersLight }) as MediaQueryList
    );
    TestBed.configureTestingModule({});
    return TestBed.inject(ThemeService);
  }

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a theme signal', () => {
    expect(service.theme).toBeDefined();
    expect(['light', 'dark']).toContain(service.theme());
  });

  describe('initial theme', () => {
    it('should fall back to dark when nothing is stored and the system is not light', () => {
      expect(createWithSystemPreference(false).theme()).toBe('dark');
    });

    it('should follow prefers-color-scheme: light', () => {
      expect(createWithSystemPreference(true).theme()).toBe('light');
    });

    it('should prefer the stored choice over the system preference', () => {
      localStorage.setItem('yelfilal-cv-theme', 'dark');
      expect(createWithSystemPreference(true).theme()).toBe('dark');
    });
  });

  it('should toggle theme from light to dark', () => {
    service.setTheme('light');
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    service.setTheme('dark');
    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });

  it('should persist theme to localStorage', () => {
    service.setTheme('dark');
    expect(localStorage.getItem('yelfilal-cv-theme')).toBe('dark');
    service.setTheme('light');
    expect(localStorage.getItem('yelfilal-cv-theme')).toBe('light');
  });

  it('should apply the theme to <html>', () => {
    service.setTheme('dark');
    TestBed.flushEffects();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should compute isDark correctly for light theme', () => {
    service.setTheme('light');
    expect(service.isDark()).toBe(false);
  });

  it('should compute isDark correctly for dark theme', () => {
    service.setTheme('dark');
    expect(service.isDark()).toBe(true);
  });
});
