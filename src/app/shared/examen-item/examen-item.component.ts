import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-examen-item',
  templateUrl: './examen-item.component.html',
  styleUrls: ['./examen-item.component.css']
})
export class ExamenItemComponent implements OnInit {

  @Input() item:any;

  constructor() { }

  ngOnInit(): void {
  }

}
