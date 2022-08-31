import { useState } from "react";

import { useList } from "../hooks/useList";

import { ToolHeader } from './ToolHeader';
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

export const CarTool = (props) => {

  const [ cars, appendCar, replaceCar, removeCar ] = useList([ ...props.cars ]);
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = car => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  }

  const cancelCar = () => {
    setEditCarId(-1);
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm onSubmitCar={addCar} />
    </>
  );

};