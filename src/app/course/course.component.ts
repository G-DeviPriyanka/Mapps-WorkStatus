import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    course=[
      {
        id:1,name:"react"
      },
      {
        id:2,name:"angular"
      },
      {
        id:3,name:"react2"
      },
      {
        id:4,name:"angular2"
      }
    ]
}
