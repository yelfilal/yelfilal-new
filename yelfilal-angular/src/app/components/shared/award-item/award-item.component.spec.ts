import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardItemComponent } from './award-item.component';
import { Award } from '../../../models/cv-data.model';

describe('AwardItemComponent', () => {
  let fixture: ComponentFixture<AwardItemComponent>;
  let link: HTMLAnchorElement;

  const mockAward: Award = {
    name: 'Angular',
    issuer: 'Sololearn',
    url: 'https://www.sololearn.com/en/certificates/CC-WALHEEOJ'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AwardItemComponent);
    fixture.componentRef.setInput('award', mockAward);
    fixture.detectChanges();
    link = (fixture.nativeElement as HTMLElement).querySelector('a')!;
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the whole card as a single link', () => {
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('a').length).toBe(1);
    expect(link.classList).toContain('award-card');
  });

  it('should have correct URL', () => {
    expect(link.getAttribute('href')).toBe(mockAward.url);
  });

  it('should open safely in a new tab', () => {
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should display the name, the issuer and the call to action', () => {
    expect(link.querySelector('.award-card__name')?.textContent?.trim()).toBe('Angular');
    expect(link.querySelector('.award-card__issuer')?.textContent?.trim()).toBe('Sololearn');
    expect(link.querySelector('.award-card__cta')?.textContent?.trim()).toBe('Voir le certificat');
  });

  it('should display a decorative medal icon', () => {
    const tile = link.querySelector('.award-card__tile');
    expect(tile?.getAttribute('aria-hidden')).toBe('true');
    expect(tile?.querySelector('svg')).toBeTruthy();
  });
});
