import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Examen } from '../02-models/examen';
import { IdModel } from '../02-models/idModel';
import { User } from '../02-models/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ExamenService extends BaseService<Examen>{

  private StudentsSubCollName:string = "estudiantes";
  
  constructor(private fire:AngularFirestore) { 
    super(fire);
    this.setCollection("examenes");
  }

  setEstudiante(estudiante:IdModel<User>, examenId:string){
    return this.setItemInSubColl(examenId, this.StudentsSubCollName, estudiante);
  }

  getEstudiantes(examenId:string){
    return this.getSubColl(examenId, this.StudentsSubCollName);
  }
}
