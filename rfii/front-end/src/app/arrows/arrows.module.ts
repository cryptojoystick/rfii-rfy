import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowsComponent } from './arrows.component';



@NgModule({
  declarations: [ArrowsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArrowsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ArrowsModule { }
