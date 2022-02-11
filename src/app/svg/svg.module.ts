import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg.component';

@NgModule({
  exports: [
    SvgComponent
  ],
  declarations: [
    SvgComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SvgModule { }
