import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formmarray',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './formmarray.component.html',
  styleUrl: './formmarray.component.css'
})
export class FormmarrayComponent {

   fm=new FormGroup({
    mobiles:new FormArray([
       new FormControl(),
       new FormControl(),
       new FormControl()
    ])
   })
   show()
   {
     console.log(this.fm);
   }
}
