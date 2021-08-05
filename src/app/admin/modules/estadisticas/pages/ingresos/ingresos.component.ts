import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/01-services/auth.service';
import { LogService } from 'src/app/01-services/log.service';
import { LogIngreso } from 'src/app/02-models/log';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  user:User;
  logs:LogIngreso[];
  mensaje:Mensaje;
  data:any[];
  labels:any[];

  constructor(
    private autService:AuthService,
    private logService:LogService,
  ) { 
    this.logs = [];
    this.data = [];
    this.labels=[];
  }

  ngOnInit(): void {
    this.user = this.autService.GetCurrentUser();

    this.logService.getLogs().subscribe(items => {
      this.logs = items;    
      this.procesarDatos(); 
    })
  }

  private procesarDatos(){
    this.logs.forEach(log => {
      let nombreCompleto:string =  log.usuario.nombre + log.usuario.apellido;
      this.getName(nombreCompleto);
      
      let i = this.labels.indexOf(nombreCompleto);
      this.data[i]++;
    })
  }

  private getName(nombreCompleto:string){    
    if(!this.labels.includes(nombreCompleto)){      
      this.labels.push(nombreCompleto); 
      this.data.push(0);     
    }
  }

}
