import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';
import { CvDataService } from '../../../services/cv-data.service';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve interests from service', () => {
    expect(component.interests).toBeTruthy();
    expect(typeof component.interests).toBe('string');
  });

  it('should display interests text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraph = compiled.querySelector('p');

    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent?.trim()).toBe(component.interests);
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.id).toBe('interests');
  });

  it('should have resume-section class', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.classList.contains('resume-section')).toBeTrue();
  });

  it('should have section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain("Centres d'intérêt");
  });
});

