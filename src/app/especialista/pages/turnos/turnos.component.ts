import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { PdfService } from 'src/app/01-services/pdf.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { EstadoTurno } from 'src/app/02-models/enums/turno-estado-enum';
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
    this.turnoService.getTurnosByEspecialistaTomados(this.user.docId).subscribe(items => {
      this.turnos = items;
      this.turnosFiltrados = this.turnos;
      console.log(this.turnos);
      this.spinner.hide();
    })
  }

  onSearchChange(searchValue: string): void {  
    this.turnosFiltrados = this.turnos.filter(t => {
      if(t.especialidad.nombre.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      t.paciente?.nombre.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      t.paciente?.apellido.toLowerCase().startsWith(searchValue.toLowerCase()) ||
      this.filterHistorial(t, searchValue)){
        return t;
      }
    })    
  }

  filterHistorial(turno:Turno, searchValue:string): boolean{
    if(turno.hasHistoria){
      let historia =  turno.historia;
      return (
        historia.alutra.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.peso.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.presion.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.temperatura.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[0].clave.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[0].valor.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[1].clave.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[1].valor.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[2].clave.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[2].valor.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[3].clave.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[3].valor.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[4].clave.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[4].valor.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[5].clave.toString().toLowerCase().startsWith(searchValue.toLowerCase()) ||
        historia.dinamicos[5].valor.toString().toLowerCase().startsWith(searchValue.toLowerCase())
      )
    }
  } 

  seleccionarItem(turno:Turno){
    this.mensaje = null;
    this.turnoSeleccionado = turno;
  }

  updateTurno(turno:Turno){
    this.spinner.show();

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
