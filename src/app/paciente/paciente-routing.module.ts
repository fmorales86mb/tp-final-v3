import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteGuard } from '../03-guards/paciente.guard';
import { HomeComponent } from './pages/home/home.component';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TurnosComponent } from './pages/turnos/turnos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[PacienteGuard],data: {animation: 'HomePage'}},
  {path:'perfil', component:PerfilComponent, canActivate:[PacienteGuard], data: {animation: 'AboutPage'}},
  {path:'turnos/nuevo', component:NuevoTurnoComponent, canActivate:[PacienteGuard]},
  {path:'turnos', component:TurnosComponent, canActivate:[PacienteGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
