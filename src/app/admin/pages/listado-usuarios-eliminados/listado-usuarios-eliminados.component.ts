import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { DeletedUsersService } from 'src/app/01-services/deleted-users.service';
import { MateriaService } from 'src/app/01-services/materia.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { IdModel } from 'src/app/02-models/idModel';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-listado-usuarios-eliminados',
  templateUrl: './listado-usuarios-eliminados.component.html',
  styleUrls: ['./listado-usuarios-eliminados.component.css']
})
export class ListadoUsuariosEliminadosComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:IdModel<User>[];
  usuarioSeleccionado:IdModel<User>;

  constructor(private autService:AuthService,       
      private deletedUserService:DeletedUsersService,      
      private spinner: NgxSpinnerService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();
    this.quitarFiltro();
  }

  aplicarFiltro(rol:Rol){    
    this.mensaje = null;
    this.spinner.show();

    this.deletedUserService.getItemByFilter("rol", rol)
    .then((querySnapshot)=>{
      this.users = [];
      querySnapshot.forEach((doc) => {
        let model:IdModel<User>={
          id:doc.id,
          model:doc.data()
        };
        this.users.push(model);        
      });            
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
    });
  }

  quitarFiltro(){
    this.mensaje = null;
    this.spinner.show();    

    this.deletedUserService.snapshots.subscribe((items) => {
      this.users = items;
      this.spinner.hide();
    });
  }

  seleccionarUsuario(usuario:IdModel<User>){
    this.usuarioSeleccionado = usuario;    
  }
}
