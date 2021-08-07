import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspeGuard } from '../03-guards/espe.guard';
import { HomeComponent } from './pages/home/home.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TurnosComponent } from './pages/turnos/turnos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[EspeGuard],data: {animation: 'HomePage'}},
  {path:'perfil', component:PerfilComponent, canActivate:[EspeGuard], data: {animation: 'AboutPage'}},
  {path:'turnos', component:TurnosComponent, canActivate:[EspeGuard]},
  {path:'horarios', component:HorariosComponent, canActivate:[EspeGuard],data: {animation: 'HomePage'}},
  {path:'pacientes', component:PacientesComponent, canActivate:[EspeGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }
