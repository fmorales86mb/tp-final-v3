import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/01-services/auth.service';
import { StorageService } from 'src/app/01-services/storage.service';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { LoginData } from 'src/app/02-models/loginData';
import { RegisterData } from 'src/app/02-models/registerData';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  loginData: LoginData;
  mensajeError:string;
  userRol:Rol;

  constructor(
    private authService:AuthService,
    private spinner: NgxSpinnerService,
    private router:Router,
    private storageService:StorageService
  ) {     
    this.userRol = Rol.Admin;
  }

  ngOnInit(): void {
    this.user = this.authService.GetCurrentUser();
  }

  async registrarUsuario(data:RegisterData){
    this.spinner.show();    

    //data.user.perfilSrc = await this.uploadPhoto(data.files[0]);
    
    this.authService.Registrarse(data.loginData, data.user)
    .then((res)=>{
      if(res.ok){
        this.router.navigate(["admin/home"]);
      }
      else{
        this.mensajeError = res.error.description;
        console.log(res.error.description);
      }
    })
    .catch(()=>{
      this.mensajeError = "Ocurrió un error inesperado. Vuelva a intentarlo en unos instantes.";
    })
    .finally(()=>{
      this.spinner.hide();
    })
  }

  private async uploadPhoto(file:File) {  
    const filePath = new Date().getTime() + '-perfil';  
    const uploadTask = this.storageService.uploadFile(file, filePath);  

    return await(await uploadTask).ref.getDownloadURL();     
  }
}
