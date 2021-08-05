import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { MateriaDetalleComponent } from './materia-detalle/materia-detalle.component';
import { AlertComponent } from './alert/alert.component';
import { UserDetalleComponent } from './user-detalle/user-detalle.component';
import { UserItemNotaComponent } from './user-item-nota/user-item-nota.component';
import { ExamenItemComponent } from './examen-item/examen-item.component';
import { EmailDirective } from './02-directives/email.directive';
import { RolPipe } from './01-pipes/rol.pipe';
import { RegisterPacienteComponent } from './register-paciente/register-paciente.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterEspecialistaComponent } from './register-especialista/register-especialista.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { UserPerfilComponent } from './user-perfil/user-perfil.component';
import { HorarioComponent } from './horario/horario.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TurnoNuevoComponent } from './turno-nuevo/turno-nuevo.component';
import { TurnoItemComponent } from './turno-item/turno-item.component';
import { TurnoListComponent } from './turno-list/turno-list.component';
import { TurnoDetalleComponent } from './turno-detalle/turno-detalle.component';
import { EstadoPipe } from './01-pipes/estado.pipe';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { HistoriaNuevaComponent } from './historia-nueva/historia-nueva.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HistoriaItemComponent } from './historia-item/historia-item.component';
import { HistoriaListComponent } from './historia-list/historia-list.component';
import { HistoriaDetalleComponent } from './historia-detalle/historia-detalle.component';

@NgModule({
  declarations: [
    //directives
    EmailDirective,

    FooterComponent,
    HeaderComponent,
    UserRegisterComponent,    
    UserItemComponent,
    UserListComponent,
    MateriaDetalleComponent,
    AlertComponent,
    UserDetalleComponent,
    UserItemNotaComponent,
    ExamenItemComponent,
    RegisterPacienteComponent,
    RegisterAdminComponent,
    RegisterEspecialistaComponent,
    UserPerfilComponent,
    HorarioComponent,
    TurnoNuevoComponent,
    TurnoItemComponent,
    TurnoListComponent,
    TurnoDetalleComponent,
    EstadoPipe,
    EncuestaComponent,
    HistoriaNuevaComponent,
    HistoriaItemComponent,
    HistoriaListComponent,
    HistoriaDetalleComponent,

    //pipes    
    RolPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    NgxMaterialTimepickerModule,
    NgxSpinnerModule
  ],
  exports: [
    //directives
    EmailDirective,

    FooterComponent,
    HeaderComponent,
    UserRegisterComponent,
    UserItemComponent,
    UserListComponent,
    AlertComponent,
    UserDetalleComponent,
    RegisterPacienteComponent,
    RegisterAdminComponent,
    RegisterEspecialistaComponent,
    UserPerfilComponent,
    HorarioComponent,
    TurnoNuevoComponent,
    TurnoItemComponent,
    TurnoListComponent,
    TurnoDetalleComponent,
    EstadoPipe,
    EncuestaComponent,
    HistoriaNuevaComponent,
    HistoriaItemComponent,
    HistoriaListComponent,
    HistoriaDetalleComponent,
    
    //pipes
    RolPipe
  ]
})
export class SharedModule { }
