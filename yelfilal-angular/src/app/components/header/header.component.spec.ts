import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ThemeService } from '../../services/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  afterEach(() => localStorage.clear());

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a labelled navigation landmark inside a header', () => {
    const nav = compiled.querySelector('header nav');
    expect(nav?.getAttribute('aria-label')).toBe('Navigation principale');
  });

  describe('Brand', () => {
    it('should display the monogram and the full name', () => {
      expect(compiled.querySelector('.brand__mark')?.textContent?.trim()).toBe('YE');
      expect(compiled.querySelector('.brand__name')?.textContent?.trim()).toBe('Yassine El FILALI');
    });

    it('should link to the about section', () => {
      expect(compiled.querySelector('.brand')?.getAttribute('href')).toBe('#about');
    });
  });

  describe('Navigation links', () => {
    it('should have the 5 section links in order', () => {
      const links = Array.from(compiled.querySelectorAll('.nav-link'));

      expect(links.map(l => l.textContent?.trim())).toEqual([
        'Expérience',
        'Compétences',
        'Formation',
        'Certifications',
        'Contact'
      ]);
      expect(links.map(l => l.getAttribute('href'))).toEqual([
        '#experience',
        '#skills',
        '#education',
        '#awards',
        '#contact'
      ]);
    });

    it('should scroll to the section and close the menu', () => {
      const section = document.createElement('div');
      section.id = 'test-section';
      document.body.appendChild(section);
      spyOn(section, 'scrollIntoView');
      component.isMenuOpen.set(true);

      component.navigateToSection('test-section');

      expect(section.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      expect(component.isMenuOpen()).toBeFalse();
      section.remove();
    });

    it('should prevent the default anchor navigation', () => {
      const event = new MouseEvent('click', { cancelable: true });
      component.navigateToSection('missing-section', event);
      expect(event.defaultPrevented).toBeTrue();
    });
  });

  describe('Mobile menu', () => {
    it('should expose its state with aria-expanded and aria-controls', () => {
      const button = compiled.querySelector<HTMLButtonElement>('.menu-btn')!;

      expect(button.getAttribute('aria-label')).toBe('Menu');
      expect(button.getAttribute('aria-controls')).toBe('nav-menu');
      expect(button.getAttribute('aria-expanded')).toBe('false');

      button.click();
      fixture.detectChanges();

      expect(button.getAttribute('aria-expanded')).toBe('true');
      expect(compiled.querySelector('#nav-menu')?.classList).toContain('is-open');
    });

    it('should close on Escape', () => {
      component.toggleMenu();
      component.onEscape();
      expect(component.isMenuOpen()).toBeFalse();
    });

    it('should close on a click outside the navigation', () => {
      component.toggleMenu();
      component.onDocumentClick(new MouseEvent('click'));
      // l'événement n'a pas de cible : il ne vient pas de la navigation
      expect(component.isMenuOpen()).toBeFalse();
    });
  });

  describe('PDF export', () => {
    it('should call window.print from a real button', () => {
      const printSpy = spyOn(window, 'print');
      const button = compiled.querySelector<HTMLButtonElement>('button.nav-pdf')!;

      expect(button.textContent).toContain('CV en PDF');
      button.click();

      expect(printSpy).toHaveBeenCalled();
    });
  });

  describe('Theme toggle', () => {
    it('should toggle the theme and update its label and icon', () => {
      const theme = TestBed.inject(ThemeService);
      theme.setTheme('dark');
      fixture.detectChanges();

      const button = compiled.querySelector<HTMLButtonElement>('.theme-btn')!;
      expect(button.getAttribute('aria-label')).toBe('Passer en mode clair');
      expect(button.querySelector('circle')).toBeTruthy(); // soleil

      button.click();
      fixture.detectChanges();

      expect(theme.theme()).toBe('light');
      expect(button.getAttribute('aria-label')).toBe('Passer en mode sombre');
      expect(button.querySelector('circle')).toBeNull(); // lune
    });
  });
});
