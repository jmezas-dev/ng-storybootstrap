import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.css'],
  standalone: true,
})
export class Dropdown {
  @Input() inputLabel : string = '';
  @Input() options: any[] = [];
  @Input() selectedOption: any;

  @Input() logic: any;

  optionChange(event: any) {
    this.logic.PerformDataOperation('update', event.target.value)
  }
}
