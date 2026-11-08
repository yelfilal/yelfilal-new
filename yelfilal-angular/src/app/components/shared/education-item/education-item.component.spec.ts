import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationItemComponent } from './education-item.component';
import { Education } from '../../../models/cv-data.model';

describe('EducationItemComponent', () => {
  let fixture: ComponentFixture<EducationItemComponent>;
  let compiled: HTMLElement;

  const mockEducation: Education = {
    institution: 'HELHa',
    degree: 'Bachelier en Informatique de Gestion',
    location: 'Montignies-sur-Sambre',
    startDate: 'Septembre 2019',
    endDate: 'Juin 2022',
    distinction: 'Distinction'
  };

  function render(education: Education): void {
    fixture = TestBed.createComponent(EducationItemComponent);
    fixture.componentRef.setInput('education', education);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationItemComponent]
    }).compileComponents();

    render(mockEducation);
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the dates separated by an em dash', () => {
    expect(compiled.querySelector('.edu-card__dates')?.textContent?.trim()).toBe('Septembre 2019 — Juin 2022');
  });

  it('should display degree as h3', () => {
    expect(compiled.querySelector('h3')?.textContent?.trim()).toBe(mockEducation.degree);
  });

  it('should display institution and location', () => {
    expect(compiled.querySelector('.edu-card__institution')?.textContent?.trim()).toBe('HELHa');
    expect(compiled.querySelector('.edu-card__location')?.textContent?.trim()).toBe('Montignies-sur-Sambre');
  });

  it('should display the distinction badge if present', () => {
    expect(compiled.querySelector('.badge')?.textContent?.trim()).toBe('Distinction');
  });

  it('should not display a badge without distinction', () => {
    render({ ...mockEducation, distinction: undefined });
    expect(compiled.querySelector('.badge')).toBeNull();
  });
});
