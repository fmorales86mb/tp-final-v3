import { Component, Input, OnInit } from '@angular/core';
import { LogIngreso } from 'src/app/02-models/log';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.css']
})
export class LogItemComponent implements OnInit {

  @Input() item:LogIngreso;

  constructor() { }

  ngOnInit(): void {
  }

}
