import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodocomComponent } from "./todocom/todocom.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodocomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
}
