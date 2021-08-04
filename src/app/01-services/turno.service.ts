import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EstadoTurno } from '../02-models/enums/turno-estado-enum';
import { Especialidad } from '../02-models/especialidad';
import { Horario } from '../02-models/horario';
import { Turno } from '../02-models/turno';
import { User } from '../02-models/user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TurnoService extends BaseService<Turno> {

  private turnos:Turno[];

  constructor(private fire:AngularFirestore) { 
    super(fire, "turnos");   
    this.turnos = []; 
  }

  createTurnosDeEspecialista(horarios:Horario[], especialista:User, especialidad:Especialidad){
    horarios.forEach(horarioItem => {
      this.getTurnosDelHorario(horarioItem, especialista, especialidad);
    });  
    
    return this.guardarTurnos();
  }

  getTurnosByEspecialistaEspecialidad(userId:string, espeId:string){
    return this.fire.collection<Turno>("turnos", ref => ref
      .where("especialista.docId", '==', userId)
      .where("especialidad.docId", '==', espeId)
      .orderBy("fecha", "asc"))
      .valueChanges({idField: "docId"});
  }

  getTurnosTomados(){
    return this.getByFilterAndOrder("estado", EstadoTurno.Reservado, "fecha", true);
  }

  getTurnosByEspecialistaEspecialidadLibres(userId:string, espeId:string){
    return this.fire.collection<Turno>("turnos", ref => ref
      .where("especialista.docId", '==', userId)
      .where("especialidad.docId", '==', espeId)
      .where("estado", '==', EstadoTurno.Libre)
      .orderBy("fecha", "asc"))
      .valueChanges({idField: "docId"});
  }

  private getTurnosDelHorario(horario:Horario, especialista:User, especialidad:Especialidad){
    let date = new Date();

    for(let i = 0; i<30; i++){      
      if(date.getDay() == horario.dayOfWeek){
        this.getTurnosDelHorarioByDate(horario, date, especialista, especialidad);
      }

      date.setDate(date.getDate() + 1);
    }
  }

  private getTurnosDelHorarioByDate(horario:Horario, date:Date, especialista:User, especialidad:Especialidad){
    let [hD, mD] = horario.desde.split(':');
    let [hH, mH] = horario.hasta.split(':');    

    let horaDesde = parseInt(hD);
    let horaHasta = parseInt(hH);
    let minutoDesde = parseInt(mD);
    let minutoHasta = parseInt(mH);
    let dateHasta = new Date(date);
    dateHasta.setHours(horaHasta, minutoHasta, 0);

    var flag:boolean = true;    
    let d = new Date(date); 
    d.setHours(horaDesde, minutoDesde, 0);    

    while(flag){           
      this.turnos.push(this.getTurno(d, especialista, especialidad));
      d = new Date(this.addMin(d));
      
      if(d.getTime() >= dateHasta.getTime()){
        flag = false;
      }      
    }
  }

  private getTurno(date: Date, especialista:User, especialidad:Especialidad){
    let turno:Turno = {
      especialista : especialista,
      fecha:date,
      especialidad: especialidad,
      estado:EstadoTurno.Libre
    }

    return turno;
  }

  private addMin(date:Date){
    let da = new Date(date);
    let minToAdd = 30;
    let min = da.getMinutes();
    da.setMinutes(min + minToAdd);
    
    return da;
  }

  private guardarTurnos(){    
    let batch = this.fire.firestore.batch();
    
    this.turnos.forEach(turno => {
      let ref = this.fire.collection<Turno>("turnos").doc().ref;
      batch.set(ref, turno);
    })
    
    return batch.commit();    
  }
}
