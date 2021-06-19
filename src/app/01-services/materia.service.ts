import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Materia } from '../02-models/materia';
import { BaseService } from './base.service';
import { IdModel } from '../02-models/idModel';
import { User } from '../02-models/user';

@Injectable({
  providedIn: 'root'
})
export class MateriaService extends BaseService<Materia> {

  private CollName:string = "materias";
  private StudentsSubCollName:string = "estudiantes";

  constructor(private fire:AngularFirestore) { 
    super(fire);
    this.setCollection(this.CollName);
  }    
  
  getMateriasByDocente(docenteEmail:string){
    return this.getItemByFilter("docente.email", docenteEmail);
  }

  setEstudiante(estudiante:IdModel<User>, materiaId:string){
    return this.setItemInSubColl(materiaId, this.StudentsSubCollName, estudiante);
  }

  getEstudiantes(materiaId:string){
    return this.getSubColl(materiaId, this.StudentsSubCollName);
  }

  delteEstudianteDeMateria(materiaId:string, estudianteId:string){
    return this.deleteItemOfSubColl(materiaId, this.StudentsSubCollName, estudianteId);
  }
}
