import { Dispatch, AnyAction } from 'redux';
import { Car, NewCar, CarsSort, CarKeys } from './cars';

export type CarToolState = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
};

export type CarToolProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  refreshCars: () => (dispatch: Dispatch<AnyAction>) =>
  Promise<void>;
  addCar: (car: NewCar) => (dispatch: Dispatch<AnyAction>) =>
  Promise<void>;
  saveCar: (car: Car) => (dispatch: Dispatch<AnyAction>) =>
  Promise<void>;
  deleteCar: (carId: number) => (dispatch: Dispatch<AnyAction>) =>
  Promise<void>;
  editCar: (carId: number) => void;
  cancelCar: () => void;
  sortCars: (col: CarKeys) => void;
};
