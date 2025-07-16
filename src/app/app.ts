import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VacanciesView} from './layout/vacancies-view/vacancies-view';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,VacanciesView],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-20');
}
