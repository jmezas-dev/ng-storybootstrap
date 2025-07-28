import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  imports: [],
  templateUrl: './select.html',
  styleUrl: './select.scss'
})
export class Select {
  @Input() options: any[] = [];
  @Input() selectedOption: any;
  @Input() actions: any;

  optionChange() {
      this.actions.PerformDataOperation('update', this.selectedOption)
  }
}
