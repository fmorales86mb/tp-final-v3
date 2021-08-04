import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspeGuard } from '../03-guards/espe.guard';
import { HomeComponent } from './pages/home/home.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[EspeGuard]},
  {path:'perfil', component:PerfilComponent, canActivate:[EspeGuard]},
  {path:'horarios', component:HorariosComponent, canActivate:[EspeGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }