import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../01-services/auth.service';
import { Rol } from '../02-models/enums/rol-enum';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {

  constructor(private authService:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.GetIsAuth() && this.authService.GetCurrentUser().rol == Rol.Estudiante){
        return true;
      }
      else{
        this.router.navigate(["auth/login"]);
        return false;      
      }   
  }
  
}
