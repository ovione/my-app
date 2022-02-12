import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplaySvgModule } from './../util/display-svg/display-svg.module';
import { SvgComponent } from './svg.component';

@NgModule({
  exports: [
    SvgComponent
  ],
  declarations: [
    SvgComponent
  ],
  imports: [
    CommonModule,
    DisplaySvgModule,
  ]
})
export class SvgModule { }
