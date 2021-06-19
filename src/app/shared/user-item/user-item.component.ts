import { Component, Input, OnInit } from '@angular/core';
import { IdModel } from 'src/app/02-models/idModel';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() item:IdModel<User>;
  
  constructor() { }

  ngOnInit(): void {
    //console.log(this.item);
  }

}
