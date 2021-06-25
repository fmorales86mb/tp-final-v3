import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { DeletedUsersService } from 'src/app/01-services/deleted-users.service';
import { MateriaService } from 'src/app/01-services/materia.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { IdModel } from 'src/app/02-models/idModel';
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
  users:IdModel<User>[];
  usuarioSeleccionado:IdModel<User>;

  constructor(private autService:AuthService, 
      private userService:UserService,
      private deletedUserService:DeletedUsersService,
      private materiaService:MateriaService,
      private spinner: NgxSpinnerService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.spinner.show();
    this.user = this.autService.GetCurrentUser();
    this.userService.snapshots.subscribe((items) => {
      this.users = items;
      this.spinner.hide();
    });
  }

  seleccionarUsuario(usuario:IdModel<User>){
    this.mensaje = null;
    this.usuarioSeleccionado = usuario;    
  }

  habilitarEspecialista(habilitar:boolean){
    this.spinner.show();

    this.usuarioSeleccionado.model.activado = habilitar;
    
    this.userService.setItemWithId(this.usuarioSeleccionado.model, this.usuarioSeleccionado.id)
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
