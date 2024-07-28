import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont20]'
})
export class Font20Directive {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '20px');
  }

}
