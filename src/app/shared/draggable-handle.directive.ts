import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDraggableHandle]'
})
export class DraggableHandleDirective {

  constructor(public el: ElementRef<HTMLElement>) { }

}
