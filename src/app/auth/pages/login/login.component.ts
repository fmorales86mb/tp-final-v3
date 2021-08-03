import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { UserService } from 'src/app/01-services/user.service';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { LoginData } from 'src/app/02-models/loginData';
import { User } from 'src/app/02-models/user';

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
  public userPaciente:User;
  public userEspecialista:User;
  public userAdmin:User;

  private idEspecialista:string = "2kAEoHXU8Qfw5tVovB39gzYsuET2";
  private idPaciente:string = "AR1pr27lmFgiXJ341AeTKODWy4q2";
  private idAdmin:string = "9XrLsNOAWnVt0LRNONcHWuvn06a2";

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
    this.spinner.show();
    
    this.loginForm = this.fb.group({
      emailCtrl:['', [Validators.required, Validators.email]],
      passCtrl:['', [Validators.required, Validators.minLength(6)]]
    });

    this.userService.getItem(this.idEspecialista).subscribe((us) => {
      this.userEspecialista = us.data();
    });

    this.userService.getItem(this.idPaciente).subscribe((us) => {
      this.userPaciente = us.data();
    });

    this.userService.getItem(this.idAdmin).subscribe((us) => {
      this.userAdmin = us.data();
      this.spinner.hide();
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
      this.loginData.email = this.userAdmin.email;
      this.loginData.pass = "123123";
    }
    else if(id ==2){
      this.loginData.email = this.userPaciente.email;
      this.loginData.pass = "123123";
    }
    else if(id ==3){
      this.loginData.email = this.userEspecialista.email;
      this.loginData.pass = "123123";
    }
  }
}
