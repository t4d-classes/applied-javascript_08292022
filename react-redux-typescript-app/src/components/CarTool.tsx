import { useCarTool } from '../hooks/useCarTool';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = () => {

  const {
    cars,
    editCarId,
    carsSort,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
    sortCars,    
  } = useCarTool();

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        carsSort={carsSort} onEditCar={editCar} onDeleteCar={deleteCar}
        onSortCars={sortCars} onSaveCar={saveCar} onCancelCar={cancelCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};