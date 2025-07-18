import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textTd',
  templateUrl: './textTd.html',
  styleUrl: './textTd.scss'
})

export class TextTd {
  @Input() attributes:any = {};
}
