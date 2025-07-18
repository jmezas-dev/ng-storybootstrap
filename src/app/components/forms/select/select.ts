import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class Select {
  @Input() options: any[] = [];
  @Input() selectedOption: any;
}
