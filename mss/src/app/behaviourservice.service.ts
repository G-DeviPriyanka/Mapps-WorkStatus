import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject ,ReplaySubject, AsyncSubject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BehaviourserviceService {

  ss=new Subject();
  bs=new BehaviorSubject("initial data");
  rs=new ReplaySubject(5,2);
  as=new AsyncSubject();
  constructor() { 
    this.ss.next("first data");
    this.bs.next("initial data1");
    this.ss.next("first data1");
    this.rs.next("initial data of rs1");
    this.rs.next("initial data of rs2");
    this.rs.next("initial data of rs3");
    this.rs.next("initial data of rs4");
    this.rs.next("initial data of rs5");
    this.rs.next("initial data of rs6");
    this.rs.next("initial data of rs7");
    this.rs.next("initial data of rs8");
    this.as.next("initial data of as1");
  }
}
