import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/02-models/user';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {
    return value.nombre + ' ' + value.apellido;
  }

}
