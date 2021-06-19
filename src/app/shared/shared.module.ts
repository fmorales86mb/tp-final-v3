import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { MateriaItemComponent } from './materia-item/materia-item.component';
import { UserItemComponent } from './user-item/user-item.component';
import { MateriaListComponent } from './materia-list/materia-list.component';
import { MateriaDetalleComponent } from './materia-detalle/materia-detalle.component';
import { AlertComponent } from './alert/alert.component';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';
import { UserItemNotaComponent } from './user-item-nota/user-item-nota.component';
import { ExamenItemComponent } from './examen-item/examen-item.component';
import { EmailDirective } from './02-directives/email.directive';
import { RolPipe } from './01-pipes/rol.pipe';

@NgModule({
  declarations: [
    //directives
    EmailDirective,

    FooterComponent,
    HeaderComponent,
    UserRegisterComponent,    
    UserItemComponent,
    UserListComponent,
    MateriaItemComponent,
    MateriaListComponent,
    MateriaDetalleComponent,
    AlertComponent,
    UserDetalleComponent,
    UserItemNotaComponent,
    ExamenItemComponent,

    //pipes    
    RolPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    //directives
    EmailDirective,

    FooterComponent,
    HeaderComponent,
    UserRegisterComponent,
    UserItemComponent,
    UserListComponent,
    MateriaItemComponent,
    MateriaListComponent,
    MateriaDetalleComponent,
    AlertComponent,
    UserDetalleComponent,
    UserItemNotaComponent,
    ExamenItemComponent,
    
    //pipes
    RolPipe
  ]
})
export class SharedModule { }
