import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HistoriaClinica } from '../02-models/historia-clinica';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HistorialService extends BaseService<HistoriaClinica> {

  constructor(private fire:AngularFirestore) { 
    super(fire, "historial");    
  }

  getByPaciente(id:string){
    return this.getByFilterAndOrder("paciente.docId", id, "fecha", true);
  }
}
