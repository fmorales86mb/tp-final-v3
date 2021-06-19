import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { MateriaService } from 'src/app/01-services/materia.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  users:IdModel<User>[];
  materias:IdModel<Materia>[];
  estudiantesDeLaMateria:IdModel<User>[];
  nuevosEstudiantes:IdModel<User>[];
  totalEstudiantesMateria:IdModel<User>[];
  materiaSeleccionada:IdModel<Materia>;

  constructor(private autService:AuthService, 
      private userService:UserService,
      private spinner: NgxSpinnerService,
      private materiaService: MateriaService) { 
    this.users=[];
    this.materias=[];
    this.estudiantesDeLaMateria=[];
    this.nuevosEstudiantes=[];
    this.totalEstudiantesMateria=[];
  }

  ngOnInit(): void {
    this.spinner.show();
    this.user = this.autService.GetCurrentUser();
    
    // this.userService.getItemByFilter("rol", Rol.Estudiante)
    // .then((querySnapshot)=>{
    //   querySnapshot.forEach((doc) => {
    //     let model:IdModel<User> = {
    //       id:doc.id,
    //       model:doc.data()
    //     };
    //     this.users.push(model);             
    //   });            
    // })
    // .catch((err)=>{
    //   this.mensaje = {
    //     tipo:TipoMje.Danger,
    //     txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde."
    //   }
    //   console.log(err);
    // })
    // .finally(()=>{
    //   this.spinner.hide();
    // })

    this.materiaService.snapshots.subscribe((items) => {
      this.materias = items;
    })
  }

  seleccionarEstudiante(estudiante:IdModel<User>){
    this.mensaje = null;
    if(this.materiaSeleccionada){            
      if(!this.totalEstudiantesMateria.some((item) => { return item.id == estudiante.id; })){
        this.nuevosEstudiantes.push(estudiante);
        this.totalEstudiantesMateria.push(estudiante);       
      }else{
        this.mensaje = {
          txt: "Ya se encuentra inscripto en esta materia.",
          tipo: TipoMje.Info
        };          
      }
    }
    else{
      this.mensaje = {
        txt: "Debe seleccionar una materia primero.",
        tipo: TipoMje.Info
      };  
    }
  }

  seleccionarMateria(materia:IdModel<Materia>){    
    this.mensaje = null;
    this.spinner.show();
    this.estudiantesDeLaMateria = [];
    this.totalEstudiantesMateria = [];
    this.nuevosEstudiantes =[];
    this.materiaSeleccionada = materia;
    
    this.materiaService.getEstudiantes(materia.id)
    .then((items) => {
      items.forEach((item)=>{
        const model:IdModel<User>={
          id:item.id,
          model:<User>item.data()
        };

        this.estudiantesDeLaMateria.push(model);
        this.totalEstudiantesMateria.push(model);
      })
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

  guardarClick(){
    this.mensaje = null;    

    this.totalEstudiantesMateria.forEach((estudiante) => {
      this.spinner.show();
      this.materiaService.setEstudiante(estudiante, this.materiaSeleccionada.id)
      .then(()=>{
        this.userService.setMateriaToUser(estudiante.id, this.materiaSeleccionada)
        this.mensaje = {
          txt: "Inscripción exitosa",
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
        this.spinner.hide();
      });
    });

    this.nuevosEstudiantes =[];
  }
}
