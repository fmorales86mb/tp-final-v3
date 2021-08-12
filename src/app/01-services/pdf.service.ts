import { Injectable } from '@angular/core';
import { User } from '../02-models/user';
import jsPDF from 'jspdf';
import { HistoriaClinica } from '../02-models/historia-clinica';
import { Turno } from '../02-models/turno';
import { LogIngreso } from '../02-models/log';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  createPdfUsers(users:User[], title:string){
    const doc = new jsPDF();

    let data = users.map(item => ({
      Nombre: item.nombre,
      Apellido: item.apellido,
      Rol: this.mapRol(item.rol),
      Edad: item.edad
    }));

    let headers = [
      "Nombre", "Apellido", "Rol", "Edad"
    ];

    let hmap = this.getHeaders(headers, 65);

    this.setLogo(doc);
    this.setTitle(doc, title);
    this.setDate(doc);
    doc.table(10, 40, data, hmap);
    doc.save(title + ".pdf");
  }

  createPdfTurnos(turnos:Turno[], title:string){
    const doc = new jsPDF();

    let data = turnos.map(item => ({
      "Paciente": item.paciente.apellido, 
      "Especialidad": item.especialidad.nombre, 
      "Especialista": item.especialista.apellido, 
      "Fecha": item.fecha.toDate().toLocaleDateString(), 
      "Estado": this.mapEstado(item.estado)
    }));

    let headers = [
      "Paciente", "Especialidad", "Especialista", "Fecha", "Estado"
    ];

    let hmap = this.getHeaders(headers, 50);

    this.setLogo(doc);
    this.setTitle(doc, title);
    this.setDate(doc);
    doc.table(10, 40, data, hmap);
    doc.save(title + ".pdf");
  }

  createPdfLogs(logs:LogIngreso[], title:string){
    const doc = new jsPDF();

    let data = logs.map(item => ({
      "Nombre": item.usuario.nombre,
      "Apellido": item.usuario.apellido, 
      "Rol": this.mapRol(item.usuario.rol), 
      "Fecha": item.fecha.toDate().toLocaleDateString()
    }));

    let headers = [
      "Nombre", "Apellido", "Rol", "Fecha"
    ];

    let hmap = this.getHeaders(headers, 50);

    this.setLogo(doc);
    this.setTitle(doc, title);
    this.setDate(doc);
    doc.table(10, 40, data, hmap);
    doc.save(title + ".pdf");
  }

  createPdfUserHistorial(historial:HistoriaClinica[], title:string, paciente:User){
    const doc = new jsPDF('l');

    let data = historial.map(item => ({
      Fecha: item.fecha.toDate().toLocaleDateString(),
      Especialista: item.especialista.apellido,
      "Altura (cm)": item.alutra,
      "Peso (kg)": item.peso,
      "Temp (°C)": item.temperatura, 
      "Presión": item.presion,
      D1: `${item.dinamicos[0].clave} - ${item.dinamicos[0].valor}`,
      D2: `${item.dinamicos[1].clave} - ${item.dinamicos[1].valor}`,
      D3: `${item.dinamicos[2].clave} - ${item.dinamicos[2].valor}`,
      D4: `${item.dinamicos[3].clave} - ${item.dinamicos[3].valor}`,
      D5: `${item.dinamicos[4].clave} - ${item.dinamicos[4].valor}`,
      D6: `${item.dinamicos[5].clave} - ${item.dinamicos[5].valor}`
    }));

    let hmap = this.getHistoriaHeaders();
    let pacienteStr = `Paciente ${paciente.nombre} ${paciente.apellido}`

    this.setLogo(doc);
    this.setTitle(doc, title);
    this.setDate(doc);
    doc.text(pacienteStr, 225, 19);
    doc.table(10, 40, data, hmap);
    doc.save(title + ".pdf");
  }

  private getHeaders(headers:string[], width:number){
    return headers.map(h => ({
      'name': h,
      'prompt': h,
      'width':width,
      'align':'center',
      'padding':0
    }));
  }

  private setLogo(doc:any){
    var img = new Image()
    img.src = 'assets/images/apple-icon-180x180.png'
    doc.addImage(img, 'png', 10, 10, 15, 15)
  }

  private setTitle(doc:any, title:string){
    doc.setFont("times", "italic", 18)
    doc.setFontSize(40);
    doc.text(title, 30, 21);
    doc.setFontSize(12);
  }

  private setDate(doc:any){
    let dateStr:string = new Date().toLocaleDateString();
    doc.text("Fecha " + dateStr, 170, 19);
  }

  private mapRol(rol:number):string{
    if(rol == 1){
      return "Administrador";
    }
    if(rol == 2){
      return "Paciente";
    }
    if(rol == 3){
      return "Especialista";
    }
  }

  private mapEstado(estado:number):string{
    if(estado == 1){
      return "Libre";
    }
    if(estado == 2){
      return "Reservado";
    }
    if(estado == 3){
      return "Aceptado";
    }
    if(estado == 4){
      return "Realizado";
    }
    if(estado == 5){
      return "Rechazado";
    }
    if(estado == 6){
      return "Cancelado";
    }
  }

  private getHistoriaHeaders(){
    let wd : number = 29;
    let headers = [
      {
        'name': "Especialista",
        'prompt': "Especialista",
        'width':38,
        'align':'center',
        'padding':0
      },
      {
        'name': "Fecha",
        'prompt': "Fecha",
        'width':30,
        'align':'center',
        'padding':0
      },
      {
        'name': "Altura (cm)",
        'prompt': "Altura (cm)",
        'width':35,
        'align':'center',
        'padding':0
      },
      {
        'name': "Peso (kg)",
        'prompt': "Peso (kg)",
        'width':30,
        'align':'center',
        'padding':0
      },
      {
        'name': "Temp (°C)",
        'prompt': "Temp (°C)",
        'width':33,
        'align':'center',
        'padding':0
      },
      {
        'name': "Presión",
        'prompt': "Presión",
        'width':28,
        'align':'center',
        'padding':0
      },
      {
        'name': "D1",
        'prompt': "Otros",
        'width':wd,
        'align':'center',
        'padding':0
      },
      {
        'name': "D2",
        'prompt': "Otros",
        'width':wd,
        'align':'center',
        'padding':0
      },
      {
        'name': "D3",
        'prompt': "Otros",
        'width':wd,
        'align':'center',
        'padding':0
      },
      {
        'name': "D4",
        'prompt': "Otros",
        'width':wd,
        'align':'center',
        'padding':0
      },
      {
        'name': "D5",
        'prompt': "Otros",
        'width':wd,
        'align':'center',
        'padding':0
      },
      {
        'name': "D6",
        'prompt': "Otros",
        'width':wd,
        'align':'center',
        'padding':0
      }
    ];

    return headers;
  }
}
