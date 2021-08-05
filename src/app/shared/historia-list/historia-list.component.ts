import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';

@Component({
  selector: 'app-historia-list',
  templateUrl: './historia-list.component.html',
  styleUrls: ['./historia-list.component.css']
})
export class HistoriaListComponent implements OnInit, OnChanges {

  @Input() items:HistoriaClinica[];
  @Output() emitter = new EventEmitter<HistoriaClinica>();
  
  constructor() { 
    this.items = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.items = changes.items.currentValue;
  }

  ngOnInit(): void {
  }

  seleccionarItem(item){
    this.emitter.emit(item);
  }
}
