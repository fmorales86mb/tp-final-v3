import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EspecialidadesService } from 'src/app/01-services/especialidades.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { EstadoTurno } from 'src/app/02-models/enums/turno-estado-enum';
import { Especialidad } from 'src/app/02-models/especialidad';
import { Mensaje } from 'src/app/02-models/mensaje';
import { Turno } from 'src/app/02-models/turno';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-turno-nuevo',
  templateUrl: './turno-nuevo.component.html',
  styleUrls: ['./turno-nuevo.component.css']
})
export class TurnoNuevoComponent implements OnInit, OnChanges {

  @Input() paciente:User;   
  @Output() emitter = new EventEmitter<Turno>();
  keyword = 'nombre';
  keyword1 = 'apellido';
  keyword2 = 'nombre';
  especialidades:Especialidad[];
  especialistas:User[];
  pacientes:User[];
  especialistaSeleccionado:User;
  especialidadSeleccionada:Especialidad;
  turnoSeleccionado:Turno;
  turnos:Turno[]; 
  mensaje:Mensaje;

  constructor(
    private turnoService:TurnoService,
    private userService:UserService,
    private espeService:EspecialidadesService
    ) { 
    this.especialidades = [];
    this.especialistas = [];
    this.turnos = [];
    this.pacientes = [];
    this.mensaje = null;
  }

  ngOnChanges(changes: any): void {    
    this.paciente = changes.paciente.currentValue;
    if(this.paciente){
      this.mensaje = null;
    }
  }

  ngOnInit(): void {
    if(!this.paciente){
      this.mensaje = {
        tipo:TipoMje.Warning,
        txt:"Debe seleccionar un paciente"
      };
    }

    this.espeService.getAll().subscribe((items) =>{    
      this.especialidades = items;          
    });
  }

  seleccionarItem(item){
    this.turnoSeleccionado = item;
  }

  clickGuardar(){
    this.turnoSeleccionado.paciente = this.paciente;
    this.turnoSeleccionado.pacienteId = this.paciente.docId;
    this.turnoSeleccionado.comentario = null;
    this.turnoSeleccionado.estado = EstadoTurno.Reservado;    
    this.emitter.emit(this.turnoSeleccionado);
  }

  guardarDisabled(){
    if(!this.turnoSeleccionado || !this.paciente || 
      !this.especialidadSeleccionada || !this.especialistaSeleccionado){
        return true;
      }else{
        return false;
      }
  }

  selectEspecialidad(item:Especialidad) {
    // do something with selected item
    this.especialidadSeleccionada = item;
    this.especialistaSeleccionado = null;
    this.turnoSeleccionado = null;
    this.turnos = [];
    this.userService.getEspecialistasByEspecialidad(item).subscribe((especialistas) => {
      this.especialistas = especialistas;      
    })
  }

  selectEventEspecialista(item) {
    // do something with selected item
    this.especialistaSeleccionado = item;
    this.turnoSeleccionado = null;
    let horario = this.especialistaSeleccionado.horarios.find(x => x.docId == this.especialidadSeleccionada.docId);
    
    this.turnoService.getTurnosByEspecialistaEspecialidadLibres
      (this.especialistaSeleccionado.docId, this.especialidadSeleccionada.docId).subscribe(turnos => {        
        this.turnos = turnos;
      })
  }
}
