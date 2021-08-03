import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia-item',
  templateUrl: './materia-item.component.html',
  styleUrls: ['./materia-item.component.css']
})
export class MateriaItemComponent implements OnInit {

  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

}
