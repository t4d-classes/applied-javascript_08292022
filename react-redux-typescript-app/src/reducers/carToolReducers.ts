import { Reducer, combineReducers, AnyAction } from 'redux';

import { Car, CarsSort, ORDER_ASC, ORDER_DESC } from '../models/cars';
import { CarToolState } from '../models/carToolStore';

import {
  isRefreshCarsDoneAction,
  isSortCarsAction,
  isEditCarAction,
  isCancelCarAction,
} from '../actions/carToolActions';

export const carsSortReducer: Reducer<CarsSort, AnyAction> = (
  carsSort = { col: 'id', dir: ORDER_ASC },
  action,
) => {
  if (isSortCarsAction(action)) {
    if (action.payload.col === carsSort.col) {
      return {
        ...carsSort,
        dir: carsSort.dir === ORDER_ASC ? ORDER_DESC : ORDER_ASC,
      };
    } else {
      return {
        col: action.payload.col,
        dir: ORDER_ASC,
      };
    }
  }

  return carsSort;
};

export const editCarIdReducer: Reducer<number, AnyAction> = (
  editCarId = -1,
  action,
) => {
  if (isEditCarAction(action)) {
    return action.payload.carId;
  }

  if (isRefreshCarsDoneAction(action) || isCancelCarAction(action)) {
    return -1;
  }

  return editCarId;
};

export const carsReducer: Reducer<Car[], AnyAction> = (
  cars = [],
  action,
) => {
  if (isRefreshCarsDoneAction(action)) {
    return action.payload.cars;
  }

  return cars;
};

export const carToolReducer: Reducer<CarToolState, AnyAction> = combineReducers(
  {
    carsSort: carsSortReducer,
    editCarId: editCarIdReducer,
    cars: carsReducer,
  },
);
