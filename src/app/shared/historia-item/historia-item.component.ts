import { Component, Input, OnInit } from '@angular/core';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';

@Component({
  selector: 'app-historia-item',
  templateUrl: './historia-item.component.html',
  styleUrls: ['./historia-item.component.css']
})
export class HistoriaItemComponent implements OnInit {

  @Input() item:HistoriaClinica;

  constructor() { }

  ngOnInit(): void {
  }

}
