import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { OneWayBindingComponent } from "./components/one-way-binding/one-way-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwoWayBindingComponent, OneWayBindingComponent],
  // template: 'Hello Universe',
  templateUrl: './app.component.html',
  styles: ':host{color:#a1444eb};',
  // styleUrl: './app.component.css'
})
export class AppComponent {}
