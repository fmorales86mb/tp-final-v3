import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './pages/register/register.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TurnosComponent } from './pages/turnos/turnos.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent,    
    ListadoUsuariosComponent,
    PerfilComponent,
    NuevoTurnoComponent,
    TurnosComponent,      
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule,
    AutocompleteLibModule
  ]
})
export class AdminModule { }
