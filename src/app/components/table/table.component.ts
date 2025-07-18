import {Component, Input} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';
import {CustomTd} from './custom-td/custom-td';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl:'./table.html',
  imports: [
    CustomTd,
    CustomTd
  ],
  styleUrls: ['./table.css']
})

export default class TableComponent {
  @Input() rows : any[] = [];
  @Input() columns : any[] = [];
  @Input() rowComponent : any = null;
  @Input() customTds : any[] = []

  constructor() {
  }

  updateFilterOrder(event:MouseEvent, filterObject:any) {
    //TODO: Implement a service to update the table

    let item = event.currentTarget as HTMLElement;

    let updatedFilter = filterObject;

    updatedFilter.value = updatedFilter.value === "ascendant" ? "descendant" : "ascendant";

    if(item.classList.contains("bi-arrow-up")){
      item.classList.remove("bi-arrow-up");
      item.classList.add("bi-arrow-down");
    } else {
      item.classList.remove("bi-arrow-down");
      item.classList.add("bi-arrow-up");
    }
  }
}

/* HELP!
*  I was kidnapped and the boss is forcing me
*  to use angular and bootstrap 💀 */
