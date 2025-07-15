import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from './components/button/button.component';
import TableComponent from './components/table/table.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonComponent, TableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-20');
}
