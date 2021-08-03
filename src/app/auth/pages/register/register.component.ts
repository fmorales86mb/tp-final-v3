import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { StorageService } from 'src/app/01-services/storage.service';
import { UserService } from 'src/app/01-services/user.service';
import { TipoMje } from 'src/app/02-models/enums/mje-enum';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { Especialidad } from 'src/app/02-models/especialidad';
import { LoginData } from 'src/app/02-models/loginData';
import { Mensaje } from 'src/app/02-models/mensaje';
import { RegisterData } from 'src/app/02-models/registerData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  baseSrc:string = "../../../assets/images/";
  tab:number;
  srcPaciente:string;
  srcEspecialista:string;
  userRol:Rol;
  loginData: LoginData;
  mensaje:Mensaje;
  user:any;

  constructor(
    private authService:AuthService,
    private spinner: NgxSpinnerService,
    private router:Router,
    private storageService:StorageService,
    private userService:UserService
  ) {     
    this.tab = 0;
    this.srcEspecialista = this.baseSrc + "doctora-03.jpg";
    this.srcPaciente = this.baseSrc + "paciente02.jpg";
  }

  ngOnInit(): void {   
    
  }

  async registrarUsuario(data:RegisterData){
    this.spinner.show();    
    
    data.user.perfil1Src = await this.uploadPhoto(data.files[0]);
    if(data.user.rol == Rol.Paciente){
      data.user.perfil2Src = await this.uploadPhoto(data.files[1]);
    }
    
    this.authService.Registrarse(data.loginData, data.user)
    .then(async (res)=>{
      if(res.ok){        
        this.router.navigate([""]);
      }
      else{
        this.mensaje = {
          txt: res.error.description,
          tipo:TipoMje.Warning
        };
        this.tab = 0;
      }
    })
    .catch(()=>{
      this.mensaje = {
        txt:"Ocurrió un error inesperado, vuelva a intentarlo más tarde.",
        tipo:TipoMje.Danger
      };
      this.tab = 0;
    })
    .finally(()=>{
      this.spinner.hide();
    })
  }

  setRol(rolId:number){
    if(rolId == 1){
      this.userRol = Rol.Admin;
    }
    else if(rolId == 2){
      this.userRol = Rol.Paciente;
    }
    else if(rolId == 3){
      this.userRol = Rol.Especialista;
    }
    this.mensaje = null;
    this.tab = rolId;
  }

  private async uploadPhoto(file:File) {  
    const filePath = new Date().getTime() + '-perfil';  
    const uploadTask = this.storageService.uploadFile(file, filePath);  

    return await(await uploadTask).ref.getDownloadURL();     
  }
}
