import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car, NewCar } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http
      .get<Car[]>('http://localhost:8040/cars');
  }

  append(newCar: NewCar) {
    return this.http
      .post<Car>('http://localhost:8040/cars', newCar);
  }

  replace(car: Car) {
    return this.http
      .put<void>(
        `http://localhost:8040/cars/${encodeURIComponent(car.id)}`,
        car,
      );
  }

  remove(carId: number) {
    return this.http
      .delete<void>(
        `http://localhost:8040/cars/${encodeURIComponent(carId)}`);
  }
}
