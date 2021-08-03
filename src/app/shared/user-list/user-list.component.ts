import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() items:User[];
  @Output() emitter = new EventEmitter<User>();
  
  constructor() { 
    this.items = [];
  }

  ngOnInit(): void {
    //console.log(this.items);
  }

  seleccionarItem(item:User){
    console.log(item);
    this.emitter.emit(item);
  }

}
