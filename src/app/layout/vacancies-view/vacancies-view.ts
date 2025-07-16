import { Component } from '@angular/core';
import SearchBox from '../../components/forms/searchbox/searchbox.component';
import DatepickerComponent from '../../components/forms/datepicker/datepicker.component';
import {Dropdown} from '../../components/forms/dropdown/dropdown';
import TableComponent from '../../components/table/table.component';

@Component({
  selector: 'app-vacancies-view',
  imports: [SearchBox,DatepickerComponent,Dropdown,TableComponent],
  templateUrl: './vacancies-view.html',
  styleUrl: './vacancies-view.scss'
})
export class VacanciesView {

}
