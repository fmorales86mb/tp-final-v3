import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {

  @Input() items:IdModel<Materia>[];
  @Output() emitter = new EventEmitter<IdModel<Materia>>();
  
  constructor() { 
    this.items = [];
  }

  ngOnInit(): void {
  }

  seleccionarItem(item:IdModel<Materia>){
    this.emitter.emit(item);
  }

}
