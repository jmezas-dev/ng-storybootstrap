import {Component, Input} from '@angular/core';
import {Dropdown} from '../../../components/forms/dropdown/dropdown';

@Component({
  selector: 'app-drop-down-td',
  imports: [
    Dropdown
  ],
  templateUrl: './drop-down-td.html',
  styleUrl: './drop-down-td.scss'
})
export class DropDownTd {
  @Input() attributes:any = {};
}
