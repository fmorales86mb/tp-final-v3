import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { User } from 'src/app/02-models/user';

@Directive({
  selector: '[appRol]'
})
export class RolDirective implements OnInit{

  @Input() appRol:User;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.setBackgroundColor(this.appRol.rol);
  }

  private setBackgroundColor(rol:Rol){
    switch(rol){
      case Rol.Admin:
        return 'rgb(142, 45, 45)';
      case Rol.Especialista:
        return 'rgb(187, 157, 38)';
      case Rol.Paciente:
        return 'rgb(90, 130, 51)';
    }
  }

}
