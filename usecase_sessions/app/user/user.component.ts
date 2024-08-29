import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private bn:BnNgIdleService,private route:Router,private ser:SerService) { }
  lname=this.ser.lname;
  msg='welcome';
    ngOnInit(): void {
      this.bn.startWatching(5000).subscribe((isTimeout:Boolean) => {
        if(isTimeout)
        {
            console.log('sessions timeout');
            this.route.navigate(['/login']);
            this.bn.stopTimer();
        }
      });
    }
    userEmail=this.lname.controls.uname.value;

  
}
