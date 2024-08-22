import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formcontrol.component.html',
  styleUrl: './formcontrol.component.css'
})
export class FormcontrolComponent {
  // constructor(
  //   name:any,
  //   email:any,
  //   phone:any,
  //   gender:any,
  //   shift:any
  // ){}

  submit1(ng:any,ng1:any,nggr:any)
  {
    console.log('Form submitted successfully');
    console.log(ng,ng1,nggr);
    console.log("nggr is",nggr.value);
    
  }
  submit2(d:any)
  {
    console.log(d.value);
   d.setValue(
    {
      'uname':'DeviPriyanka',
      'pwd':'devi'
    }
   )
   console.log("After submit:",d.value);
  }
  submit21(ng:any)

  {
    ng.control.patchValue({
      'uname':'sai'
    })
    console.log("After submit:",ng.value);
  }
}
