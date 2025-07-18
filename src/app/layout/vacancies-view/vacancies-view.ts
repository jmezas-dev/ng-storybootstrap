import { Component } from '@angular/core';
import SearchBox from '../../components/forms/searchbox/searchbox.component';
import DatepickerComponent from '../../components/forms/datepicker/datepicker.component';
import {Dropdown} from '../../components/forms/dropdown/dropdown';
import TableComponent from '../../components/table/table.component';
import {IVacant} from '../../interfaces/IVacantRow';
import {TextTd} from './textTd/textTd';
import {IconLinkTd} from './icon-link-td/icon-link-td';
import {DropDownTd} from './drop-down-td/drop-down-td';
import {BadgeTd} from './badge-td/badge-td';
import {SelectTd} from './select-td/select-td';

@Component({
  selector: 'app-vacancies-view',
  imports: [SearchBox, DatepickerComponent, Dropdown, TableComponent, TableComponent],
  templateUrl: './vacancies-view.html',
  styleUrl: './vacancies-view.scss'
})

export class VacanciesView {
  public statusOptions:any[];
  public clientOptions : any[];
  public vacancies : IVacant[];
  public vacancyCols : any = [];
  public vacancyRow : any = null;
  public tdComponents : any = [];
  public recruiters : any[];

  constructor() {
    this.tdComponents = [
      TextTd,
      TextTd,
      IconLinkTd,
      SelectTd,
      BadgeTd,
      SelectTd,
      TextTd
    ];

    this.statusOptions = [
      {
        value: 1,
        label: "Activo"
      },
      {
        value: 2,
        label: "Inactivo"
      }
    ];

    this.clientOptions = [
      {
        value: 1,
        label: "Beatriz Pinzon"
      },
      {
        value: 2,
        label: "Nicolas Mora"
      },
      {
        value: 3,
        label: "Hugo Lombardi"
      },
      {
        value: 4,
        label: "Marcela Valencia"
      },
      {
        value: 5,
        label: "Mario Calderon"
      }
    ];

    this.recruiters = [
      {
        value: 1,
        label: "Beatriz Pinzon"
      },
      {
        value: 2,
        label: "Nicolas Mora"
      }
    ];

    this.vacancies = [
      {
          id:1,
          ticketNumber:"Ticket #123",
          vacantName:"Desarrollador",
          descriptionLink:"https://www.google.com",
          recruiter:{
            fieldName:"",
            selected:1,
            options:this.recruiters
          },
          status:"Activo",
          recruiterStatus:{
            fieldName:"",
            selected:1,
            options:this.statusOptions
          },
          comments:"lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
          id:2,
          ticketNumber:"Ticket #124",
          vacantName:"Desarrollador",
          descriptionLink:"https://images.google.com",
          recruiter:{
            fieldName:"",
            selected:2,
            options:this.recruiters
          },
          status:"Activo",
          recruiterStatus:{
            fieldName: "",
            selected: 2,
            options: this.statusOptions
          },
          comments:"lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ];

    this.vacancyCols = [
      {
        id:1,
        columnName:"ticketNumber",
        columnLabel:"# de Ticket",
        value:"ascendant"
      },
      {
        id:2,
        columnName:"vacantName",
        columnLabel:"Vacante",
        value:"ascendant"
      },
      {
        id:3,
        columnName:"descriptionLink",
        columnLabel: "Descripcion",
        value:"ascendant"
      },
      {
        id:4,
        columnName:"recruiter",
        columnLabel:"Reclutador",
        value:"ascendant"
      },
      {
        id:5,
        columnName:"status",
        columnLabel:"Estado",
        value:"ascendant"
      },
      {
        id:6,
        columnName:"recruiterStatus",
        columnLabel:"Estado del Reclutador",
        value:"ascendant"
      },
      {
        id:7,
        columnName:"comments",
        columnLabel:"Comentarios",
        value:"ascendant"
      }
    ];
  }
}
