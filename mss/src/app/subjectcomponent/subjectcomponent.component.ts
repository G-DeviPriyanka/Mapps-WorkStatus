import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-subjectcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjectcomponent.component.html',
  styleUrl: './subjectcomponent.component.css'
})
export class SubjectcomponentComponent implements OnInit {
  
  constructor(private ts:SubjectService){}
  todos=[]
  
  ngOnInit():void{
    
    this.ts.todolist.subscribe((data:any)=>{console.log(data)})
    this.ts.sendTodo()
  }
  
  add(e:string)
  {
    this.ts.addnewitem(e);
  }

}
