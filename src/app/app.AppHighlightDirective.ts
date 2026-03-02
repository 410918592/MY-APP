import { Component, signal,Input,Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // 屬性選擇器，用 [] 包起來
  
})
export class AppHighlightDirective {
     @Input() count = 0;
   constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('gray');
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}