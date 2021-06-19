import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../02-models/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class DeletedUsersService extends BaseService<User>{

  constructor(private fire:AngularFirestore) { 
    super(fire);
    this.setCollection("deleted-users");
  }
}
