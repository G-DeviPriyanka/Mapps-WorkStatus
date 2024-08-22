import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todocom',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todocom.component.html',
  styleUrl: './todocom.component.css'
})
export class TodocomComponent {

  textfield:any;
  items: string[] = [];  
  add(item: string) 
  {
    this.items.push(item);   
  }
  pop()
  {
    this.textfield=null;
  }
  del(i:number)
  {
     this.items.splice(i,1);
  }
}
