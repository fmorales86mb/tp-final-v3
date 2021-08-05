import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { Mensaje } from 'src/app/02-models/mensaje';
import { Turno } from 'src/app/02-models/turno';
import { User } from 'src/app/02-models/user';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EstadoTurno } from 'src/app/02-models/enums/turno-estado-enum';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  user:User;
  turnos:Turno[];
  turnosPorEspecialista:any[]
  mensaje:Mensaje;
  data1:number[];
  barData1:ChartDataSets[];
  barData3:ChartDataSets[];
  lineData2:ChartDataSets[];
  data2:number[];
  data3:number[];
  data4:number[];
  labels1:any[];
  labels2:any[];
  labels3:any[];
  labels4:any[];
  titleGrafico:string[];
  chartType:string[];

  constructor(
    private autService:AuthService,    
    private spinner: NgxSpinnerService,
    private turnosService:TurnoService
  ) { 
    this.initData();
    this.titleGrafico = [
      "Turnos por Especialidad",
      "Turnos por Día",
      "Turnos Solicitados por Especialista",
      "Turnos Finalizados por Especialista"
    ];
  }

  ngOnInit(): void {
    this.user = this.autService.GetCurrentUser();

    this.spinner.show();
    this.turnosService.getTurnosTomados().subscribe(items => {
      this.initData();
      this.turnos = items;      
      this.procesarDatos1();
      this.procesarDatos2();
      this.procesarDatos3();
      this.spinner.hide();
    });
    
  }

  private procesarDatos1(){
    this.turnos.forEach(turno => {
      let espeName:string =  turno.especialidad.nombre;
      this.getName1(espeName);
      
      let i = this.labels1.indexOf(espeName);
      this.data1[i]++;
    })

    this.barData1.push({ data: this.data1, label: 'Cantidad de Turnos' });
  }
  private getName1(espeName:string){    
    if(!this.labels1.includes(espeName)){      
      this.labels1.push(espeName); 
      this.data1.push(0);     
    }
  }

  private procesarDatos2(){
    this.turnos.forEach(turno => {
      let fecha:string =  turno.fecha.toDate().toLocaleDateString();      
      this.getName2(fecha);
      
      let i = this.labels2.indexOf(fecha);
      this.data2[i]++;
    })

    this.lineData2.push({ data: this.data2, label: 'Cantidad de Turnos por Día' });
  }
  private getName2(fecha:string){    
    if(!this.labels2.includes(fecha)){      
      this.labels2.push(fecha); 
      this.data2.push(0);     
    }
  }

  private procesarDatos3(){
    this.turnos.forEach(turno => {
      let especialista:string =  turno.especialista.nombre + ' ' +  turno.especialista.apellido;      
      this.getName3(especialista);
      
      let i = this.labels3.indexOf(especialista);
      if(turno.estado == EstadoTurno.Aceptado || turno.estado == EstadoTurno.Cancelado || turno.estado == EstadoTurno.Rechazado || turno.estado == EstadoTurno.Reservado){
        this.data3[i]++;
      }else if(turno.estado == EstadoTurno.Realizado){
        this.data4[i]++;
      }            
    });

    this.barData3.push({ data: this.data3, label: 'Turnos Solicitados' });
    this.barData3.push({ data: this.data4, label: 'Turnos Finalizados' });

    console.log(this.barData3);
  }
  private getName3(nombre:string){    
    if(!this.labels3.includes(nombre)){      
      this.labels3.push(nombre); 
      this.data3.push(0);
      this.data4.push(0);     
    }
  }

  private initData(){
    this.turnos = [];
    this.data1 = [];
    this.barData1 = [];        
    this.data2 = [];
    this.lineData2 = [];
    this.data3 = [];
    this.data4 = [];
    this.barData3 = [];
    this.labels1 = [];
    this.labels2 = [];
    this.labels3 = [];    
  }

  pdf(html:string){
    let header:string = new Date().toLocaleDateString();
      // Extraemos el
      const DATA = document.getElementById(html);
      const doc = new jsPDF('p', 'pt', 'a4');  
      
      const options = {
        background: 'white',
        scale: 3
      };
      html2canvas(DATA, options).then((canvas) => {
  
        const img = canvas.toDataURL('image/PNG');
  
        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.text(" - ", 10, 10);
        doc.text(header, 10, 10);
        doc.text(" - ", 10, 10);
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');          
        return doc;
      }).then((docResult) => {
        docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
      });
  }
}
