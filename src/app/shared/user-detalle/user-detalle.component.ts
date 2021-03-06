import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/01-services/user.service';
import { Rol } from 'src/app/02-models/enums/rol-enum';
import { Especialidad } from 'src/app/02-models/especialidad';
import { User } from 'src/app/02-models/user';

@Component({
  selector: 'app-user-detalle',
  templateUrl: './user-detalle.component.html',
  styleUrls: ['./user-detalle.component.css']
})
export class UserDetalleComponent implements OnChanges {

  @Input() item:User;
  public especialidades:Especialidad[];

  constructor(private userService:UserService) { 
    this.especialidades = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newItem = changes.item.currentValue;
    
    this.especialidades = [];

    if(newItem.rol == Rol.Especialista){
      // this.userService.getEspecialidades(this.item.id)
      // .then((items) => {        
      //   items.forEach((item) => {                    
      //     const model:Especialidad={
      //       id: item.id,
      //       model: <Especialidad>item.data()
      //     };
  
      //     this.especialidades.push(model);
      //   })
      // })
      // .catch((err)=>{
      //   console.log(err);
      // })
      // .finally(()=>{

      // })
    }
  }

  ngOnInit(): void {

  }
}
