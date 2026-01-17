import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { CvDataService } from '../../../services/cv-data.service';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 2 education entries', () => {
    expect(component.education).toBeTruthy();
    expect(component.education.length).toBe(2);
  });

  it('should display in antichronological order', () => {
    expect(component.education[0].institution).toContain('HELHa');
    expect(component.education[0].distinction).toBe('Distinction');
  });

  it('should render 2 education items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('app-education-item');
    expect(items.length).toBe(2);
  });

  it('should have section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain('Formation');
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.getAttribute('id')).toBe('education');
  });
});

