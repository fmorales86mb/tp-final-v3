import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css']
})
export class MateriaDetalleComponent implements OnInit {

  @Input() item:IdModel<Materia>;
  @Input() estudiantes:IdModel<User>[];
  @Output() emitter= new EventEmitter<IdModel<User>>();

  constructor() {     
  }

  ngOnInit(): void { 
  }

  seleccionarUsuario(usuario:IdModel<User>){
    this.emitter.emit(usuario);
  }

}
