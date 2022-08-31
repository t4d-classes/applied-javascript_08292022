import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorToolModule } from './color-tool/color-tool.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ColorToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
