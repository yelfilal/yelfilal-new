import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should be the #contact section labelled by its title', () => {
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('contact');
    expect(section?.getAttribute('aria-labelledby')).toBe('contact-title');
  });

  it('should invite to keep in touch', () => {
    const title = compiled.querySelector('h2')?.textContent;
    expect(title).toContain('Envie d\'échanger');
    expect(title).toContain('Restons en contact.');
  });

  it('should show the e-mail address as the main mailto button', () => {
    const mail = compiled.querySelector('.contact__mail');
    expect(mail?.getAttribute('href')).toBe('mailto:yelfilal.ict@ik.me');
    expect(mail?.textContent?.trim()).toBe('yelfilal.ict@ik.me');
  });

  it('should link to LinkedIn and GitHub in a new tab', () => {
    const links = Array.from(compiled.querySelectorAll('.contact__link'));

    expect(links.map(l => l.textContent?.trim())).toEqual(['LinkedIn', 'GitHub']);
    links.forEach(link => {
      expect(link.getAttribute('target')).toBe('_blank');
      expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });
});
