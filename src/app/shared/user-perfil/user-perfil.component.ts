import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  @Input() user:User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
