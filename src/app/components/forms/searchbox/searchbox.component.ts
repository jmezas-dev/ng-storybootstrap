import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.html',
  styleUrls: ['./searchbox.css'],
})

export default class SearchBoxComponent {
  /*Shape of the searchbox object*/
  @Input() searchText: any;
  @Output() search = new EventEmitter<string>();
}
