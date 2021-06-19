import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdModel } from 'src/app/02-models/idModel';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() items:IdModel<User>[];
  @Output() emitter = new EventEmitter<IdModel<User>>();
  
  constructor() { 
    this.items = [];
  }

  ngOnInit(): void {
    //console.log(this.items);
  }

  seleccionarItem(item:IdModel<User>){
    this.emitter.emit(item);
  }

}
