import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AppComponent } from './app.component';

@Directive({
  selector: '[appRcustom]',
  standalone: true
})
export class RcustomDirective {

constructor(private h:TemplateRef<any>,private cont:ViewContainerRef) { }
@Input()  set appRcustom(cond1:boolean){
if(!cond1)
{
  this.cont.createEmbeddedView(this.h);
}
else{
  console.log('else block')
  this.cont.clear();
}
}
}
