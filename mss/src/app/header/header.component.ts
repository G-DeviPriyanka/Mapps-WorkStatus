import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Service1Service } from '../service1.service';
 import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy{
  constructor(private service:Service1Service){}
  ngOnDestroy(): void {
    console.log('Header Component Destroyed.');
  }

  @Input() wishmsg:any;
  @Input() tit:any;
  @Input() data:any;

  @Output() cdata=new EventEmitter();
  msg="Message from child to parent"
  passtoparent()
  {
     this.cdata.emit(this.msg)
  }
  parent()
  {
    return this.msg;
  }
 items:any;
  ngOnInit()
  {
    this.items=this.service.getItems();
     
  }
  
}
