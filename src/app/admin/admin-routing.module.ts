import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../03-guards/admin.guard';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterComponent } from './pages/register/register.component';
import { TurnosComponent } from './pages/turnos/turnos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AdminGuard]},
  {path:'register', component:RegisterComponent, canActivate:[AdminGuard]},  
  {path:'usuarios', component:ListadoUsuariosComponent, canActivate:[AdminGuard]},  
  {path:'turnos/nuevo', component:NuevoTurnoComponent, canActivate:[AdminGuard]}, 
  {path:'turnos', component:TurnosComponent, canActivate:[AdminGuard]}, 
  {path:'perfil', component:PerfilComponent, canActivate:[AdminGuard]},
  {path:'estadisticas', component:EstadisticasComponent, canActivate:[AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
