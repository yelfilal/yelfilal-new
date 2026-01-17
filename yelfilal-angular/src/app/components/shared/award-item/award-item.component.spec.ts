import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardItemComponent } from './award-item.component';
import { Award } from '../../../models/cv-data.model';

describe('AwardItemComponent', () => {
  let component: AwardItemComponent;
  let fixture: ComponentFixture<AwardItemComponent>;

  const mockAward: Award = {
    name: 'Angular',
    url: 'https://www.sololearn.com/en/certificates/CC-WALHEEOJ'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AwardItemComponent);
    component = fixture.componentInstance;
    component.award = mockAward;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display award name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    expect(link?.textContent?.trim()).toBe(mockAward.name);
  });

  it('should have correct URL', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    expect(link?.getAttribute('href')).toBe(mockAward.url);
  });

  it('should open in new tab', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('should have security attributes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should display trophy icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const icon = compiled.querySelector('i');
    expect(icon?.classList.contains('fa-trophy')).toBeTrue();
    expect(icon?.classList.contains('text-warning')).toBeTrue();
  });
});

