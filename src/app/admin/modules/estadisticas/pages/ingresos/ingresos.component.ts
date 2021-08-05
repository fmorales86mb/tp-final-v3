import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/01-services/auth.service';
import { LogService } from 'src/app/01-services/log.service';
import { LogIngreso } from 'src/app/02-models/log';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  user:User;
  logs:LogIngreso[];
  mensaje:Mensaje;
  data:any[];
  labels:any[];
  titleGrafico:string;
  chartType:string;

  constructor(
    private autService:AuthService,
    private logService:LogService,
  ) { 
    this.logs = [];
    this.data = [];
    this.labels=[];
    this.titleGrafico = "Ingresosos por Usuario";    
  }

  ngOnInit(): void {
    this.user = this.autService.GetCurrentUser();

    this.logService.getLogs().subscribe(items => {
      this.logs = items;    
      this.procesarDatos(); 
    })
  }

  private procesarDatos(){
    this.logs.forEach(log => {
      let nombreCompleto:string =  log.usuario.nombre + ' ' + log.usuario.apellido;
      this.getName(nombreCompleto);
      
      let i = this.labels.indexOf(nombreCompleto);
      this.data[i]++;
    })
  }

  private getName(nombreCompleto:string){    
    if(!this.labels.includes(nombreCompleto)){      
      this.labels.push(nombreCompleto); 
      this.data.push(0);     
    }
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
