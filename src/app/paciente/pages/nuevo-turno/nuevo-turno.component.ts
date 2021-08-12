import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
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
  showCaptcha:boolean;
  nuevoTurno:Turno;
  captchaEnabled:boolean;

  constructor(
    private autService:AuthService,
    private turnoService:TurnoService,
    private spinner: NgxSpinnerService
  ) { 
    this.showCaptcha = false;
    this.captchaEnabled = this.autService.captchaEnabled;
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();
  }

  guardarTurnoClick(turno:Turno){
    this.mensaje = null;
    this.nuevoTurno = turno;
    this.showCaptcha = true;
  }

  handlerCaptcha(result:boolean){
    if(result){
      this.guardarTurno(this.nuevoTurno);
    }
    else{
      this.nuevoTurno = null; 
      this.mensaje = {
        tipo:TipoMje.Warning,
        txt:"No ingresó el el texto correcto"
      }    
    }
    this.showCaptcha = false;
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
}
