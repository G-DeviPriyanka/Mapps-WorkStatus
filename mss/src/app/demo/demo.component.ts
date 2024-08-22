import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  constructor(public route:ActivatedRoute, public service:Service1Service){ console.log(route);}
  public res:any;
  ngOnInit()
  {
      this.route.paramMap.subscribe(params=>{
      let id=params.get("id");
      console.log(id)
      if(id)
      {
        let id1=parseInt(id);
        let arr=this.service.getItems();
        this.res=arr.filter(item=>item.id==id1);
        console.log(this.res);
      }
    })
  }
}
