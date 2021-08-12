import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { PdfService } from 'src/app/01-services/pdf.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Mensaje } from 'src/app/02-models/mensaje';
import { Turno } from 'src/app/02-models/turno';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  turnos:Turno[];
  turnosFiltrados:Turno[];
  turnoSeleccionado:Turno;

  constructor(
    private autService:AuthService,
    private spinner: NgxSpinnerService,
    private turnoService:TurnoService,
    private pdfService:PdfService
  ) { 
    this.turnos = [];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();

    this.spinner.show();
    this.turnoService.getTurnosTomados().subscribe(items => {
      this.turnos = items;
      this.turnosFiltrados = this.turnos;      
      this.spinner.hide();
    })
  }

  onSearchChange(searchValue: string): void {  
    this.turnosFiltrados = this.turnos.filter(t => {
      if(t.especialidad.nombre.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      t.especialista.nombre.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      t.especialista.apellido.toLowerCase().startsWith(searchValue.toLowerCase())){
        return t;
      }
    })
    console.log(this.turnosFiltrados);
  }

  seleccionarItem(turno:Turno){
    this.mensaje = null;
    this.turnoSeleccionado = turno;
  }

  updateTurno(turno:Turno){
    this.spinner.show();
    //console.log(turno);

    this.turnoService.setItemWithId(turno, turno.docId)
    .then(()=>{
      this.mensaje = {
        tipo:TipoMje.Success,
        txt:"Turno actualizado con éxito."
      }
      this.turnoSeleccionado = null;
    })
    .catch((err)=>{
      this.mensaje = {
        tipo:TipoMje.Danger,
        txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde."
      }
      console.log(err);
    })
    .finally(()=>{
      this.spinner.hide();
    })
  }

  print(){
    this.pdfService.createPdfTurnos(this.turnos, "Listado de Turnos");
  }

}
