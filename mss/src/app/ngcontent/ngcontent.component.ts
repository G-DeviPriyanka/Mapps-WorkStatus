import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngcontent',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './ngcontent.component.html',
  styleUrl: './ngcontent.component.css'
})
export class NgcontentComponent {

  @Input() list1:any
}
