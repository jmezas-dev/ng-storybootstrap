import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.html',
  styleUrls: ['./searchbox.css'],
})

export default class SearchBox {
  public inputLabel : string = "Search";

  @Input() searchText: any;
  @Output() search = new EventEmitter<string>();

  constructor() {
    this.inputLabel = "Buscar";
    this.searchText = "";
  }
}
