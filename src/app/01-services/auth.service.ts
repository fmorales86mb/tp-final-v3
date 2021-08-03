import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ErrorHandleFirebase } from '../02-models/errors-handle';
import { LoginData } from '../02-models/loginData';
import { ResponseFirebase } from '../02-models/response-firebase';
import { User } from '../02-models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
      
  private isAuth:boolean = false;
  private currentUser:User;
  private uid;  

  constructor(private authDb: AngularFireAuth, 
    private router:Router, 
    private userService:UserService,
    ) { 
    }

  public async Registrarse(loginData: LoginData, user:User):Promise<ResponseFirebase>{
    let response:ResponseFirebase = new ResponseFirebase();

    await this.authDb.createUserWithEmailAndPassword(loginData.email, loginData.pass)
      .then((cred) => { 
        response.uId = cred.user.uid;
        //this.uid = cred.user.uid;        
        response.ok = true;
      })
      .catch((error) => {         
        this.isAuth = false;
        let errorFirebase = ErrorHandleFirebase.getErrorByCode(error.code);           
        response.ok = false;
        response.error = errorFirebase;              
      });

    if(response.ok){      
      this.authDb.currentUser.then((userFire) => {
        userFire.sendEmailVerification();
      })
      
      console.log(user);
      this.userService.setItemWithId(user, response.uId)
      .then(()=>{
        console.log("ok save user");
      })
      .catch((err)=>{
        console.log(err);
        this.Desloguearse();
      });
    }

    return response;
  }

  public async Ingresar(loginData: LoginData): Promise<ResponseFirebase>{  
    let response:ResponseFirebase = new ResponseFirebase();

    await this.authDb.signInWithEmailAndPassword(loginData.email, loginData.pass)
    .then((userCredential) => {                 
      if(userCredential.user.emailVerified){
        this.uid = userCredential.user.uid;
        this.isAuth = true;
        response.ok = true;  
      }
      else{
        this.isAuth = false;           
        response.ok = false;
        response.error = {
          code:"",
          description: "Cuenta no verificada"
        } 
      }          
    })
    .catch((error) => {
      this.isAuth = false;
      let errorFirebase = ErrorHandleFirebase.getErrorByCode(error.code);           
      response.ok = false;
      response.error = errorFirebase;          
    })
    .finally(()=>{

    });
          
    if(response.ok){      
      const x = await this.userService.getItem(this.uid).toPromise();
      if(x.data().rol != 3 || x.data().activado){
        this.currentUser = x.data();
      }
      else {
        this.isAuth = false;        
        response.ok = false;
        response.error = {
          code:"",
          description:"Usuario no habilitado. Comuniquese con la administración"
        };
      }
    }     

    return response;
  }

  public Desloguearse(){    
    this.isAuth = false;
    this.currentUser = null;
    this.uid = "";
    this.router.navigate([""]);
  }

  public GetIsAuth():boolean{    
    return this.isAuth;
  }

  public GetCurrentUser():User{
    return this.currentUser;
  }

  // public GetCurrentUser():IdModel<User>{
  //   return {id:this.GetUserId(), model:this.currentUser}
  // }

  public GetUserId():string{
    return this.uid;
  }


}
