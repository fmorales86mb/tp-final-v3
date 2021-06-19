import { Component, Input, OnInit } from '@angular/core';
import { IdModel } from 'src/app/02-models/idModel';
import { Materia } from 'src/app/02-models/materia';

@Component({
  selector: 'app-materia-item',
  templateUrl: './materia-item.component.html',
  styleUrls: ['./materia-item.component.css']
})
export class MateriaItemComponent implements OnInit {

  @Input() item:IdModel<Materia>;

  constructor() { }

  ngOnInit(): void {
  }

}
