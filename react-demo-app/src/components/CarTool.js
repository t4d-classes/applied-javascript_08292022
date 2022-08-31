import { useState } from "react";

import { ToolHeader } from './ToolHeader';
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = (props) => {

  const [ cars, setCars ] = useState([ ...props.cars ]);

  const addCar = car => {

    setCars([
      ...cars, // make a copy of the array
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);

  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar} />
      <CarForm onSubmitCar={addCar} />
    </>
  );

};