import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onchanges',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './onchanges.component.html',
  styleUrl: './onchanges.component.css'
})
export class OnchangesComponent implements OnChanges,OnInit {


  @Input() test:any
  constructor(){
    console.log("Constuctor executing..");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("Executing ngonInit");
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
