import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
      const obs=new Subject()
      console.log("from module")
      const d=this.http.get('https://fakestoreapi.com/products').pipe(filter((data:any)=>data.every((item:any)=>item.id>5))).subscribe((data:any)=>obs.next(data));
      obs.subscribe((response:any)=>{console.log(response)});
  }
}
