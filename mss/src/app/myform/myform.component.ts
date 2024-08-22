import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { FormcontrolComponent } from '../formcontrol/formcontrol.component';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {

  topic=['react','python','angular']
  fun(f:any)
  {
    console.log(f)
  }
  //myforms=new FormcontrolComponent('devi','sa@gmail.com','45678','react','morning');
}
