import { Component, Input, OnInit } from '@angular/core';
import { IdModel } from 'src/app/02-models/idModel';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnInit {

  @Input() item:IdModel<User>;

  constructor() { }

  ngOnInit(): void {
  }

}
