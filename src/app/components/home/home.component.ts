import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title: string = 'angularBasics';
  place: string = 'ghar';
  counter: number = 1;

  testFunc = () => {
    console.log('Value of counter is: ' + this.counter++);
  };
}
