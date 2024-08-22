import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-allngs',
  standalone: true,
  imports: [],
  templateUrl: './allngs.component.html',
  styleUrl: './allngs.component.css'
})
export class AllngsComponent implements OnInit ,OnChanges,DoCheck,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onchanges Method not implemented.');
  }
  ngOnInit(): void {
    console.log('oninit Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('docheck Method not implemented.');
  }
  ngAfterViewInit(): void {
    console.log('after view init Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log(' view checked Method not implemented.');
  }
  ngAfterContentInit(): void {
    console.log('content init Method not implemented.');
  }
  ngAfterContentChecked(): void {
    console.log('content checkedMethod not implemented.');
  }
  
}
