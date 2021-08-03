import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { ListadoMateriasComponent } from './pages/listado-materias/listado-materias.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,    
    InscripcionComponent,
    ListadoMateriasComponent,
    ListadoUsuariosComponent,
    PerfilComponent,
    NuevoTurnoComponent,    
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
