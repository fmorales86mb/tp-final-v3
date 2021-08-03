import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-item-nota',
  templateUrl: './user-item-nota.component.html',
  styleUrls: ['./user-item-nota.component.css']
})
export class UserItemNotaComponent implements OnInit {

  @Input() item:User;
  @Input() examen:any;
  nota:number;
  @Output() emitter = new EventEmitter<User>();
  
  constructor(    
  ) { }

  ngOnInit(): void {
    //console.log(this.item);
  }

  guardarNota(){
    //this.item.model.nota = this.nota;    
    this.emitter.emit(this.item);
  }

}
