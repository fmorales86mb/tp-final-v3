import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LogIngreso } from '../02-models/log';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LogService extends BaseService<LogIngreso>{

  constructor(private fire:AngularFirestore) { 
    super(fire, "log");    
  }
}
