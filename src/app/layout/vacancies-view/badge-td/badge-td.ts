import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge-td',
  imports: [],
  templateUrl: './badge-td.html',
  styleUrl: './badge-td.scss'
})
export class BadgeTd {
  @Input() attributes:any = {};
}
