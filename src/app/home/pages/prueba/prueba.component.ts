import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/01-services/pruebas.service';

export interface Prueba{
  tipo1:number;
  tipo2:number;
}

export interface P2{
  tipoPrueba: Prueba;
  tipoNum:number;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent implements OnInit {

  str:string;
  constructor(private pruebaService:PruebasService) { 
    this.str="perross"
  }

  ngOnInit(): void {


  }


}
