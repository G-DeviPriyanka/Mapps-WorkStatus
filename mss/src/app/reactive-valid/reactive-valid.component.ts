import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-valid',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-valid.component.html',
  styleUrl: './reactive-valid.component.css'
})
export class ReactiveValidComponent {

  reg=new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.minLength(8)]),
    pwd:new FormControl("12345",[Validators.required,Validators.minLength(8)])
  })
}
