import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.html',
    styleUrls: ['./table.css'],
  }
)

export default class TableComponent {
  /*
   * The shape of the task object
   */
  @Input() task: any;

  @Output() onTaskClick = new EventEmitter<any>();
}
