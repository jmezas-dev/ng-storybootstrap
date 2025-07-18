import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.html',
  styleUrls: ['./searchbox.css'],
  standalone: true,
})

export default class SearchBox {
  @Input() inputLabel : string = '';
  @Input() searchText: any='';

  @Output() search = new EventEmitter<string>();

  constructor() {
    this.searchText;
    this.inputLabel;
  }
}
