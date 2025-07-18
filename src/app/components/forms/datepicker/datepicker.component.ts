import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.css'],
})

export default class DatepickerComponent {
  @Input() inputLabel : string = '';
  @Input() date: any;
  @Input() logic:any;

  onDateChange(event: any) {
    this.logic.PerformDataOperation('update', event.target.value)
  }
}
