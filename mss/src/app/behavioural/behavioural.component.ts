import { Component } from '@angular/core';
import { BehaviourserviceService } from '../behaviourservice.service';

@Component({
  selector: 'app-behavioural',
  standalone: true,
  imports: [],
  templateUrl: './behavioural.component.html',
  styleUrl: './behavioural.component.css'
})
export class BehaviouralComponent {

  s1:any
  constructor(private ts:BehaviourserviceService) {
    //  this.s1=this.ts.ss.subscribe((d)=>console.log(d));
    // this.ts.bs.subscribe((d)=>console.log(d));
    // this.ts.rs.subscribe((d)=>console.log(d));
    this.ts.as.subscribe((d)=>console.log(d));
    this.ts.as.complete();
   }
  emit()
   {
    this.s1.next("second time")
   }
}
