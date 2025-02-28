import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
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
