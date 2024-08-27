import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private route:Router,private ser:SerService) { }
  lname=this.ser.lname;
  msg='welcome';
    ngOnInit(): void {
    }
    userEmail=this.lname.controls.email.value;
  
  show()
  {
    let lname=this.ser.lname;
    let storedUsers = sessionStorage.getItem('users');
   let userdata:any[]=[] = storedUsers ? JSON.parse(storedUsers) : [];
    let f=0;
    for (let i = 0; i < userdata.length; i++) {
  
      if (userdata[i].email === lname.controls.email.value && 
          userdata[i].pwd === lname.controls.pwd.value) {
        
     f = 1;
        userdata.splice(i, 1);
        sessionStorage.setItem('users', JSON.stringify(userdata));
        this.route.navigate(['/comp1']);
     
      }
    }
    if (f == 1) {
      console.log("Deleted", userdata);
      console.log('Stored Data from edit compo:', userdata);
      alert("Please update the form");
    }
  }
}
