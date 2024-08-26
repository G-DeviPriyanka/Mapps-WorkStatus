import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route:Router,private ser:SerService) { }
lname=this.ser.lname;
msg='welcome';
  ngOnInit(): void {
  }
  adminEmail=this.lname.controls.email.value;
show()
{
   this.route.navigate(['/show'])
}

}
