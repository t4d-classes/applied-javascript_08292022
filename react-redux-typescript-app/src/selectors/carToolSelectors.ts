import { Car, CarsSort, ORDER_ASC } from '../models/cars';
import { CarToolState } from '../models/carToolStore';

export const orderCars = (cars: Car[], carsSort: CarsSort) => {
  return cars.concat().sort((a: Car, b: Car) => {
    const left = String(a[carsSort.col]).toUpperCase();
    const right = String(b[carsSort.col]).toUpperCase();

    if (left < right) {
      return carsSort.dir === ORDER_ASC ? -1 : 1;
    } else if (left > right) {
      return carsSort.dir === ORDER_ASC ? 1 : -1;
    } else {
      return 0;
    }
  });
};

export const carsSelector = (state: CarToolState) =>
  orderCars(state.cars, state.carsSort);
export const editCarIdSelector = (state: CarToolState) => state.editCarId;
export const carsSortSelector = (state: CarToolState) => state.carsSort;
  
