import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  styleUrls: ['./dropdown.css'],
  standalone: true,
})
export class Dropdown {
  @Input() searchText: any;
  @Output() searchTextChange = new EventEmitter<string>();
}
