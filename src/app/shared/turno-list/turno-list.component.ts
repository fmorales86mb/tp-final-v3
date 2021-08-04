import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Turno } from 'src/app/02-models/turno';

@Component({
  selector: 'app-turno-list',
  templateUrl: './turno-list.component.html',
  styleUrls: ['./turno-list.component.css']
})
export class TurnoListComponent implements OnInit, OnChanges {

  @Input() items:Turno[];
  @Output() emitter = new EventEmitter<Turno>();
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.items = changes.items.currentValue;
  }

  ngOnInit(): void {
  }

  seleccionarItem(item){
    this.emitter.emit(item);
  }

}
