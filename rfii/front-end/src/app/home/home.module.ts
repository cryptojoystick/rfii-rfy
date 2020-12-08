import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingModule } from '../landing/landing.module';
import { InfoModule } from '../info/info.module';
import { DecentralizationModule } from '../decentralization/decentralization.module';
import { RoadmapModule } from '../roadmap/roadmap.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LandingModule,
    RoadmapModule,
    InfoModule,
    DecentralizationModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
