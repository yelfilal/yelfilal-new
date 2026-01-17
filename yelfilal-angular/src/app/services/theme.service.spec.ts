import { TestBed, fakeAsync, tick } from '@angular/core/testing';
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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a theme signal', () => {
    expect(service.theme).toBeDefined();
    expect(['light', 'dark']).toContain(service.theme());
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

  it('should compute isDark correctly for light theme', () => {
    service.setTheme('light');
    expect(service.isDark()).toBe(false);
  });

  it('should compute isDark correctly for dark theme', () => {
    service.setTheme('dark');
    expect(service.isDark()).toBe(true);
  });

  it('should have isDark as computed signal', () => {
    expect(service.isDark).toBeDefined();
    expect(typeof service.isDark()).toBe('boolean');
  });
});
