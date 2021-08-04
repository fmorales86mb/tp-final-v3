import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Especialidad } from '../02-models/especialidad';
import { User } from '../02-models/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(private fire:AngularFirestore) { 
    super(fire, "users");    
  }

  getUserByEmail(email:string){
    return this.getByFilter("email", email);
  }

  getEspecialistas(){
    return this.getByFilter("rol", 3);
  }

  getPacientes(){
    return this.getByFilter("rol", 2);
  }

  getEspecialistasByEspecialidad(especialidad:Especialidad){

    return this.fire.collection<User>("users", ref => ref 
      .where('rol','==',3)
      .where('especialidades','array-contains', especialidad))
      .valueChanges({idField: "docId"});
  }
 }
