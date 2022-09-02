import { Injectable } from '@angular/core';
import { Car, NewCar } from '../models/cars';

@Injectable({
  providedIn: 'root' // added in Angular 6
})
export class CarsService {

  private cars: Car[] = [
    { id: 1, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 120000 },
    { id: 2, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'blue', price: 45000 }
  ];

  public all() {
    return [...this.cars];
  }

  public addCar(car: NewCar) {
    this.cars = [
      ...this.cars,
      {
        ...car,
        id: Math.max(...this.cars.map(c => c.id), 0) + 1,
      },
    ];
  }

  public saveCar(car: Car) {
    const newCars = [...this.cars];
    const carIndex = newCars.findIndex(c => c.id === car.id);
    newCars[carIndex] = car;
    this.cars = newCars;
  }

  public deleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
  }
}
