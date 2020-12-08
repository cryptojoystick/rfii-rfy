import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirclesComponent } from './circles.component';



@NgModule({
  declarations: [CirclesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CirclesComponent
  ]
})
export class CirclesModule { }
