import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReceivingComponentComponent } from "../receiving-component/receiving-component.component";

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule, ReceivingComponentComponent],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css',
})
export class TwoWayBindingComponent {
  title: string = 'angularBasics';
  place: string = 'ghar';
  counter: number = 1;
  userInput!: string;

  testFunc = () => {
    console.log('Value of counter is: ' + this.counter++);
  };
}
