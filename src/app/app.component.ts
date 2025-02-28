import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  // template: 'Hello Universe',
  templateUrl: './app.component.html',
  styles: ':host{color:#a1444eb};',
  // styleUrl: './app.component.css'
})
export class AppComponent {
}
