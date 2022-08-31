import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';



@NgModule({
  declarations: [
    CarHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarHomeComponent
  ]
})
export class CarToolModule { }
