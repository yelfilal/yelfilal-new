import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    compiled = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should render a <footer> landmark', () => {
    expect(compiled.querySelector('footer')).toBeTruthy();
  });

  it('should display the current year and the name', () => {
    expect(compiled.textContent).toContain(`© ${new Date().getFullYear()} Yassine El FILALI`);
  });

  it('should display the job title', () => {
    expect(compiled.textContent).toContain('Java Fullstack Engineer');
  });
});
