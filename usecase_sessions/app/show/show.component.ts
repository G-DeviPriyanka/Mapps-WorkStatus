import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  constructor(private ser:SerService) { }
 lname1=this.ser.lname;
  ngOnInit(): void {
  }
  storedUsers = sessionStorage.getItem('users');
  userdata:any[]=[] = this.storedUsers ? JSON.parse(this.storedUsers) : [];
     
  reset(user:any,i:any)
  {
    this.userdata.splice(i,1);
    sessionStorage.removeItem(user);
    console.log(this.userdata);
  }
  
    
  
}
