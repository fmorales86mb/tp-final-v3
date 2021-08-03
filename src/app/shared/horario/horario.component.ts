import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Horario } from 'src/app/02-models/horario';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  public desde:string;
  public hasta:string;  
  horarios:Horario[];
  selectedDays:boolean[];
  public form: FormGroup;

  @Output() horariosEmitter = new EventEmitter<Horario[]>();
  @Input() horariosCargados:Horario[];
  
  constructor(private bf:FormBuilder) { 
    this.selectedDays = [ false, false, false, false, false, false ];
    this.horarios =[];        
  }

  ngOnInit(): void {
    this.form = this.bf.group({
      check1Ctrl:[false],
      check2Ctrl:[false],
      check3Ctrl:[false],
      check4Ctrl:[false],
      check5Ctrl:[false],
      check6Ctrl:[false],
      desdeCtrl:['', [Validators.required]],
      hastaCtrl:['', [Validators.required]]            
    },
    {
      validator: this.checkTrue()
    });
    
    if(this.horariosCargados && this.horariosCargados.length > 0){              
      this.desde = this.horariosCargados[0].desde;
      this.hasta = this.horariosCargados[0].hasta;
      //this.horarios = this.horariosCargados;

      this.horariosCargados.forEach((horario) => {
        this.selectedDays[horario.dayOfWeek] = true;
      });
      
      this.form.patchValue({
        check1Ctrl:this.selectedDays[0],
        check2Ctrl:this.selectedDays[1],
        check3Ctrl:this.selectedDays[2],
        check4Ctrl:this.selectedDays[3],
        check5Ctrl:this.selectedDays[4],
        check6Ctrl:this.selectedDays[5]
      });
    }  

    console.log(this.selectedDays);
  };

  saveHorario(){   
    this.horarios = []; 
    let desdeVal:string = this.getDesdeCtrl().value;
    let hastaVal:string = this.getHastaCtrl().value;

    this.selectedDays.forEach((day, i) => {
      if(day){
        let horario:Horario = {
          dayOfWeek: i,
          desde:desdeVal,
          hasta:hastaVal
        }

        this.horarios.push(horario);
      }
    });

    console.log(this.horarios);
    this.horariosEmitter.emit(this.horarios);
  }

  checkTrue() {
    return (formGroup: FormGroup) => {
        const control1 = formGroup.controls["check1Ctrl"];
        const control2 = formGroup.controls["check2Ctrl"];
        const control3 = formGroup.controls["check3Ctrl"];
        const control4 = formGroup.controls["check4Ctrl"];
        const control5 = formGroup.controls["check5Ctrl"];
        const control6 = formGroup.controls["check6Ctrl"];

        if (
          control1.value === true ||
          control2.value === true ||
          control3.value === true ||
          control4.value === true ||
          control5.value === true ||
          control6.value === true) {
            control1.setErrors(null);            
        } else {
          control1.setErrors({ notCheck: true });
        }
    }
  }

  getCheck1Ctrl(){return this.form.get('check1Ctrl');}
  getCheck2Ctrl(){return this.form.get('check2Ctrl');}
  getCheck3Ctrl(){return this.form.get('check3Ctrl');}
  getCheck4Ctrl(){return this.form.get('check4Ctrl');}
  getCheck5Ctrl(){return this.form.get('check5Ctrl');}
  getCheck6Ctrl(){return this.form.get('check6Ctrl');}
  
  getDesdeCtrl(){return this.form.get('desdeCtrl');}
  getHastaCtrl(){return this.form.get('hastaCtrl');}
}
