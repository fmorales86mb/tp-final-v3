import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { EspecialidadesService } from 'src/app/01-services/especialidades.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Especialidad } from 'src/app/02-models/especialidad';
import { Horario } from 'src/app/02-models/horario';
import { Mensaje } from 'src/app/02-models/mensaje';
import { Turno } from 'src/app/02-models/turno';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-nuevo-turno',
  templateUrl: './nuevo-turno.component.html',
  styleUrls: ['./nuevo-turno.component.css']
})
export class NuevoTurnoComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  pacientes:User[];
  pacienteSeleccionado:User;
  
  constructor(
    private autService:AuthService,
    private userService:UserService,
    private spinner: NgxSpinnerService,
    private turnoService:TurnoService
  ) {
    this.pacientes = [];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();

    this.spinner.show();
    this.userService.getPacientes().subscribe(items => {
      this.pacientes = items;
      this.spinner.hide();
    })
  }

  guardarTurno(turno:Turno){
    console.log(turno);
    this.spinner.show();

    this.turnoService.setItemWithId(turno, turno.docId)
    .then(()=>{
        this.mensaje = {
        tipo:TipoMje.Success,
        txt:"Turno agendado con éxito."
      }
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

  seleccionarUsuario(usuario:User){
    this.pacienteSeleccionado = usuario;
  }

}
