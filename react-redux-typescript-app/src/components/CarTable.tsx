import { Car, CarsSort, CarKeys } from '../models/cars';
import { CarEditRow } from "./CarEditRow";
import { CarViewRow } from "./CarViewRow";

export type CarTableProps = {
  cars: Car[];
  editCarId: number;
  carsSort: CarsSort;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSortCars: (col: CarKeys) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;  
};

export const CarTable = ({
  cars, editCarId, carsSort,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSortCars: sortCars,
  onSaveCar: saveCar,
  onCancelCar: cancelCar,
 }: CarTableProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">
            <button type="button" onClick={() => sortCars('id')}>
              Id
              {carsSort.col === "id" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('make')}>
              Make
              {carsSort.col === "make" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('model')}>
              Model
              {carsSort.col === "model" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('year')}>
              Year
              {carsSort.col === "year" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('color')}>
              Color
              {carsSort.col === "color" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">
            <button type="button" onClick={() => sortCars('price')}>
              Price
              {carsSort.col === "price" && "(" + carsSort.dir + ")"}
            </button>
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(c => c.id === editCarId
          ? <CarEditRow key={c.id} car={c} onSaveCar={saveCar} onCancelCar={cancelCar} />
          : <CarViewRow key={c.id} car={c} onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>

  )


};