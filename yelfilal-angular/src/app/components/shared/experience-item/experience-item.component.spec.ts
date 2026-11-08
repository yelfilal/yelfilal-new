import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceItemComponent } from './experience-item.component';
import { Experience } from '../../../models/cv-data.model';

describe('ExperienceItemComponent', () => {
  let fixture: ComponentFixture<ExperienceItemComponent>;
  let compiled: HTMLElement;

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
    fixture.componentRef.setInput('experience', mockExperience);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display the dates separated by an em dash', () => {
    expect(compiled.querySelector('.exp-card__dates')?.textContent?.trim()).toBe('Juillet 2022 — Présent');
  });

  it('should display position as h3', () => {
    expect(compiled.querySelector('h3')?.textContent?.trim()).toBe('Fullstack Developer');
  });

  it('should display the contract type', () => {
    expect(compiled.querySelector('.exp-card__type')?.textContent?.trim()).toBe('Temps plein');
  });

  it('should display company and location', () => {
    expect(compiled.querySelector('.exp-card__company')?.textContent?.trim()).toBe('ONEM · Bruxelles');
  });

  it('should display responsibilities with decorative diamonds', () => {
    const items = compiled.querySelectorAll('ul li');
    expect(items.length).toBe(2);
    items.forEach(item => expect(item.querySelector('.diamond')?.getAttribute('aria-hidden')).toBe('true'));
  });

  it('should hide the timeline rail from assistive technologies', () => {
    expect(compiled.querySelector('.rail')?.getAttribute('aria-hidden')).toBe('true');
  });
});
