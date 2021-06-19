import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Examen } from '../02-models/examen';
import { IdModel } from '../02-models/idModel';
import { Materia } from '../02-models/materia';
import { User } from '../02-models/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(private fire:AngularFirestore) { 
    super(fire);
    this.setCollection("users");
  }

  async getUserByEmail(email:string){
    return this.getItemByFilter("email", email).then();
  }

  getColl(){
    return this.itemsCollection;
  }

  getEspecialistas(){
    return this.getItemByFilter("rol", 3);
  }

  setMateriaToUser(idUser:string, materia:IdModel<Materia>){
    return this.setItemInSubColl(idUser, "materias", materia);
  }

  setExamenToUser(idUser:string, examen:IdModel<Examen>){
    return this.setItemInSubColl(idUser, "examenes", examen);
  }

  getMaterias(idUser:string){
    return this.getSubColl(idUser, "materias");
  }

  getExamenes(idUser:string){
    return this.getSubColl(idUser, "examenes");
  }
}
