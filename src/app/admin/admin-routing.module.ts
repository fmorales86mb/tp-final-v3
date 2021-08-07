import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../03-guards/admin.guard';
import { HomeComponent } from './pages/home/home.component';
import { ListadoUsuariosComponent } from './pages/listado-usuarios/listado-usuarios.component';
import { NuevoTurnoComponent } from './pages/nuevo-turno/nuevo-turno.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegisterComponent } from './pages/register/register.component';
import { TurnosComponent } from './pages/turnos/turnos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[AdminGuard], data: {animation: 'HomePage'}},
  {path:'register', component:RegisterComponent, canActivate:[AdminGuard]},  
  {path:'usuarios', component:ListadoUsuariosComponent, canActivate:[AdminGuard]},  
  {path:'turnos/nuevo', component:NuevoTurnoComponent, canActivate:[AdminGuard], data: {animation: 'AboutPage'}}, 
  {path:'turnos', component:TurnosComponent, canActivate:[AdminGuard], data: {animation: 'HomePage'}}, 
  {path:'perfil', component:PerfilComponent, canActivate:[AdminGuard],data: {animation: 'AboutPage'}},  
  {
    path: 'estadisticas',
    loadChildren: () => import('./modules/estadisticas/estadisticas.module').then(m => m.EstadisticasModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
