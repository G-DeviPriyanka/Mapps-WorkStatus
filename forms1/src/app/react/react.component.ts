import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-react',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css'
})
export class ReactComponent {

    lname=new FormGroup({
    uname : new FormControl()
    
  })  
  show()
  {
    console.log(this.lname);
  }
}
