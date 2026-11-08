import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardsComponent } from './awards.component';

describe('AwardsComponent', () => {
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 9 awards', () => {
    expect(component.awards.length).toBe(9);
  });

  it('should render 9 award items in a grid', () => {
    expect(compiled.querySelectorAll('.awards-grid > app-award-item').length).toBe(9);
  });

  it('should not number the certifications', () => {
    compiled.querySelectorAll('.award-card__name').forEach(name => expect(name.textContent).not.toMatch(/^\s*\d/));
  });

  it('should have section title', () => {
    expect(compiled.querySelector('h2')?.textContent).toBe('Prix & Certifications');
  });

  it('should have correct section id', () => {
    expect(compiled.querySelector('section')?.getAttribute('id')).toBe('awards');
  });
});
