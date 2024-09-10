import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onmerge()
    {
        this.route.navigate(['/home'],{
         queryParams:{'session':'2','category':'products'},
         queryParamsHandling:'merge'
        });
    }
    onpreserve()
    {
      this.route.navigate(['/home'],{
        queryParams:{'session':'2','category':'products'},
        queryParamsHandling:'preserve'
    });
  }
}
