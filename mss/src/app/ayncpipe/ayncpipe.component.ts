import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CustomdDirective } from '../customd.directive';

@Component({
  selector: 'app-ayncpipe',
  standalone: true,
  imports: [HttpClientModule,CommonModule,CustomdDirective      ],
  templateUrl: './ayncpipe.component.html',
  styleUrl: './ayncpipe.component.css'
})
export class AyncpipeComponent {

  constructor(private http: HttpClient) {}
  users: any;
  con=true;
  show()
  {
    this.users= this.http.get('https://jsonplaceholder.typicode.com/posts')
    
  }

}
