import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe',
  standalone: true
})
export class TestpipePipe implements PipeTransform {

  transform(person:any,wish:string): String {
   if(person.gender=='f')
   {
    return `Hello Miss ${wish}`
   }
   else
   {
    return `Hello Mr ${wish}`
   }
  }
}
