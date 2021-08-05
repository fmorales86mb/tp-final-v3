import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadisticasRoutingModule } from './estadisticas-routing.module';
import { IngresosComponent } from './pages/ingresos/ingresos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { TurnosComponent } from './pages/turnos/turnos.component';

@NgModule({
  declarations: [
    IngresosComponent,
    TurnosComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class EstadisticasModule { }
