import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';

@Component({
  selector: 'app-historia-detalle',
  templateUrl: './historia-detalle.component.html',
  styleUrls: ['./historia-detalle.component.css']
})
export class HistoriaDetalleComponent implements OnInit, OnChanges {

  @Input() item:HistoriaClinica;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.item = changes.item.currentValue;
  }

  ngOnInit(): void {
  }

}
