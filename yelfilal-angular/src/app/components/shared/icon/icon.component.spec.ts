import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent, IconName } from './icon.component';

describe('IconComponent', () => {
  let fixture: ComponentFixture<IconComponent>;

  function render(name: IconName, size?: number): SVGSVGElement {
    fixture = TestBed.createComponent(IconComponent);
    fixture.componentRef.setInput('name', name);
    if (size !== undefined) {
      fixture.componentRef.setInput('size', size);
    }
    fixture.detectChanges();
    return (fixture.nativeElement as HTMLElement).querySelector('svg')!;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconComponent]
    }).compileComponents();
  });

  it('should render a decorative inline SVG', () => {
    const svg = render('mail');

    expect(svg.namespaceURI).toBe('http://www.w3.org/2000/svg');
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(svg.querySelector('rect')?.namespaceURI).toBe('http://www.w3.org/2000/svg');
  });

  it('should default to 24px and accept a custom size', () => {
    expect(render('menu').getAttribute('width')).toBe('24');

    const svg = render('menu', 18);
    expect(svg.getAttribute('width')).toBe('18');
    expect(svg.getAttribute('height')).toBe('18');
  });

  it('should draw stroke icons with currentColor and the right stroke width', () => {
    const bold = render('download');
    expect(bold.getAttribute('fill')).toBe('none');
    expect(bold.getAttribute('stroke')).toBe('currentColor');
    expect(bold.getAttribute('stroke-width')).toBe('2');

    expect(render('medal').getAttribute('stroke-width')).toBe('1.8');
  });

  it('should fill solid icons', () => {
    const star = render('star');
    expect(star.getAttribute('fill')).toBe('currentColor');
    expect(star.hasAttribute('stroke')).toBeFalse();
  });

  it('should use a 16px viewBox for GitHub only', () => {
    expect(render('github').getAttribute('viewBox')).toBe('0 0 16 16');
    expect(render('linkedin').getAttribute('viewBox')).toBe('0 0 24 24');
  });
});
