import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.css'],
})

export default class DatepickerComponent {
  @Input() date: any;
  @Output() dateChange = new EventEmitter<string>();
}
