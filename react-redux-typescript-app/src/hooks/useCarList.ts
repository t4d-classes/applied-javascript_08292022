import { useState } from 'react';

import { Car, NewCar } from '../models/cars';

type UseCarList = (initialCars: Car[]) => [
  Car[],
  (car: NewCar) => void,
  (car: Car) => void,
  (carId: number) => void,
];

export const useCarList: UseCarList = (initialCars) => {

  const [ cars, setCars ] = useState([ ...initialCars ]);

  const appendCar = (car: NewCar) => {
    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
  };

  const replaceCar = (car: Car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    setCars(newCars);
  }; 

  const removeCar = (carId: number) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return [ cars, appendCar, replaceCar, removeCar ];

};
