import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateComponent } from './deactivate/deactivate.component';
@Injectable({
  providedIn: 'root'
})
export class DeactivateserviceService implements CanDeactivate<DeactivateComponent> {

  constructor() { }

  canDeactivate(component: DeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    return true;
  }

}                                                                                                                                                                                                                                                                                             
