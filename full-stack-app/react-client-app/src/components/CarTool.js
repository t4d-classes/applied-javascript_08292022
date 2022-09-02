import { useState, useEffect, useCallback } from "react";

import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";

import {
  allCars, appendCar, replaceCar, removeCar
} from '../services/carsData';

export function CarTool(props) {

  const [cars, setCars] = useState([...props.cars]);
  const [editCarId, setEditCarId] = useState(-1);

  const refreshCars = useCallback(async () => {
    setCars(await allCars());
  }, []);

  const addCar = useCallback(async car => {
    await appendCar(car);
    await refreshCars();
    setEditCarId(-1);
  }, [refreshCars]);

  const saveCar =  useCallback(async car => {
    await replaceCar(car);
    await refreshCars();
    setEditCarId(-1);
  }, [refreshCars]);

  const deleteCar =  useCallback(async carId => {
    await removeCar(carId);
    await refreshCars();
    setEditCarId(-1);
  }, [refreshCars]);

  const cancelCar =  useCallback(() => setEditCarId(-1), []);

  useEffect(() => {
    refreshCars();
  }, [refreshCars]);


  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );

}