import { Serializer } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(public router:ActivatedRoute ,public service:Service1Service)
  {
    this.router.queryParams.subscribe(params=>
    {
       if(params['category']=='men')
       {
        console.log("Men products category")
       }
       else if(params['category']=='women')
       {
        console.log("Women products category")
       }
       else if(params['category']=='Mobiles')
       {
        console.log("Mobiles products category")
       }
       else{
        console.log(service.getItems())
      
      }
    }
    )
  }
}
