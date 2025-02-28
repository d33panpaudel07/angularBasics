import { Component } from '@angular/core';
import { ReceivingComponentComponent } from '../receiving-component/receiving-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-one-way-binding',
  standalone: true,
  imports: [ReceivingComponentComponent, FormsModule],
  templateUrl: './one-way-binding.component.html',
  styleUrl: './one-way-binding.component.css',
})
export class OneWayBindingComponent {
  userInput!: string;
}
