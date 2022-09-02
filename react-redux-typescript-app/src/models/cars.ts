

export type Car = {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    price: number;
};

export type CarKeys = keyof Car;

export type NewCar = Omit<Car, 'id'>;

export type NewCarKeys = keyof NewCar;

export const ORDER_ASC = 'asc';
export const ORDER_DESC = 'desc';

export type OrderDir = typeof ORDER_ASC | typeof ORDER_DESC;

export type CarsSort = {
  col: CarKeys;
  dir: OrderDir;
};