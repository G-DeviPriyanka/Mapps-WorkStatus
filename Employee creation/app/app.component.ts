import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
   constructor(private route:Router){this.route.navigate(['/comp1']);}
   
  //   }
  // ngOnInit(): void {
  //   this.http.post('https://fakestoreapi.com/products',{name:"hello from app.ts"}).subscribe((response)=>{console.log(response)})
  // }
  
    title = 'project1';

   
  
//   name: string;
//   email: string;
//   city: string;
//   state: string;
//   pincode: string;
//   address: string;
  
//   constructor() {
//     this.address = '';
//     this.city = '';
//     this.email = '';
//     this.name = '';
//     this.state = '';
//     this.pincode = '';
// }
// show=false
// fun()
// {
//    this.show=true;
// }
   
}
