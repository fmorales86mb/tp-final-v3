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
  confirmar:boolean[];
  accion:boolean[];
  disbled:boolean[];
  verRes:boolean;
  motivo:string;
  resenia:string;
  calificacion:string;
  
  constructor() { 
    this.accion = [];
    this.confirmar = [];
    this.disbled = [];
    this.motivo = "";
    this.resenia = "";
    this.calificacion = "";
    this.verRes = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initView();
  }

  ngOnInit(): void {
    this.initView();    
  }

  cancelarVisible(){
    let visible:Boolean = false;
    
    switch(this.rol){
      case Rol.Admin:
        if(this.item.estado != EstadoTurno.Aceptado &&
          this.item.estado != EstadoTurno.Realizado &&
          this.item.estado != EstadoTurno.Rechazado &&
          this.accion[0]     
        ){
          visible =  true;
        }
        break;
      case Rol.Especialista:
        if(this.item.estado != EstadoTurno.Aceptado &&
          this.item.estado != EstadoTurno.Realizado &&
          this.item.estado != EstadoTurno.Rechazado &&
          this.accion[0]    
        ){
          visible =  true;
        }
        break;
      case Rol.Paciente:
        if(this.item.estado != EstadoTurno.Realizado && this.accion[0]){
          visible =  true;
        }
        break;        
    }

    return visible;
  }

  verReseniaVisible(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:        
        break;
      case Rol.Especialista:
        if(this.item.comentario && this.item.comentario != "" || this.item.resenia)     
        {
          visible =  true;
        }
        break;
      case Rol.Paciente:
        if(this.item.comentario && this.item.comentario != "" || this.item.resenia)     
        {
          visible =  true;
        }
        break;
    }

    return visible;
  }

  completarEncuestaVisible(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:      
        break;
      case Rol.Especialista:        
        break;
      case Rol.Paciente:
        if(this.item.estado == EstadoTurno.Realizado && this.item.resenia){
          visible = true;
        }
        break;
    }

    return visible;
  }

  calificarAtencionVisible(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:        
        break;
      case Rol.Especialista:
        break;
      case Rol.Paciente:
        if(this.item.estado == EstadoTurno.Realizado && 
          this.accion[6] && !this.item.calificacion){
          visible = true;
        }
        break;
    }

    return visible;
  }

  rechazarVisible(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:        
        break;
      case Rol.Especialista:
        if(this.item.estado != EstadoTurno.Aceptado &&
          this.item.estado != EstadoTurno.Realizado &&
          this.item.estado != EstadoTurno.Cancelado &&
          this.accion[1]     
        ){
          visible =  true;
        }
        break;
      case Rol.Paciente:
        break;
    }

    return visible;
  }

  aceptarVisible(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:        
        break;
      case Rol.Especialista:
        if(this.item.estado != EstadoTurno.Rechazado &&
          this.item.estado != EstadoTurno.Realizado &&
          this.item.estado != EstadoTurno.Cancelado &&
          this.item.estado != EstadoTurno.Aceptado     
        ){
          visible =  true;
        }
        break;
      case Rol.Paciente:
        break;
    }

    return visible;
  }

  finalizarVisilbe(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:        
        break;
      case Rol.Especialista:
        if(this.item.estado == EstadoTurno.Aceptado && this.accion[3]){
          visible = true;
        }
        break;
      case Rol.Paciente:
        break;
    }

    return visible;
  }

  historiaVisilbe(){
    let visible:Boolean = false;

    switch(this.rol){
      case Rol.Admin:        
        break;
      case Rol.Especialista:
        if(this.item.estado == EstadoTurno.Realizado && !this.item.hasHistoria){
          visible = true;
        }
        break;
      case Rol.Paciente:
        break;
    }

    return visible;
  }
  

  confirmarDisabled(btn:number){
    let disabled = true;

    switch (btn){
      case 0:
      case 1:        
      case 3:
        if(this.confirmar[btn] && this.motivo != ""){
          disabled = false;
        }
      case 4:
        if(this.confirmar[btn] && this.resenia != ""){
          disabled = false;
        }
        break;
      case 6:
        if(this.confirmar[btn] && this.calificacion != ""){
          disabled = false;
        }
    }
    
    return disabled;
  }

  clickAccion(btn:number){
    this.confirmar[btn] = true;
    this.accion[btn] = false;
    this.disbled = [true, true, true, true, true];    
  }

  clickConfirmarAccion(btn:number){
    this.disbled = [false, false, false, false, false, false, false];

    switch(btn){
      case 0: 
        this.item.comentario = this.motivo;
        this.item.pacienteId = null;
        this.item.paciente = null;
        this.item.estado = EstadoTurno.Cancelado;
        this.emitter.emit(this.item);
        break;
      case 1:
        this.item.comentario = this.motivo;
        this.item.pacienteId = null;
        this.item.paciente = null;
        this.item.estado = EstadoTurno.Rechazado;
        this.emitter.emit(this.item);
        break;
      case 2:
        this.item.comentario = null;
        this.item.estado = EstadoTurno.Aceptado;
        this.emitter.emit(this.item);
        break;
      case 3:
        this.item.comentario = null;
        this.item.resenia = this.resenia;
        this.item.estado = EstadoTurno.Realizado;
        this.emitter.emit(this.item);
        break;
      case 4:
        this.verRes = true;
        this.disbled[4] = true;
        break;
      case 6:
        this.item.calificacion = this.calificacion;
        this.disbled[6] = true;
        this.emitter.emit(this.item);
        break;
    }
    
  }

  initView(){
    this.accion = [true, true, true, true, true, true, true, true, true];
    this.confirmar = [false, false, false, false, false, false, false, false];
    this.disbled = [false, false, false, false, false, false, false, false];
    this.motivo = "";
    this.calificacion = "";
    this.verRes = false;
  }

  guardarEncuesta(x){
    console.log(x);
  }

}
