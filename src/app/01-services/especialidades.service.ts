import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Especialidad } from '../02-models/especialidad';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService extends BaseService<Especialidad>{

  constructor(private fire:AngularFirestore) { 
    super(fire);
    this.setCollection("especialidades");
  }
}
