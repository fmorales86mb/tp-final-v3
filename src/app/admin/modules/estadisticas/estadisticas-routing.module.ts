import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/03-guards/admin.guard';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { TurnosComponent } from './pages/turnos/turnos.component';

const routes: Routes = [
  { path: 'ingresos', component: IngresosComponent, canActivate:[AdminGuard] },
  { path: 'turnos', component: TurnosComponent, canActivate:[AdminGuard] },
  { path: '',   redirectTo: 'ingresos', pathMatch: 'full' },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadisticasRoutingModule { }
