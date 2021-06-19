import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { StorageService } from 'src/app/01-services/storage.service';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { LoginData } from 'src/app/02-models/loginData';
import { RegisterData } from 'src/app/02-models/registerData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  tab:number;
  srcPaciente:string;
  srcEspecialista:string;
  userRol:Rol;
  loginData: LoginData;
  mensajeError:string;
  user:any;

  constructor(
    private authService:AuthService,
    private spinner: NgxSpinnerService,
    private router:Router,
    private storageService:StorageService
  ) {     
    this.tab = 0;
    this.srcEspecialista = "../../../../assets/doctora-03.jpg";
    this.srcPaciente = "../../../../assets/paciente02.jpg";
  }

  ngOnInit(): void {   
  }

  async registrarUsuario(data:RegisterData){
    this.spinner.show();    
    
    //data.user.perfilSrc = await this.uploadPhoto(data.files[0]);
    
    this.authService.Registrarse(data.loginData, data.user)
    .then((res)=>{
      if(res.ok){
        this.router.navigate([""]);
      }
      else{
        this.mensajeError = res.error.description;
        console.log(res.error.description);
        this.tab = 0;
      }
    })
    .catch(()=>{
      this.mensajeError = "Ocurrió un error inesperado. Vuelva a intentarlo en unos instantes.";
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
    // else if(rolId == 2){
    //   this.userRol = Rol.Estudiante;
    // }
    // else if(rolId == 3){
    //   this.userRol = Rol.Profesor;
    // }
    this.mensajeError = null;
    this.tab = 1;
  }

  private async uploadPhoto(file:File) {  
    const filePath = new Date().getTime() + '-perfil';  
    const uploadTask = this.storageService.uploadFile(file, filePath);  

    return await(await uploadTask).ref.getDownloadURL();     
  }
}
