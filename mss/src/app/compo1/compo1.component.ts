import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compo1',
  standalone: true,
  imports: [],
  templateUrl: './compo1.component.html',
  styleUrl: './compo1.component.css'
})
export class Compo1Component {

  constructor(public route:Router)
  {

  }
     redirect()
      {
        this.route.navigate(['/about'])
      }
}

