import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';
import { CvDataService } from '../../../services/cv-data.service';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 3 experiences', () => {
    expect(component.experiences).toBeTruthy();
    expect(component.experiences.length).toBe(3);
  });

  it('should display experiences in antichronological order', () => {
    expect(component.experiences[0].company).toContain('ONEM');
    expect(component.experiences[0].endDate).toBe('Présent');
  });

  it('should render 3 experience items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('app-experience-item');
    expect(items.length).toBe(3);
  });

  it('should have section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain('Expérience');
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.getAttribute('id')).toBe('experience');
  });
});

