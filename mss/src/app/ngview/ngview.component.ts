import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ngview',
  standalone: true,
  imports: [],
  templateUrl: './ngview.component.html',
  styleUrl: './ngview.component.css'
})
export class NgviewComponent implements AfterViewInit,AfterViewChecked{


  ngAfterViewInit(): void {
    console.log("ngafterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  count:any = 0;
  counter()
  {
    this.count=this.count+1;
  }
}
