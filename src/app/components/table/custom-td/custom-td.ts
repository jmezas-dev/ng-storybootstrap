import {Component,Input} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-custom-td',
  templateUrl: './custom-td.html',
  imports: [
    NgComponentOutlet
  ],
  styleUrl: './custom-td.scss'
})

export class CustomTd {
  @Input() template : any = null;
  @Input() attributes : any = {};
}
