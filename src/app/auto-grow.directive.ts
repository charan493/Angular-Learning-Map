import {Directive, ElementRef, Renderer} from '@angular/core'

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)':'onFocus()',
    '(blur)':'onBlur()'
  }
})
export class AutoGrowDirective{
  constructor(private el:ElementalRef, private renderer: Renderer){

  }
  onFocus(){
    this.renderer.setElementStyle(this.el,'height','250');
  }

  onBlur(){
    this.renderer.setElementStyle(this.el,'height','150');
  }

}
