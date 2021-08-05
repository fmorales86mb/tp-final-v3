import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Encuesta } from 'src/app/02-models/encuesta';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta:Encuesta;
  public encuestaForm: FormGroup;
  @Output() emitter = new EventEmitter<Encuesta>();

  constructor(
    private bf:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.encuestaForm = this.bf.group({
      comentarioCtrl:['', [Validators.required]],
      calificacionCtrl:['', [Validators.required]],     
      velocidadCtrl:['', [Validators.required]], 
      ageCtrl:['', [Validators.required, Validators.max(98), Validators.min(19), Validators.pattern("^[0-9]*$")]],
      phoneCtrl:['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      
      
      q3Ctrl:['', [Validators.required]]
    });
  }

  getComentarioCtrl(){
    return this.encuestaForm.get("comentarioCtrl");
  }

  getLastNameCtrl(){
    return this.encuestaForm.get("lastNameCtrl");
  }

  getAgeCtrl(){
    return this.encuestaForm.get("ageCtrl");
  }

  getPhoneCtrl(){
    return this.encuestaForm.get("phoneCtrl");
  }
  
  getQ1Ctrl(){
    return this.encuestaForm.get("q1Ctrl");
  }

  getQ2Ctrl(){
    return this.encuestaForm.get("q2Ctrl");
  }

  getQ3Ctrl(){
    return this.encuestaForm.get("q3Ctrl");
  }

  guardar(){
    this.emitter.emit(this.encuesta);
  }
}
