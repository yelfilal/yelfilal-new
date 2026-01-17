import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  NgZone,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  /** Délai avant le déclenchement de l'animation (ms) - utile pour stagger */
  @Input() animationDelay = 0;

  /** Seuil de visibilité pour déclencher l'animation (0.1 = 10%) */
  @Input() animationThreshold = 0.1;

  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private ngZone: NgZone,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'animate-on-scroll');

    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => this.handleIntersection(entries),
        { threshold: this.animationThreshold }
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  private handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.hasAnimated) {
        this.hasAnimated = true;

        this.ngZone.run(() => {
          if (this.animationDelay > 0) {
            this.renderer.setStyle(
              this.el.nativeElement,
              'animation-delay',
              `${this.animationDelay}ms`
            );
          }

          this.renderer.addClass(this.el.nativeElement, 'animate-visible');
        });

        this.observer?.unobserve(this.el.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
