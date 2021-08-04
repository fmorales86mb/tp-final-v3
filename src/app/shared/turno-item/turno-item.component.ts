import { Component, Input, OnInit } from '@angular/core';
import { Turno } from 'src/app/02-models/turno';

@Component({
  selector: 'app-turno-item',
  templateUrl: './turno-item.component.html',
  styleUrls: ['./turno-item.component.css']
})
export class TurnoItemComponent implements OnInit {
  @Input() item:Turno;
  
  constructor() { }

  ngOnInit(): void {
  }

}
