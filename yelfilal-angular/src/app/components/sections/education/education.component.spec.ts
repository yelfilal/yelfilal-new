import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 3 education entries', () => {
    expect(component.education.length).toBe(3);
  });

  it('should display in antichronological order', () => {
    expect(component.education[0].institution).toContain('Condorcet');
    expect(component.education[1].institution).toContain('HELHa');
    expect(component.education[2].institution).toContain('IJJ');
  });

  it('should render 3 education items', () => {
    expect(compiled.querySelectorAll('app-education-item').length).toBe(3);
  });

  it('should have section title "Études"', () => {
    expect(compiled.querySelector('h2')?.textContent).toBe('Études');
  });

  it('should have correct section id', () => {
    expect(compiled.querySelector('section')?.getAttribute('id')).toBe('education');
  });
});
