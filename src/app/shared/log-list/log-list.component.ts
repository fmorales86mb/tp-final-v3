import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LogIngreso } from 'src/app/02-models/log';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit, OnChanges {

  @Input() items:LogIngreso[];

  constructor() { 
    this.items = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.items = changes.items.currentValue;
  }

  ngOnInit(): void {
  }

}
