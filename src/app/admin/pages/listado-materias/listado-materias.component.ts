import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { MateriaService } from 'src/app/01-services/materia.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-listado-materias',
  templateUrl: './listado-materias.component.html',
  styleUrls: ['./listado-materias.component.css']
})
export class ListadoMateriasComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:IdModel<User>[];
  materias:IdModel<Materia>[];

  constructor(private autService:AuthService, 
      private spinner: NgxSpinnerService,
      private materiaService: MateriaService) { 
    this.users=[];
    this.materias=[];
  }

  ngOnInit(): void {
    this.spinner.show();
    this.user = this.autService.GetCurrentUser();

    this.materiaService.snapshots.subscribe((items) => {
      this.materias = items;
      this.spinner.hide();
    })
  }

  seleccionarMateria(materia:IdModel<Materia>){
    this.spinner.show();
    this.users= [];

    this.materiaService.getEstudiantes(materia.id)
    .then((items) => {
      items.forEach((item)=>{
        const model:IdModel<User>={
          id:item.id,
          model:<User>item.data()
        };

        this.users.push(model);
      })
    })
    .catch((err) => {
      this.mensaje = {
        tipo:TipoMje.Danger,
        txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde."
      }
      console.log(err);      
    })
    .finally(() => {
      this.spinner.hide();
    })
  }
}
