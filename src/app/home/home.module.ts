import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { SharedModule } from '../shared/shared.module';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { RecaptchaModule } from "ng-recaptcha";

@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    PruebaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RecaptchaModule
  ]
})
export class HomeModule { }
