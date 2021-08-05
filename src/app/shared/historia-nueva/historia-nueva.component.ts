import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HistorialService } from 'src/app/01-services/historial.service';
import { TurnoService } from 'src/app/01-services/turno.service';
import { HistoriaClinica } from 'src/app/02-models/historia-clinica';
import { Turno } from 'src/app/02-models/turno';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-historia-nueva',
  templateUrl: './historia-nueva.component.html',
  styleUrls: ['./historia-nueva.component.css']
})
export class HistoriaNuevaComponent implements OnInit {

  @Input() turno:Turno;

  historia:HistoriaClinica;
  public form: FormGroup;  

  constructor(
    private bf:FormBuilder,
    private historialService:HistorialService,
    private turnoService:TurnoService
  ) { }

  ngOnInit(): void {
    this.form = this.bf.group({
      altura:['', [Validators.required, Validators.max(300), Validators.pattern("^[0-9]*$")]],
      peso:['', [Validators.required, Validators.max(200), Validators.pattern("^[0-9]*$")]],     
      temperatura:['', [Validators.required, Validators.max(300), Validators.pattern("^[0-9]*$")]],
      presion:['', [Validators.required, Validators.max(300), Validators.pattern("^[0-9]*$")]],
      clave1:[''],
      clave2:[''],
      clave3:[''],
      valor1:[''],
      valor2:[''],
      valor3:[''],
    });
  }

  getAltura(){
    return this.form.get("altura");
  }
  getPeso(){
    return this.form.get("peso");
  }
  getTemperatura(){
    return this.form.get("temperatura");
  }
  getPresion(){
    return this.form.get("presion");
  }
  getClave1(){
    return this.form.get("clave1");
  }
  getValor1(){
    return this.form.get("valor1");
  }
  getClave2(){
    return this.form.get("clave2");
  }
  getValor2(){
    return this.form.get("valor2");
  }
  getClave3(){
    return this.form.get("clave3");
  }
  getValor3(){
    return this.form.get("valor3");
  }

  
  guardar(){
    this.historia = {
      paciente : this.turno.paciente,
      especialista: this.turno.especialista,
      fecha: this.turno.fecha,
      alutra: this.getAltura().value,
      peso: this.getPeso().value,
      temperatura: this.getTemperatura().value,
      presion: this.getPresion().value,
      dinamicos:[
        {clave: this.getClave1().value, valor:this.getValor1().value},
        {clave: this.getClave2().value, valor:this.getValor2().value},
        {clave: this.getClave3().value, valor:this.getValor3().value                                                                                                                                                                                                                                                                                                },
      ]
    }

    this.turno.hasHistoria = true;
    this.turno.historia = this.historia;

    this.historialService.addItem(this.historia);
    this.turnoService.setItemWithId(this.turno, this.turno.docId);
  }
}
