import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = "Car Tool";

  cars: Car[] = [
    { id: 1, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 120000 },
    { id: 2, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'blue', price: 45000 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
