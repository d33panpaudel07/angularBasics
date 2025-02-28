import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReceivingComponentComponent } from '../receiving-component/receiving-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  imports: [FormsModule, ReceivingComponentComponent],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css',
})
export class OneWayBindingComponent {
  // avoid using viewChild for DOM manipulation
  // @ViewChild('testPara') testPara!: ElementRef;

  userInput: string = '';
  textColor!: string;

  updateText(event: Event) {
    let inputElem = event.target as HTMLInputElement;
    this.userInput = inputElem.value;
    this.textColor = 'blue';
  }
}
