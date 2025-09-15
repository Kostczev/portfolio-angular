import { Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Directive({
  selector: '[appStickyObserver]',
  standalone: true
})
export class StickyObserverDirective implements OnInit, OnDestroy {
  @Input() stickyOffset = 40 // px

  private el = inject(ElementRef)
  private renderer = inject(Renderer2)
  private breakpointObserver = inject(BreakpointObserver)

  private observer: IntersectionObserver | null = null
  private destroy$ = new Subject<void>()

  ngOnInit() {
    this.breakpointObserver.observe([
      '(max-width: 700px)'
    ]).pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result.matches) {
          this.initObserver()
        } else {
          this.destroyObserver()
        }
      });
  }

  private initObserver() {
    if (this.observer) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.renderer[entry.intersectionRatio < 1 ? 'addClass' : 'removeClass'](
          this.el.nativeElement,
          'sticky-active'
        );
      },
      { threshold: [1], rootMargin: `-${this.stickyOffset}px 0px 0px 0px` }
    );

    this.observer.observe(this.el.nativeElement)
  }

  private destroyObserver() {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.renderer.removeClass(this.el.nativeElement, 'sticky-active')
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
    this.destroyObserver()
  }
}
