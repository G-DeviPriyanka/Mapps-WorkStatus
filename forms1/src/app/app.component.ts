import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from "./demo/demo.component";
import { ReactComponent } from "./react/react.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemoComponent, ReactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms1';
}
