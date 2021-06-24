import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { UserService } from 'src/app/01-services/user.service';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { LoginData } from 'src/app/02-models/loginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;  
  public hasAlert:boolean;
  public alertMessage:string;  
  public loginData:LoginData;

  constructor(private fb:FormBuilder, 
    private authService: AuthService,
    private router:Router,
    private userService:UserService,
    private spinner: NgxSpinnerService
    ) {    
    this.hasAlert = false;
    this.alertMessage ="";
    this.loginData = {
      pass: "",
      email:""
    };
   }

   ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailCtrl:['', [Validators.required, Validators.email]],
      passCtrl:['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async clickIngresar(){
    this.hasAlert = false;    
    this.spinner.show();

    this.authService.Ingresar(this.loginData)
    .then((res) => {
      if(res.ok){
        const user = this.authService.GetCurrentUser();
        this.navigateByRol(user.rol);
      }
      else{
        this.alertMessage = res.error.description;
        this.hasAlert = true;
        console.log(res);
      }
    })
    .catch((error)=>{
      this.alertMessage = "Ocurrió un error inesperado";
      this.hasAlert = true;
      console.log(error);
    })
    .finally(()=>{
      this.spinner.hide();
    })      
  }

  navigateByRol(rol:Rol){
    switch(rol){
      case Rol.Admin:
        this.router.navigate(["admin/home"]);
        break;
      case Rol.Paciente:
        this.router.navigate(["alumno/home"]);
        break;
      case Rol.Especialista:
        this.router.navigate(["profesor/home"]);
        break;
    }
  }

  getEmailCtrl(){return this.loginForm.get("emailCtrl");}

  getPassCtrl(){return this.loginForm.get("passCtrl");}

  goToRegister() {this.router.navigate(['register']); }

  cargarUsuario(id:number){
    if(id == 1){
      this.loginData.email ="fmorales86mb@gmail.com";
      this.loginData.pass = "123123";
    }
    else if(id ==2){
      this.loginData.email ="docente2@user.com";
      this.loginData.pass = "123123";
    }
    else if(id ==3){
      this.loginData.email ="f.morales1986@protonmail.com";
      this.loginData.pass = "123123";
    }
  }
}
