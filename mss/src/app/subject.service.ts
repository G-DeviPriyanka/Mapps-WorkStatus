import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  
  constructor() { this.sendTodo()}
  todos=['a','b','c','d','e','f','g','h']
  todolist=new Subject();
  sendTodo()
  {
    this.todolist.next(this.todos)
  }
  addnewitem(e:string)
  {
    this.todos.push(e);
    this.sendTodo();
  }
}
