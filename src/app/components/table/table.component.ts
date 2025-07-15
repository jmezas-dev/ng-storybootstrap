import { Component } from '@angular/core';
import {IVacantRow} from '../../interfaces/IVacantRow';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})

export default class TableComponent {
  public vacants : IVacantRow[];

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
}


/* HELP!
*  I was kidnapped and the boss is forcing me
*  to use angular and bootstrap 💀 */
