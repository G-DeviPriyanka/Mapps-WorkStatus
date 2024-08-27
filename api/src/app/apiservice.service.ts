import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private route:HttpClient) {
   
   }
  getAPi()
  {
    return this.route.get('http://localhost:5000/')
  }
}
