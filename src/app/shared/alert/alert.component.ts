import { Component, Input, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/02-models/mensaje';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() mensaje:Mensaje;
  tipoAlert:string;

  constructor() { }

  ngOnInit(): void {
    if(this.mensaje.tipo){
      this.tipoAlert = "alert alert-" + this.mensaje.tipo;
    }
    else{
      this.tipoAlert = "alert alert-warning";
    }
  }

}
