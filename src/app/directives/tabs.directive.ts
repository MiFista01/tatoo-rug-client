import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTabs]',
  standalone: true
})
export class TabsDirective {

  constructor( private el:ElementRef) { }
  // @HostBinding('style.border') border: string | undefined | null;
  @HostBinding('[@nameOfAnimation]') animationTrigger = ""; 

  @HostListener('mouseenter') onMouseEnter() {
    this.animationTrigger = "show"
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.animationTrigger = "hidden"
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.color = color;
  }
}
