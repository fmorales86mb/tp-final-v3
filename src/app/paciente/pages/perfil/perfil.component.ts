import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/01-services/auth.service';
import { Mensaje } from 'src/app/02-models/mensaje';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user:User;
  mensaje:Mensaje;
  
  constructor(
    private autService:AuthService
  ) { }

  ngOnInit(): void {
    this.mensaje = null;
    this.user = this.autService.GetCurrentUser();
  }
}
