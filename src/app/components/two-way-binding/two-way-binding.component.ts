import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  title: string = 'angularBasics';
  place: string = 'ghar';
  counter: number = 1;

  testFunc = () => {
    console.log('Value of counter is: ' + this.counter++);
  };
}
