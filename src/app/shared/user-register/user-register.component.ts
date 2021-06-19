import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { LoginData } from 'src/app/02-models/loginData';
import { RegisterData } from 'src/app/02-models/registerData';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  @Input() userRol:Rol;
  @Output() userEmitter = new EventEmitter<RegisterData>();

  public form1: FormGroup;
  loginData: LoginData;
  public user: User;
  mensajeError:string;
  file1:File;

  constructor(
    private bf:FormBuilder
  ) {     

  }

  ngOnInit(): void {    
    this.initForm1();
  }

  async clickRegister(){
    
    this.loginData = {
      email:this.getEmailCtrl().value,
      pass:this.getPassCtrl1().value
    };

    this.getUser();

    const data:RegisterData = {
      user:this.user,
      loginData: this.loginData,
      files:[this.file1]
    };

    this.userEmitter.emit(data);
  }

  private async getUser(){
      // this.user = {
      //   rol:this.userRol,
      //   perfil1Src: "",
      //   email:this.loginData.email,
      //   nota:null
      // };  
  }

  fileChangeEvent(e){
    this.file1 = e.target.files[0];
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
      emailCtrl:['', [Validators.required, Validators.email]],
      passCtrl1:['', [Validators.required, Validators.minLength(6)]],
      passCtrl2:['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validator: this.MustMatch('passCtrl1', 'passCtrl2')
    });
  }

  getEmailCtrl(){return this.form1.get('emailCtrl');}

  getPassCtrl1(){return this.form1.get('passCtrl1');}

  getPassCtrl2(){return this.form1.get('passCtrl2');}

  getImg1Ctrl(){return this.form1.get('img1Ctrl');}

}
