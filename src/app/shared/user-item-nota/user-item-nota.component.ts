import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Examen } from 'src/app/02-models/examen';
import { IdModel } from 'src/app/02-models/idModel';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-item-nota',
  templateUrl: './user-item-nota.component.html',
  styleUrls: ['./user-item-nota.component.css']
})
export class UserItemNotaComponent implements OnInit {

  @Input() item:IdModel<User>;
  @Input() examen:IdModel<Examen>;
  nota:number;
  @Output() emitter = new EventEmitter<IdModel<User>>();
  
  constructor(    
  ) { }

  ngOnInit(): void {
    //console.log(this.item);
  }

  guardarNota(){
    this.item.model.nota = this.nota;    
    this.emitter.emit(this.item);
  }

}
