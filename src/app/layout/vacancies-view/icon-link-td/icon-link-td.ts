import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon-link-td',
  imports: [],
  templateUrl: './icon-link-td.html',
  styleUrl: './icon-link-td.scss'
})
export class IconLinkTd {
  @Input() attributes:any = {};
}
