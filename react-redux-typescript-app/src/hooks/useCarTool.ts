import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';

import { Car, CarsSort } from '../models/cars';
import { CarToolState, CarToolProps } from '../models/carToolStore';
import { 
  refreshCars, appendCar, replaceCar,
  removeCar, createEditCarAction,
  createCancelCarAction, createSortCarsAction,
} from '../actions/carToolActions';
import {
  carsSelector, editCarIdSelector, carsSortSelector
} from '../selectors/carToolSelectors';

export type UseCarTool = () => CarToolProps;

export const useCarTool: UseCarTool = () => {

  const cars = useSelector<CarToolState, Car[]>(carsSelector);
  const editCarId = useSelector<CarToolState, number>(editCarIdSelector);
  const carsSort = useSelector<CarToolState, CarsSort>(carsSortSelector);

  const dispatch = useDispatch();

  const boundActions = useMemo(() => bindActionCreators({
    refreshCars: refreshCars,
    addCar: appendCar,
    saveCar: replaceCar,
    deleteCar: removeCar,
    editCar: createEditCarAction,
    cancelCar: createCancelCarAction,
    sortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  useEffect(() => {
    boundActions.refreshCars();
  }, [boundActions]);

  return {
    cars,
    editCarId,
    carsSort,
    ...boundActions,
  };

};