import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';



@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ColorHomeComponent
  ]
})
export class ColorToolModule { }
