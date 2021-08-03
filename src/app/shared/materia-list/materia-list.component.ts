import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {

  @Input() items:any[];
  @Output() emitter = new EventEmitter<any>();
  
  constructor() { 
    this.items = [];
  }

  ngOnInit(): void {
  }

  seleccionarItem(item){
    this.emitter.emit(item);
  }

}
