import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationItemComponent } from './education-item.component';
import { Education } from '../../../models/cv-data.model';

describe('EducationItemComponent', () => {
  let component: EducationItemComponent;
  let fixture: ComponentFixture<EducationItemComponent>;

  const mockEducation: Education = {
    institution: 'HELHa',
    degree: 'Bachelier en Informatique de Gestion',
    location: 'Montignies-sur-Sambre',
    startDate: 'Septembre 2019',
    endDate: 'Juin 2022',
    distinction: 'Distinction'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationItemComponent);
    component = fixture.componentInstance;
    component.education = mockEducation;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display degree', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h3');
    expect(heading?.textContent?.trim()).toBe(mockEducation.degree);
  });

  it('should display institution', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subheading = compiled.querySelector('.subheading');
    expect(subheading?.textContent?.trim()).toBe(mockEducation.institution);
  });

  it('should display dates', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const dates = compiled.querySelector('.text-primary');
    expect(dates?.textContent).toContain(mockEducation.startDate);
    expect(dates?.textContent).toContain(mockEducation.endDate);
  });

  it('should display distinction if present', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Distinction');
  });

  it('should display location', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Montignies-sur-Sambre');
  });
});

