import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  afterEach(() => localStorage.clear());

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have the CV title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('Yassine El FILALI - CV');
  });

  it('should render the landmarks: header, main and footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header header')).toBeTruthy();
    expect(compiled.querySelector('main#main')).toBeTruthy();
    expect(compiled.querySelector('app-footer footer')).toBeTruthy();
    expect(compiled.querySelector('.skip-link')?.getAttribute('href')).toBe('#main');
  });

  it('should stack the sections in the expected order', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const ids = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll('main section')).map(s => s.id);

    expect(ids).toEqual(['about', 'experience', 'skills', 'education', 'awards', 'interests', 'contact']);
  });

  it('should have a single h1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('h1').length).toBe(1);
  });
});
