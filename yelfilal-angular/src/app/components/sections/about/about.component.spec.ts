import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be the #about section labelled by the h1', () => {
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('about');
    expect(section?.getAttribute('aria-labelledby')).toBe('about-title');
    expect(compiled.querySelector('h1')?.id).toBe('about-title');
  });

  it('should display the job title in the eyebrow', () => {
    expect(compiled.querySelector('.hero__eyebrow')?.textContent?.trim()).toBe('Java Fullstack Engineer');
  });

  it('should display the headline with the highlighted words', () => {
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toBe('Des applications qui répondent efficacement aux besoins des utilisateurs.');
    expect(h1?.querySelector('.hero__highlight')?.textContent).toBe('répondent efficacement');
  });

  it('should not display the name in the visible text', () => {
    expect(compiled.textContent).not.toContain('El FILALI');
  });

  it('should display the two intro paragraphs', () => {
    const paragraphs = compiled.querySelectorAll('.hero__intro');
    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent).toContain('Passionné');
  });

  it('should link "Voir mon parcours" to the experience section', () => {
    const cta = compiled.querySelector('.hero__cta');
    expect(cta?.textContent).toContain('Voir mon parcours');
    expect(cta?.getAttribute('href')).toBe('#experience');
  });

  describe('Contact icons', () => {
    it('should have a mailto link with an accessible label', () => {
      const mail = compiled.querySelector('a[href^="mailto:"]');
      expect(mail?.getAttribute('href')).toBe('mailto:yelfilal.ict@ik.me');
      expect(mail?.getAttribute('aria-label')).toContain('E-mail');
    });

    it('should have LinkedIn and GitHub links opened safely in a new tab', () => {
      const links = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('.hero__social[target="_blank"]'));

      expect(links.map(l => l.getAttribute('aria-label'))).toEqual(['LinkedIn', 'GitHub']);
      links.forEach(link => expect(link.getAttribute('rel')).toBe('noopener noreferrer'));
    });
  });

  describe('Photo', () => {
    it('should display the profile picture with a descriptive alt', () => {
      const img = compiled.querySelector('figure img');
      expect(img?.getAttribute('src')).toBe('./img/profile.jpg');
      expect(img?.getAttribute('alt')).toBe('Portrait de Yassine El FILALI');
    });

    it('should display the caption', () => {
      const caption = compiled.querySelector('figcaption')?.textContent;
      expect(caption).toContain('ONEM · détaché par SMALS');
      expect(caption).toContain('Depuis juillet 2022');
    });
  });
});
