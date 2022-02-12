import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplaySvgComponent } from './display-svg.component';

@NgModule({
  declarations: [DisplaySvgComponent],
  exports: [DisplaySvgComponent],
  imports: [
    CommonModule
  ]
})
export class DisplaySvgModule { }
