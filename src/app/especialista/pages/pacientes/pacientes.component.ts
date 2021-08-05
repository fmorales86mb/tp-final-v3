import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { HistorialService } from 'src/app/01-services/historial.service';
import { UserService } from 'src/app/01-services/user.service';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:User[];
  usuarioSeleccionado:User;
  historial:HistoriaClinica[];

  constructor(private autService:AuthService, 
      private spinner: NgxSpinnerService,
      private historialService:HistorialService) { 
    this.users=[];
    this.historial = [];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.spinner.show();
    this.user = this.autService.GetCurrentUser();
    
    this.historialService.getByEspecialista(this.user.docId).subscribe((items) => {
      this.users = [];
      let aux = [];
      items.forEach(i =>{
        aux.push(i.paciente);
      });

      this.users = aux.filter(this.onlyUnique);
      this.spinner.hide();
    });
  }

  seleccionarUsuario(usuario:User){
    this.mensaje = null;
    this.usuarioSeleccionado = usuario;  
    
    this.historialService.getByPaciente(this.usuarioSeleccionado.docId).subscribe(items =>{
      this.historial = items;
    })
  }

  private onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
}
