import { Pipe, PipeTransform } from '@angular/core';
import { EstadoTurno } from 'src/app/02-models/enums/turno-estado-enum';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {

  transform(value: EstadoTurno, ...args: unknown[]): unknown {
    let result:string;

    switch(value){
      case EstadoTurno.Aceptado:
        result = "Aceptado";
        break;
      case EstadoTurno.Cancelado:
        result = "Cancelado";
        break;
      case EstadoTurno.Libre:
        result = "Libre";
        break;
      case EstadoTurno.Realizado:
        result = "Realizado";
        break;
      case EstadoTurno.Rechazado:
        result = "Rechazado";
        break;
      case EstadoTurno.Reservado:
        result = "Reservado";
        break;
      default:
        result = "";
        break;
    }

    return result;
  }

}
