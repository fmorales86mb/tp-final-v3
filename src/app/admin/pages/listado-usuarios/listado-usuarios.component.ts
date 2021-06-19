import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { DeletedUsersService } from 'src/app/01-services/deleted-users.service';
import { MateriaService } from 'src/app/01-services/materia.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';
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
    this.user = this.autService.GetCurrentUser();
    this.quitarFiltro();
  }

  aplicarFiltro(rol:Rol){    
    this.mensaje = null;
    this.spinner.show();

    this.userService.getItemByFilter("rol", rol)
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

    this.userService.snapshots.subscribe((items) => {
      this.users = items;
      this.spinner.hide();
    });
  }

  seleccionarUsuario(usuario:IdModel<User>){
    this.usuarioSeleccionado = usuario;    
  }

  async borrarEstudiante(){
    this.mensaje = null;    
    this.spinner.show();

    await this.deletedUserService.setItemWithId(this.usuarioSeleccionado.model, this.usuarioSeleccionado.id);
    await this.borrarEstudianteDeMaterias();

    this.userService.deleteItem(this.usuarioSeleccionado.id)
    .then(()=>{
      this.mensaje = {
        txt: "Se borró al estudiante de manera exitosa.",
        tipo: TipoMje.Success
      };  
    })
    .catch((err)=>{
      this.mensaje = {
        tipo:TipoMje.Danger,
        txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde."
      } 
      console.log(err);
    })
    .finally(()=>{
      this.usuarioSeleccionado = null;
      this.spinner.hide();
    });    
  }

  private async borrarEstudianteDeMaterias(){
    const items = await this.userService.getMaterias(this.usuarioSeleccionado.id);
    items.forEach(async (item) => {
        await this.materiaService.delteEstudianteDeMateria(item.id, this.usuarioSeleccionado.id);
    });    
  }
}
