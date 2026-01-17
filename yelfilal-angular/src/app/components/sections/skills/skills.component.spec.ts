import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';
import { CvDataService } from '../../../services/cv-data.service';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 9 skill categories', () => {
    expect(component.skills.length).toBe(9);
  });

  it('should display category names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const categories = compiled.querySelectorAll('.subheading');
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should display skills in categories', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skillItems = compiled.querySelectorAll('.list-inline-item');
    expect(skillItems.length).toBeGreaterThan(0);
  });

  it('should include Frontend category', () => {
    const frontend = component.skills.find(s => s.category === 'Frontend');
    expect(frontend).toBeTruthy();
    expect(frontend?.skills).toContain('Angular 2+');
  });

  it('should have section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain('Compétences');
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.getAttribute('id')).toBe('skills');
  });
});

