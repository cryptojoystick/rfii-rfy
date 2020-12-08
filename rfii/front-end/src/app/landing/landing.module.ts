import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LogoModule } from '../logo/logo.module';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LogoModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
