import { AfterContentInit, AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { LoginData } from 'src/app/02-models/loginData';
import { RegisterData } from 'src/app/02-models/registerData';
import { User } from 'src/app/02-models/user';


@Component({
  selector: 'app-register-paciente',
  templateUrl: './register-paciente.component.html',
  styleUrls: ['./register-paciente.component.scss']
})
export class RegisterPacienteComponent implements OnInit, AfterContentInit  {

  @Output() userEmitter = new EventEmitter<RegisterData>();

  tab:number;
  progressClass:string;  
  public form1: FormGroup;
  public form2: FormGroup;
  public form3: FormGroup;
  public form4: FormGroup;
  loginData: LoginData;
  public user: User;
  mensajeError:string;
  file1:File;
  file2:File;

  constructor(
    private bf:FormBuilder
  ) {     
    this.tab = 1;
    this.progressClass = "percent-0";
  }

  ngAfterContentInit(): void {
    this.progressClass = "percent-20";
  }

  ngOnInit(): void {    
    this.initForm1();
    this.initForm2();    
  }

  async clickRegister(){
    this.progressClass = "percent-100"
    
    this.loginData = {
      email:this.getEmailCtrl().value,
      pass:this.getPassCtrl1().value
    };

    this.getUser();

    const data:RegisterData = {
      user: this.user,
      loginData: this.loginData,
      files:[this.file1, this.file2],
      especialidades:null
    };

    this.userEmitter.emit(data);
  }

  private async getUser(){
      this.user = {
        nombre: this.getNameCtrl().value,
        apellido:this.getLastNameCtrl().value,
        edad:this.getAgeCtrl().value,
        dni:this.getDniCtrl().value,
        rol:Rol.Paciente,
        perfil1Src: "",
        perfil2Src: "",
        obraSocial: this.getOsCtrl().value,
        activado:false,
        email:this.loginData.email
      };  
  }

  clickStep(step:number){
    switch(step){
      case 1:
        this.progressClass = "percent-20";
        this.tab = 1;
        break;
      case 2:
        this.progressClass = "percent-60";
        this.tab = 2;
        break;
    }    
  }

  fileChangeEvent(e, fileId){
    if(fileId == 1){
      this.file1 = e.target.files[0];
    }
    else {
      this.file2 = e.target.files[0];
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
  }

  initForm1(){
    this.form1 = this.bf.group({
      img1Ctrl:['', [Validators.required]],
      img2Ctrl:['', [Validators.required]],
      emailCtrl:['', [Validators.required, Validators.email]],
      passCtrl1:['', [Validators.required, Validators.minLength(6)]],
      passCtrl2:['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validator: this.MustMatch('passCtrl1', 'passCtrl2')
    });
  }

  initForm2(){
    this.form2 = this.bf.group({
      nameCtrl:['', [Validators.required, Validators.minLength(2)]],
      lastNameCtrl:['', [Validators.required, Validators.minLength(2)]],
      dniCtrl:['', [Validators.required, Validators.max(999999999), Validators.min(1000000), Validators.pattern("^[0-9]*$")]],
      ageCtrl:['', [Validators.required, Validators.max(98), Validators.min(19), Validators.pattern("^[0-9]*$")]],
      osCtrl:['', [Validators.required, Validators.minLength(2)]]
    });
  }

  getEmailCtrl(){return this.form1.get('emailCtrl');}

  getPassCtrl1(){return this.form1.get('passCtrl1');}

  getPassCtrl2(){return this.form1.get('passCtrl2');}

  getNameCtrl(){return this.form2.get('nameCtrl');}

  getLastNameCtrl(){return this.form2.get('lastNameCtrl');}

  getDniCtrl(){return this.form2.get('dniCtrl');}

  getAgeCtrl(){return this.form2.get('ageCtrl');}

  getImg1Ctrl(){return this.form1.get('img1Ctrl');}

  getImg2Ctrl(){return this.form1.get('img2Ctrl');}

  getOsCtrl(){return this.form2.get('osCtrl');}
}
