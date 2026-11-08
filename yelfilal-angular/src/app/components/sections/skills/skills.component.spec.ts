import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 6 skill categories', () => {
    expect(component.skills.length).toBe(6);
  });

  it('should render one card per category with an h3 title', () => {
    const titles = Array.from(compiled.querySelectorAll('.skill-card h3')).map(h => h.textContent?.trim());
    expect(titles.length).toBe(6);
    expect(titles[0]).toBe('Frontend');
    expect(titles[2]).toBe('Bases de données');
  });

  it('should render each skill as a chip', () => {
    const total = component.skills.reduce((sum, c) => sum + c.skills.length, 0);
    expect(compiled.querySelectorAll('.chip').length).toBe(total);
    expect(compiled.querySelector('.chip')?.textContent?.trim()).toBe('HTML');
  });

  it('should not display counters next to the category titles', () => {
    compiled.querySelectorAll('.skill-card h3').forEach(h3 => expect(h3.textContent).not.toMatch(/\d/));
  });

  it('should have section title', () => {
    expect(compiled.querySelector('h2')?.textContent).toBe('Compétences');
  });

  it('should have correct section id', () => {
    expect(compiled.querySelector('section')?.getAttribute('id')).toBe('skills');
  });
});
