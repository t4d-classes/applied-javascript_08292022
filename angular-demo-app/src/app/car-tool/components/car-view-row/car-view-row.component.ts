import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: '.app-car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent implements OnInit {

  @Input()
  car!: Car;

  @Output()
  editCar = new EventEmitter<number>();  

  @Output()
  deleteCar = new EventEmitter<number>();  

  constructor() { }

  ngOnInit(): void {
  }

}
