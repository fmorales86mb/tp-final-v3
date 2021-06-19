import { Component, Input, OnInit } from '@angular/core';
import { Examen } from 'src/app/02-models/examen';
import { IdModel } from 'src/app/02-models/idModel';

@Component({
  selector: 'app-examen-item',
  templateUrl: './examen-item.component.html',
  styleUrls: ['./examen-item.component.css']
})
export class ExamenItemComponent implements OnInit {

  @Input() item:IdModel<Examen>;

  constructor() { }

  ngOnInit(): void {
  }

}
