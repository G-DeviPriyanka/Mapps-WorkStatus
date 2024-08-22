import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.css'
})
export class SessionsComponent {
 i:any;
  set()
  {
    for(this.i=0; this.i<10; this.i++)
    {
    sessionStorage.setItem(this.i,this.i+1)
    }
  }
   get()
    {
         return sessionStorage.getItem(this.i)  
    }
    remove()
    {
      sessionStorage.removeItem('key')
    }
    clear()
    {
      sessionStorage.clear()
    }
}
