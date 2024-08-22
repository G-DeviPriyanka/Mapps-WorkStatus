import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {

  tag:any;
  tag1:any;
  constructor(public route:ActivatedRoute)
  {
    this.route.queryParams.subscribe(data=>{

       this.tag=data['tag'];
       this.tag1=data['tag1'];
  })
  }
}
