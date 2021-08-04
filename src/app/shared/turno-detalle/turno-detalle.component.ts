import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { EstadoTurno } from 'src/app/02-models/enums/turno-estado-enum';
import { Turno } from 'src/app/02-models/turno';

@Component({
  selector: 'app-turno-detalle',
  templateUrl: './turno-detalle.component.html',
  styleUrls: ['./turno-detalle.component.css']
})
export class TurnoDetalleComponent implements OnInit, OnChanges {

  @Input() item:Turno;
  @Input() rol:Rol;
  @Output() emitter = new EventEmitter<Turno>();
  confirmar:boolean;
  cancelar:boolean;
  motivo:string;
  
  constructor() { 
    this.motivo = "";
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initView();
  }

  ngOnInit(): void {
    this.initView();
  }

  cancelarDisabled(){
    if(this.item.estado == EstadoTurno.Aceptado ||
      this.item.estado == EstadoTurno.Realizado ||
      this.item.estado == EstadoTurno.Rechazado){
        return true;
      }
      else{
        return false;
      }
  }

  confirmarDisabled(){
    if(this.confirmar && this.motivo != ""){
      return false;
    }
    else{
      return true;
    }
  }

  clickCancelar(){
    this.confirmar = true;
    this.cancelar = false;
  }

  clickConfirmar(){
    this.item.comentario = this.motivo;
    this.emitter.emit(this.item);
  }

  initView(){
    this.cancelar = false;
    this.confirmar = false;
    this.motivo = "";
    if(this.rol == Rol.Admin){
      this.cancelar = true;      
    }
  }

}
