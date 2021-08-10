import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Encuesta } from 'src/app/02-models/encuesta';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  valor1:number;
  valor2:number;
  valor3:number;
  @Output() emitter = new EventEmitter<Encuesta>();

  constructor(
  ) { 
    this.valor1 = 5;
    this.valor2 = 5;
    this.valor3 = 5;
  }

  ngOnInit(): void {

  }

  guardar(){
    this.valor1 = 5;
    this.valor2 = 5;
    this.valor3 = 5;
  }
}
