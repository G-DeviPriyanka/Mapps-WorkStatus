import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomd]'
})
export class CustomdDirective {

  constructor(private element:ElementRef,private rend:Renderer2) { }
 
  @HostBinding('style.backgroundColor')color:string | undefined;
  @HostListener('mouseenter')click(event:Event){
    this.rend.setStyle(this.element.nativeElement,'background-color','red');
  }
  @HostListener('mouseleave')click1(event:Event){
   // this.rend.setStyle(this.element.nativeElement,'background-color','green');
    this.color="pink";
  }
}
