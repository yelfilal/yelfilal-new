import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollAnimationDirective } from './scroll-animation.directive';

@Component({
  standalone: true,
  imports: [ScrollAnimationDirective],
  template: `<div appScrollAnimation [animationDelay]="delay">Content</div>`
})
class TestHostComponent {
  delay = 0;
}

describe('ScrollAnimationDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directiveElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ScrollAnimationDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    directiveElement = fixture.nativeElement.querySelector('[appScrollAnimation]');
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    expect(directiveElement).toBeTruthy();
  });

  it('should add animate-on-scroll class initially', () => {
    expect(directiveElement.classList.contains('animate-on-scroll')).toBe(true);
  });

  it('should not have animated class initially', () => {
    expect(directiveElement.classList.contains('animated')).toBe(false);
  });

  it('should have IntersectionObserver support', () => {
    expect(typeof IntersectionObserver).toBe('function');
  });
});
