import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.ser.getAPi().subscribe((data:any)=>
      {
        console.log("from get api",data);
      }, (error:any)=>{
        console.log("error in get api",error);
      },()=>{
        console.log("get api completed");
      }
  )}
  title = 'api';
  constructor(public route:HttpClient,public ser:ApiserviceService)
  {

  }
 
  
}
