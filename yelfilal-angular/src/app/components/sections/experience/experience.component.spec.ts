import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 3 experiences', () => {
    expect(component.experiences.length).toBe(3);
  });

  it('should render 3 experience items in a list', () => {
    expect(compiled.querySelectorAll('ol.timeline > li > app-experience-item').length).toBe(3);
  });

  it('should have section title', () => {
    expect(compiled.querySelector('h2')?.textContent).toBe('Expérience professionnelle');
  });

  it('should have correct section id and label', () => {
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('experience');
    expect(section?.getAttribute('aria-labelledby')).toBe('experience-title');
  });
});
