import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SvgModule } from './svg/svg.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SvgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
