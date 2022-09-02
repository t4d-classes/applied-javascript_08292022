import { createContext, useContext, FC } from "react";

import { CarToolState } from "../models/carToolStore";
import { Car } from '../models/cars';
import { useCarToolStore } from "../hooks/useCarToolStore";


const carList: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'blue', price: 120000 },
];

const carToolStoreContext = createContext({} as CarToolState);


export const CarToolStoreProvider: FC = ({ children }) => {

  return (
    <carToolStoreContext.Provider value={useCarToolStore(carList)}>
      {children}
    </carToolStoreContext.Provider>
  );
};


export const useCarToolStoreConsumer = () => {
  return useContext(carToolStoreContext);
};