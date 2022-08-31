import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';



@NgModule({
  declarations: [
    ColorHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColorHomeComponent
  ]
})
export class ColorToolModule { }
