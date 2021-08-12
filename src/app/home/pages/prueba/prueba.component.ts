import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/01-services/historial.service';
import { PdfService } from 'src/app/01-services/pdf.service';
import { PruebasService } from 'src/app/01-services/pruebas.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { UserService } from 'src/app/01-services/user.service';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';
import { Turno } from 'src/app/02-models/turno';
import { User } from 'src/app/02-models/user';

export interface Prueba{
  tipo1:number;
  tipo2:number;
}

export interface P2{
  tipoPrueba: Prueba;
  tipoNum:number;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent implements OnInit {

  users:User[];
  historiales:HistoriaClinica[];
  turnos:Turno[];

  constructor(private pruebaService:PruebasService, 
    private userService:UserService,
    private pdfService:PdfService,
    private historiaService:HistorialService,
    private turnoService:TurnoService) { 
    this.users = [];
    this.historiales = [];
    this.turnos = [];
  }

  ngOnInit(): void {

    this.userService.getAll().subscribe(items => {
      this.users = items;
    });

    this.historiaService.getAll().subscribe(items => {
      this.historiales = items;
      console.log(this.historiales[0].fecha.toDate().toLocaleDateString());
    });

    this.turnoService.getTurnosTomados().subscribe(items => {
      this.turnos = items;
    })
  }

  printUsers(){
    this.pdfService.createPdfUsers(this.users, "Listado de Usuarios");
  }

  printHistorial(){
    this.pdfService.createPdfUserHistorial(this.historiales, "Historia Clínica", this.users[0]);
  }

  printTurnos(){
    this.pdfService.createPdfTurnos(this.turnos, "Listado de Turnos");
  }
}
