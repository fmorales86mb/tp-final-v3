import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';

@Component({
  selector: 'app-historia-item',
  templateUrl: './historia-item.component.html',
  styleUrls: ['./historia-item.component.css']
})
export class HistoriaItemComponent implements OnInit {

  @Input() item:HistoriaClinica;
  @Output() emitter = new EventEmitter<HistoriaClinica>();

  constructor() { }

  ngOnInit(): void {
  }

  clickDetalle(){
    this.emitter.emit(this.item);
  }

}
