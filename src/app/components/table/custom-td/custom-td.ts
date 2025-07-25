import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-custom-td',
  templateUrl: './custom-td.html',
  imports: [
    NgComponentOutlet
  ],
  styleUrl: './custom-td.scss'
})

export default class CustomTd {
  @Input() template : any = null;
  @Input() attributes : any = {};
  @Output() performUpdate = new EventEmitter<any>();
}
