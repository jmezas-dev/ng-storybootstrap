import {Component, Input,Output, EventEmitter} from '@angular/core';

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

  @Input() searchText: any;
  @Output() searchTextChange = new EventEmitter<string>();
}
