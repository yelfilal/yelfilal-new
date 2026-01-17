import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { CvDataService } from '../../../services/cv-data.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Personal Info', () => {
    it('should retrieve personal info from service', () => {
      expect(component.personalInfo).toBeTruthy();
    });

    it('should display first name', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.textContent).toContain('Yassine');
    });

    it('should display last name with text-primary class', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const lastName = compiled.querySelector('.text-primary');
      expect(lastName?.textContent).toContain('El FILALI');
    });

    it('should display professional title', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const title = compiled.querySelector('.subheading');
      expect(title?.textContent).toContain('FULLSTACK DEVELOPER');
    });

    it('should display description', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const description = compiled.querySelector('.lead');
      expect(description?.textContent).toContain('Passionné');
    });
  });

  describe('Social Links', () => {
    it('should display 2 social links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.social-icon');
      expect(links.length).toBe(2);
    });

    it('should have LinkedIn link', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.social-icon');
      const hrefs = Array.from(links).map(l => l.getAttribute('href'));
      expect(hrefs.some(h => h?.includes('linkedin'))).toBeTrue();
    });

    it('should have GitHub link', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.social-icon');
      const hrefs = Array.from(links).map(l => l.getAttribute('href'));
      expect(hrefs.some(h => h?.includes('github'))).toBeTrue();
    });

    it('should open links in new tab', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.social-icon');
      links.forEach(link => {
        expect(link.getAttribute('target')).toBe('_blank');
      });
    });

    it('should have security attributes', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.social-icon');
      links.forEach(link => {
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });
  });
});

