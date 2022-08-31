import { CarViewRow } from "./CarViewRow";
import { CarEditRow } from "./CarEditRow";

export const CarTable = ({
  cars,
  editCarId,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => car.id === editCarId
          ? <CarEditRow key={car.id} car={car}
          onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={car.id} car={car}
          onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );

};