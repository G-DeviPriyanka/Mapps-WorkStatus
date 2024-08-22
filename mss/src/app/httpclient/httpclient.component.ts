import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-httpclient',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './httpclient.component.html',
  styleUrl: './httpclient.component.css'
})
export class HttpclientComponent {

  data:any;
  constructor(private http:HttpClient)
  {}
  getItems()
  {
    this.http.get('https://fakestoreapi.com/products?limit=5')
    .pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return of([]); // Provide a fallback observable
      })
    )
    .subscribe((data)=>
    {
      this.data = data;
    })
  }
}