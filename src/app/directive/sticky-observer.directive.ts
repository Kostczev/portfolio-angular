import { Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Directive({
  selector: '[appStickyObserver]',
  standalone: true
})
export class StickyObserverDirective implements OnInit, OnDestroy {
  @Input() stickyOffset = 40; // px
  @Input() enabled = true; // новая опция для включения/выключения
  @Input() breakpoint = ''; // (max-width: 700px) настраиваемый брейкпоинт

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private breakpointObserver = inject(BreakpointObserver);

  private observer: IntersectionObserver | null = null;
  private destroy$ = new Subject<void>();
  private isActive = false;

  ngOnInit() {
    if (!this.enabled) return;

    this.breakpointObserver.observe([this.breakpoint])
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        if (result.matches) {
          this.initObserver();
        } else {
          this.destroyObserver();
        }
      });
  }

  private initObserver() {
    if (this.observer || !this.enabled) return;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isActive = entry.intersectionRatio < 1;
        this.renderer[this.isActive ? 'addClass' : 'removeClass'](
          this.el.nativeElement,
          'sticky-active'
        );
      },
      { 
        threshold: [1], 
        rootMargin: `-${this.stickyOffset}px 0px 0px 0px` 
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.renderer.removeClass(this.el.nativeElement, 'sticky-active');
    this.isActive = false;
  }

  // Публичный метод для ручного управления
  setEnabled(isEnabled: boolean) {
    if (this.enabled === isEnabled) return;
    
    this.enabled = isEnabled;
    
    if (isEnabled) {
      this.breakpointObserver.observe([this.breakpoint])
        .pipe(takeUntil(this.destroy$))
        .subscribe(result => {
          if (result.matches) {
            this.initObserver();
          } else {
            this.destroyObserver();
          }
        });
    } else {
      this.destroyObserver();
    }
  }

  // Публичный метод для проверки состояния
  isStickyActive(): boolean {
    return this.isActive;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyObserver();
  }
}