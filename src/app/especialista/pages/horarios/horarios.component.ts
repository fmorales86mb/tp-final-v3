import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Especialidad } from 'src/app/02-models/especialidad';
import { Horario } from 'src/app/02-models/horario';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  
  constructor(
    private autService:AuthService,
    private userService:UserService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();
  }

  guardarHorario(espe:Especialidad, horarios:Horario[]){
    this.user.especialidades.forEach(e => {
      if(e.docId == espe.docId){
        e.horarios = horarios;
      }
    })  
    
    this.spinner.show();
    this.userService.setItemWithId(this.user, this.user.docId)
    .then(async (res)=>{
      this.mensaje = {
        txt:"El horario fue guardado con éxito",
        tipo:TipoMje.Success
      };
    })
    .catch(()=>{
      this.mensaje = {
        txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde.",
        tipo:TipoMje.Danger
      };
    })
    .finally(()=>{
      this.spinner.hide();
    })
  }
}
