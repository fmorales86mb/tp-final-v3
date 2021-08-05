import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';


@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    HorariosComponent,
    TurnosComponent,
    PacientesComponent
  ],
  imports: [
    CommonModule,
    EspecialistaRoutingModule,
    SharedModule,
    NgxSpinnerModule
  ]
})
export class EspecialistaModule { }
