import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CvDataService } from '../../services/cv-data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Personal Info', () => {
    it('should retrieve personal info from service', () => {
      expect(component.personalInfo).toBeTruthy();
      expect(component.personalInfo.firstName).toBe('Yassine');
      expect(component.personalInfo.lastName).toBe('El FILALI');
    });

    it('should display profile image', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const img = compiled.querySelector('img');
      expect(img).toBeTruthy();
      expect(img?.src).toContain('profile.jpg');
    });

    it('should display full name on mobile', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const mobileName = compiled.querySelector('.d-block.d-lg-none');
      expect(mobileName?.textContent).toContain('Yassine');
      expect(mobileName?.textContent).toContain('El FILALI');
    });
  });

  describe('Navigation Links', () => {
    it('should have 6 navigation links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const navLinks = compiled.querySelectorAll('.nav-link');
      expect(navLinks.length).toBe(6);
    });

    it('should have correct section links', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('.nav-link');
      const hrefs = Array.from(links).map(l => l.getAttribute('href'));

      expect(hrefs).toContain('#about');
      expect(hrefs).toContain('#experience');
      expect(hrefs).toContain('#education');
      expect(hrefs).toContain('#skills');
      expect(hrefs).toContain('#interests');
      expect(hrefs).toContain('#awards');
    });
  });

  describe('navigateToSection', () => {
    it('should scroll to section if element exists', () => {
      const mockElement = document.createElement('div');
      mockElement.id = 'test-section';
      document.body.appendChild(mockElement);

      spyOn(mockElement, 'scrollIntoView');
      component.navigateToSection('test-section');

      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
      document.body.removeChild(mockElement);
    });
  });
});

