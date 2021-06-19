import { Pipe, PipeTransform } from '@angular/core';
import { Rol } from 'src/app/02-models/enums/rol-enum';


@Pipe({
  name: 'rol'
})
export class RolPipe implements PipeTransform {

  transform(value: Rol, ...args: unknown[]): unknown {
    let result:string;

    switch(value){
      case Rol.Admin:
        result = "Administrador";
        break;
      case Rol.Paciente:
        result = "Paciente";
        break;
      case Rol.Especialista:
        result = "Especialista";
        break;
      default:
        result = "";
        break;
    }

    return result;
  }

}
