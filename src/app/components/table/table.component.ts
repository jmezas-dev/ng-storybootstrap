import { Component } from '@angular/core';
import {IVacantRow} from '../../interfaces/IVacantRow';
import {Dropdown} from '../forms/dropdown/dropdown';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.html',
  imports: [
    Dropdown
  ],
  styleUrls: ['./table.css']
})

export default class TableComponent {
  public vacants : IVacantRow[];
  public filterOrders : any[];

  constructor() {
    this.vacants = [
      {
        id:1,
        ticketNumber:"Ticket #123",
        vacantName:"Desarrollador",
        descriptionLink:"link",
        recruiter:"Beatriz Pinzon",
        status:"Activo",
        recruiterStatus:"Asignada",
        comments:"lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        id:2,
        ticketNumber:"Ticket #124",
        vacantName:"Desarrollado",
        descriptionLink:"link",
        recruiter:"Nicolas Mora",
        status:"Activo",
        recruiterStatus:"Asignada",
        comments:"lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ]

    this.filterOrders = [
      {
        columnName:"ticketNo",
        columnLabel:"# de Ticket",
        value:"ascendant"
      },
      {
        columnName:"vacantName",
        columnLabel:"Vacante",
        value:"ascendant"
      },
      {
        columnName:"descriptionLink",
        columnLabel: "Descripcion",
        value:"ascendant"
      },
      {
        columnName:"recruiterName",
        columnLabel:"Reclutador",
        value:"ascendant"
      },
      {
        columnName:"status",
        columnLabel:"Estado",
        value:"ascendant"
      },
      {
        columnName:"recruiterStatus",
        columnLabel:"Estado del Reclutador",
        value:"ascendant"
      },
      {
        columnName:"comments",
        columnLabel:"Comentarios",
        value:"ascendant"
      }
    ]
  }

  updateVacantRecruiter(newVacantRecruiter:string,vacantId:number ){
    //TODO: REPLACE THIS CODE FOR A LOGIC THAT CONSUMES A SERVICE TO UPDATE THE FIELD
    let foundVacant = this.vacants.filter(vacant => vacant.id === vacantId);
    foundVacant[0].recruiter = newVacantRecruiter;
  }

  updateVacantStatus(newVacantStatus:string,vacantId:number) {
    //TODO: REPLACE THIS CODE FOR A LOGIC THAT CONSUMES A SERVICE TO UPDATE THE FIELD
    let foundVacant = this.vacants.filter(vacant => vacant.id === vacantId);
    foundVacant[0].recruiterStatus = newVacantStatus;
  }

  updateFilterOrder(event:MouseEvent, filterObject:any) {
    //TODO: Implement a service to update the table

    let item = event.currentTarget as HTMLElement;

    let updatedFilter = filterObject;

    updatedFilter.value = updatedFilter.value === "ascendant" ? "descendant" : "ascendant";
    console.log(updatedFilter);

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
