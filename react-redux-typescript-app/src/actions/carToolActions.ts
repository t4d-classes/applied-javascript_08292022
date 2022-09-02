import { Action, AnyAction, Dispatch } from 'redux';

import { Car, NewCar, CarKeys } from '../models/cars';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_CAR_REQUEST';
export const REMOVE_CAR_REQUEST_ACTION = 'REMOVE_CAR_REQUEST';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export interface RefreshCarsRequestAction
  extends Action<typeof REFRESH_CARS_REQUEST_ACTION> {
}

export type CreateRefreshCarsRequestAction = () => RefreshCarsRequestAction;

export function isRefreshCarsRequestAction(
  action: any,
): action is RefreshCarsRequestAction {
  return action?.type === REFRESH_CARS_REQUEST_ACTION;
}

export const createRefreshCarsRequestAction: CreateRefreshCarsRequestAction = () =>
({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export interface RefreshCarsDoneAction
  extends Action<typeof REFRESH_CARS_DONE_ACTION> {
    payload: {
      cars: Car[]
    }
}

export type CreateRefreshCarsDoneAction = (cars: Car[]) => RefreshCarsDoneAction;

export function isRefreshCarsDoneAction(
  action: any,
): action is RefreshCarsDoneAction {
  return action?.type === REFRESH_CARS_DONE_ACTION;
}

export const createRefreshCarsDoneAction: CreateRefreshCarsDoneAction = (cars) =>
({
  type: REFRESH_CARS_DONE_ACTION,
  payload: {
    cars,
  }
});

// New Car Action

export interface AppendCarRequestAction extends Action<typeof APPEND_CAR_REQUEST_ACTION> {
  payload: { car: NewCar };
}

export type CreateAppendCarRequestAction = (car: NewCar) => AppendCarRequestAction;

export function isAppendCarRequestAction(
  action: AnyAction,
): action is AppendCarRequestAction {
  return action?.type === APPEND_CAR_REQUEST_ACTION;
}

export const createAppendCarRequestAction: CreateAppendCarRequestAction = (car) => ({
  type: APPEND_CAR_REQUEST_ACTION,
  payload: { car },
});

// End New Car Action

// Existing Car Action

export interface ReplaceCarRequestAction extends Action<typeof REPLACE_CAR_REQUEST_ACTION> {
  payload: { car: Car };
}

export type CreateReplaceCarRequestAction = (car: Car) => ReplaceCarRequestAction;

export function isReplaceCarRequestAction(
  action: AnyAction,
): action is ReplaceCarRequestAction {
  return action?.type === REPLACE_CAR_REQUEST_ACTION;
}

export const createReplaceCarRequestAction: CreateReplaceCarRequestAction = (car) => ({
  type: REPLACE_CAR_REQUEST_ACTION,
  payload: { car },
});

// End Existing Car Action

// Remove Car Action

export interface RemoveCarRequestAction extends Action<typeof REMOVE_CAR_REQUEST_ACTION> {
  payload: { carId: number };
}

export type CreateRemoveCarRequestAction = (carId: number) => RemoveCarRequestAction;

export function isRemoveCarRequestAction(
  action: AnyAction,
): action is RemoveCarRequestAction {
  return action.type === REMOVE_CAR_REQUEST_ACTION;
}

export const createRemoveCarRequestAction: CreateRemoveCarRequestAction = (carId) => ({
  type: REMOVE_CAR_REQUEST_ACTION,
  payload: { carId },
});

// End Remove Action

// Edit Car Action

export interface EditCarAction extends Action<typeof EDIT_CAR_ACTION> {
  payload: { carId: number };
}

export type CreateEditCarAction = (carId: number) => EditCarAction;

export function isEditCarAction(action: AnyAction): action is EditCarAction {
  return action.type === EDIT_CAR_ACTION;
}

export const createEditCarAction: CreateEditCarAction = (carId) => ({
  type: EDIT_CAR_ACTION,
  payload: { carId },
});

// End Edit Car Car

// Car Action

export type CancelCarAction = Action<typeof CANCEL_CAR_ACTION>;

export type CreateCancelCarAction = () => CancelCarAction;

export function isCancelCarAction(
  action: AnyAction,
): action is CancelCarAction {
  return action.type === CANCEL_CAR_ACTION;
}

export const createCancelCarAction: CreateCancelCarAction = () => ({
  type: CANCEL_CAR_ACTION,
});

// End Car Action

// Sort Cars Action

export interface SortCarsAction extends Action<typeof SORT_CARS_ACTION> {
  payload: { col: CarKeys };
}

export type CreateSortCarsAction = (col: CarKeys) => SortCarsAction;

export function isSortCarsAction(action: AnyAction): action is SortCarsAction {
  return action.type === SORT_CARS_ACTION;
}

export const createSortCarsAction: CreateSortCarsAction = (col: CarKeys) => ({
  type: SORT_CARS_ACTION,
  payload: { col },
});

// End Sort Cars Action

export const refreshCars = () => {

  return async (dispatch: Dispatch) => {

    // orchestrate multiple actions
    dispatch(createRefreshCarsRequestAction());
    const res = await fetch('http://localhost:3060/cars');
    const cars = await res.json();
    dispatch(createRefreshCarsDoneAction(cars));
  };

};

export const appendCar = (newCar: NewCar) => {

  return async (dispatch: Dispatch) => {

    dispatch(createAppendCarRequestAction(newCar));
    await fetch('http://localhost:3060/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCar),
    });
    refreshCars()(dispatch);

  };

};

export const replaceCar = (car: Car) => {

  return async (dispatch: Dispatch) => {

    dispatch(createReplaceCarRequestAction(car));
    await fetch('http://localhost:3060/cars/' + encodeURIComponent(car.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
    refreshCars()(dispatch);

  };

};

export const removeCar = (carId: number) => {

  return async (dispatch: Dispatch) => {

    dispatch(createRemoveCarRequestAction(carId));
    await fetch(`http://localhost:3060/cars/${encodeURIComponent(carId)}`, {
      method: 'DELETE',
    });
    refreshCars()(dispatch);

  };

};
