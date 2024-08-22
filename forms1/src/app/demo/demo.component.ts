import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  submit(ng:any,ng1:any,ng2:any,ng3:any)
  {
    console.log(ng,ng1,ng2,ng3);
    ng3.setValue({
      '':{
      'uname':'dsvn',
      'pwd':'kjdsv'
    }})
    console.log(ng3.values);
  }
  sub(nf:any)

{
  console.log(nf.value);
}
}
