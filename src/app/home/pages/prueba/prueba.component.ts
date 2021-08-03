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

  constructor(private pruebaService:PruebasService) { }

  ngOnInit(): void {
    this.pruebaService.items$.subscribe((items)=>{
      //console.log(items);
    });

    //this.pruebaService.filter("").
  }

  public addItem(){
    let item = {
      tipo:{
        coso:"valor",
        coso2:345
      },
      otroTipo:245,
      tip:"asdf"
    };

    let item3:Prueba = {
      tipo1:33,
      tipo2:555
    };

    let item2:P2 = {
      tipoNum:3,
      tipoPrueba:item3
    };

    this.pruebaService.addItem(item2);
  }

}
