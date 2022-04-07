import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
    ) {
    let el = this._elementRef.nativeElement;
_renderer.setStyle(el, 'color', 'yellow');

   }
}
