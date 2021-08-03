import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-materia-detalle',
  templateUrl: './materia-detalle.component.html',
  styleUrls: ['./materia-detalle.component.css']
})
export class MateriaDetalleComponent implements OnInit {

  @Input() item:any;
  @Input() estudiantes:User[];
  @Output() emitter= new EventEmitter<User>();

  constructor() {     
  }

  ngOnInit(): void { 
  }

  seleccionarUsuario(usuario:User){
    this.emitter.emit(usuario);
  }

}
