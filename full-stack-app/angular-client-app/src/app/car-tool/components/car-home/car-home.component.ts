import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { Car, NewCar } from '../../models/cars';
import { CarsDataService } from '../../services/cars-data.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];

  editCarId = -1;

  constructor(private carsData: CarsDataService) { }

  ngOnInit(): void {
    this.carsData.all().subscribe({
      next: cars => this.cars = cars,
    });
  }

  editCar(carId: number) {
    this.editCarId = carId;
  }

  cancelCar() {
    this.editCarId = -1;
  }

  addCar(car: NewCar) {
    this.carsData.append(car)
      .pipe(
        switchMap(() => this.carsData.all())
      )
      .subscribe({
        next: cars => this.cars = cars,
      })
    this.editCarId = -1;
  }

  saveCar(car: Car) {
    this.carsData.replace(car)
      .pipe(
        switchMap(() => this.carsData.all())
      )
      .subscribe({
        next: cars => this.cars = cars,
      });
    this.editCarId = -1;
  }

  deleteCar(carId: number) {
    this.carsData.remove(carId)
      .pipe(
        switchMap(() => this.carsData.all())
      )
      .subscribe({
        next: cars => this.cars = cars,
      });
    this.editCarId = -1;
  }

}
