import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Service1Service implements CanActivate {
  constructor(private router: Router)
  {
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let val=false;
    if(!val)
    {
        this.router.navigate(['/httpclient']);
        return false;
    }
    else
    {
      return true;
    }
  }
  
   mobiles=['samsung','nokia','realme','oppo','lenovo']

  getItems()
  {
    return [
      {
        id:1,
        name:"siva"
      }
      ,
      {
        id:2,
        name:"ram"
      }
    ]
  }


   
}
