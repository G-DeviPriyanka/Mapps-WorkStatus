import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ngdestroy',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ngdestroy.component.html',
  styleUrl: './ngdestroy.component.css'
})
export class NgdestroyComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log('Method not implemented.');
  } 

}

