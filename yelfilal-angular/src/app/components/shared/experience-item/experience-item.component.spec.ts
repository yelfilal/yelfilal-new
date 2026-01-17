import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceItemComponent } from './experience-item.component';
import { Experience } from '../../../models/cv-data.model';

describe('ExperienceItemComponent', () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  const mockExperience: Experience = {
    position: 'Fullstack Developer',
    company: 'ONEM',
    location: 'Bruxelles',
    type: 'Temps plein',
    startDate: 'Juillet 2022',
    endDate: 'Présent',
    responsibilities: ['Resp 1', 'Resp 2']
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceItemComponent);
    component = fixture.componentInstance;
    component.experience = mockExperience;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display position', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h3');
    expect(heading?.textContent?.trim()).toBe(mockExperience.position);
  });

  it('should display company', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subheading = compiled.querySelector('.subheading');
    expect(subheading?.textContent?.trim()).toBe(mockExperience.company);
  });

  it('should display dates', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dates = compiled.querySelector('.text-primary');
    expect(dates?.textContent).toContain(mockExperience.startDate);
    expect(dates?.textContent).toContain(mockExperience.endDate);
  });

  it('should display responsibilities', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('ul li');
    expect(items.length).toBe(2);
  });

  it('should display location and type', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Bruxelles');
    expect(compiled.textContent).toContain('Temps plein');
  });
});

