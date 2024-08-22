import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule,FormGroup, Validators, FormArray, NgForm } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {

 lname=new FormGroup({
  uname:new FormControl('',[Validators.required,Validators.minLength(3)],this.duplicatename),
  pwd: new FormControl('',[Validators.required,Validators.minLength(5),this.uppercase]),
  email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
  phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
  topic:new FormControl([Validators.required]),
  timeOfDay:new FormControl([Validators.required])
})

topic=['react','javascript','angular']
color=true
value={

  background:'green',
  color:'white'
}
address=new FormGroup({
  add:new FormArray([
    new FormControl(),
    
  ])
})
add() {
  const addArray = this.address.get('add') as FormArray
  addArray?.push(new FormControl()); 
}
submit(){
    console.log(this.lname.controls)
}
duplicatename(e:any):Promise<any>
{
  let prom=new Promise((resolve,reject)=>{
    let users=['user1','user2','user3']
    let name=e.value;
    console.log(name);
   setTimeout(()=>{
      if(users.indexOf(name)>=0 ) {
        resolve({userexist:true})
     }
     else{
      resolve(null)
     }
    },1000)
   })
   return prom
}
uppercase(e:any)
{
  const pattern=/[A-Z]/
  if(pattern.test(e.value))
  {
    return null
  }
  return {uppererror:true}
}
sub(en:any)
{
  const data={'uname':en.controls.uname.value,'password':en.controls.pwd.value,'email':en.controls.email.value,'phone':en.controls.phone.value,'topic':en.controls.topic.value}
  const formDataString = JSON.stringify(data);
  sessionStorage.setItem('user',formDataString);
}
reset()
{
  sessionStorage.removeItem('user');
}
}
