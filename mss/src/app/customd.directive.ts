import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomd]',
  standalone: true
})
export class CustomdDirective {

  constructor(e:ElementRef) 
  { 
    console.log(e);
    e.nativeElement.style.background ="blue";
    e.nativeElement.style.color ="red";
  }
}
