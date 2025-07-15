import {Component, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchdropdown',
  templateUrl: './searchdropdown.html',
  styleUrls: ['./searchdropdown.css']
})
export class SearchDropdownComponent {
  @Input() searchText: any;
  @Output() searchTextChange = new EventEmitter<string>();
}
