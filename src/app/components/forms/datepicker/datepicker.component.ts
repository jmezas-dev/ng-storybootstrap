import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.css'],
})

export default class DatepickerComponent {
  @Input() inputLabel : string = '';
  @Input() date: any;
  @Output() dateChange = new EventEmitter<string>();

  constructor() {
  }
}
