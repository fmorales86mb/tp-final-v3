import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AltaMateriaComponent } from './pages/alta-materia/alta-materia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ListadoMateriasComponent } from './pages/listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { ListadoUsuariosEliminadosComponent } from './pages/listado-usuarios-eliminados/listado-usuarios-eliminados.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,
    AltaMateriaComponent,
    InscripcionComponent,
    ListadoMateriasComponent,
    ListadoUsuariosComponent,
    ListadoUsuariosEliminadosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class AdminModule { }
