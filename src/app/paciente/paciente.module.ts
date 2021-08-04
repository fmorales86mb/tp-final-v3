import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';
import { TurnosComponent } from './pages/turnos/turnos.component';


@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    NuevoTurnoComponent,
    TurnosComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class PacienteModule { }
