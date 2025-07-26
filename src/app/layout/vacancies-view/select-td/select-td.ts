import {Component, Input} from '@angular/core';
import {Select} from '../../../components/forms/select/select';

interface SelectedTdAttributes {
  options: Array<{value:string, label:string}>;
}

@Component({
  selector: 'app-select-td',
  imports: [
    Select
  ],
  templateUrl: './select-td.html',
  styleUrl: './select-td.scss'
})
export class SelectTd {
  @Input() attributes: SelectedTdAttributes = { options: [] };
}
