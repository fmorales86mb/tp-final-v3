import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
 }
