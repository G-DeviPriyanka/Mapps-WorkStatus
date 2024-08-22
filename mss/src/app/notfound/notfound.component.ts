import { Component } from '@angular/core';
import { Service1Service } from '../service1.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css',
})


export class NotfoundComponent {

  constructor(public ts:Service1Service)
  {
  }
}
