import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service1Service } from '../service1.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  mobiles:any;
  constructor(private ts:Service1Service)
  {
    this.mobiles=this.ts.mobiles;
  }
  addfun()
  {
    this.ts.mobiles.push("VIVO");
  }
}
