import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empdet',
  standalone: true,
  imports: [],
  templateUrl: './empdet.component.html',
  styleUrl: './empdet.component.css'
})
export class EmpdetComponent {
  id1 :any;
  name:any;
  constructor(public route:ActivatedRoute)
  {
     this.id1=this.route.snapshot.paramMap.get("id");
     this.name=this.route.snapshot.paramMap.get("name");
  }
}
