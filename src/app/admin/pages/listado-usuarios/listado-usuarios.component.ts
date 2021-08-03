import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:User[];
  usuarioSeleccionado:User;

  constructor(private autService:AuthService, 
      private userService:UserService,
      private spinner: NgxSpinnerService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.spinner.show();
    this.user = this.autService.GetCurrentUser();
    this.userService.getAll().subscribe((items) => {
      console.log(items);
      this.users = items;
      this.spinner.hide();
    });
  }

  seleccionarUsuario(usuario:User){
    this.mensaje = null;
    this.usuarioSeleccionado = usuario;    
  }

  habilitarEspecialista(habilitar:boolean){
    this.spinner.show();

    this.usuarioSeleccionado.activado = habilitar;
    
    this.userService.setItemWithId(this.usuarioSeleccionado, this.usuarioSeleccionado.docId)
    .then(()=>{
      let mje:string = habilitar? "habilitado": "deshabilitado";
      this.mensaje = {
        tipo:TipoMje.Success,
        txt:"Usuario " + mje + " con éxito."
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
