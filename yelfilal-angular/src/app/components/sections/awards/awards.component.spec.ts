import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardsComponent } from './awards.component';
import { CvDataService } from '../../../services/cv-data.service';

describe('AwardsComponent', () => {
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsComponent],
      providers: [CvDataService]
    }).compileComponents();

    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 9 awards', () => {
    expect(component.awards).toBeTruthy();
    expect(component.awards.length).toBe(9);
  });

  it('should render 9 award items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('app-award-item');
    expect(items.length).toBe(9);
  });

  it('should include Angular certification', () => {
    const angular = component.awards.find(a => a.name === 'Angular');
    expect(angular).toBeTruthy();
    expect(angular?.url).toContain('sololearn.com');
  });

  it('should have section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toContain('Prix');
    expect(title?.textContent).toContain('Certifications');
  });

  it('should have correct section id', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.getAttribute('id')).toBe('awards');
  });

  it('should have fa-ul list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const list = compiled.querySelector('ul');
    expect(list?.classList.contains('fa-ul')).toBeTrue();
  });
});

