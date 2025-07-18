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
  @Input() logic:any;

  onInputChange(event: any) {
    this.logic.PerformDataOperation('update', event.target.value)
  }
}
