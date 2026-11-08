import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';

describe('InterestsComponent', () => {
  let component: InterestsComponent;
  let fixture: ComponentFixture<InterestsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InterestsComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve 3 interests from service', () => {
    expect(component.interests.length).toBe(3);
  });

  it('should render one card per interest with its title and text', () => {
    const cards = compiled.querySelectorAll('.interest-card');

    expect(cards.length).toBe(3);
    cards.forEach((card, i) => {
      expect(card.querySelector('h3')?.textContent?.trim()).toBe(component.interests[i].title);
      expect(card.querySelector('p')?.textContent?.trim()).toBe(component.interests[i].text);
      expect(card.querySelector('.interest-card__tile svg')).toBeTruthy();
    });
  });

  it('should have correct section id', () => {
    expect(compiled.querySelector('section')?.id).toBe('interests');
  });

  it('should have section title', () => {
    expect(compiled.querySelector('h2')?.textContent).toBe('Centres d\'intérêt');
  });
});
