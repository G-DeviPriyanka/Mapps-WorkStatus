import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService implements CanActivate{
  userArray: any[] =[];
  userdata: any[]=[];

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean | UrlTree {
    return false;
  }
  lname=new FormGroup({
    
    uname:new FormControl('',[Validators.required,Validators.minLength(3)],this.duplicatename),
    pwd: new FormControl('',[Validators.required,Validators.minLength(5),this.uppercase]),
    email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
    phone:new FormControl('',[Validators.required,Validators.pattern('^[0-9]{10}$')]),
    topic:new FormControl('',[Validators.required]),
    timeOfDay:new FormControl('',[Validators.required])
  })
  duplicatename(e:any):Promise<any>
{
  let prom=new Promise((resolve,reject)=>{
    let users=['user1','user2','user3']
    let name=e.value;
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
// duplicateemail(e:any):Promise<any>
// {
//   let prom=new Promise((resolve,reject)=>{
//         let stored=sessionStorage.getItem('users')
//          this.userdata=stored?JSON.parse(stored):[];
//         let em=this.lname.controls.email.value
//          for(let i=0;i<this.userdata.length;i++)
//             {
//                       if(this.userdata[i].email==em)
//                     {
//                             resolve({userexist:true})
//                             console.log("email exist");
//                             break;
//                      }
//                      else{
//                       resolve(null)
//                      }
//                }
//               })
//               return prom
// }
uppercase(e:any)
{
  const pattern=/[A-Z]/
  if(pattern.test(e.value))
  {
    return null
  }
  return {uppererror:true}
}
sub() {
  let storedUsers = sessionStorage.getItem('users');
  let usersArray1: any[] = storedUsers ? JSON.parse(storedUsers) : [];
  const newUser = this.lname.value;
  usersArray1.push(newUser);
  sessionStorage.setItem('users', JSON.stringify(usersArray1));
  console.log('Stored Data:', usersArray1);

  this.userArray = usersArray1;
  return { userArray: this.userArray };
}

}
