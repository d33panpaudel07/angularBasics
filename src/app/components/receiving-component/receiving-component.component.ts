import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receiving-component',
  standalone: true,
  imports: [],
  templateUrl: './receiving-component.component.html',
  styleUrl: './receiving-component.component.css',
})
export class ReceivingComponentComponent {
  @Input()
  someData: string = '';
}
