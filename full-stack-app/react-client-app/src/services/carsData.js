export const allCars = async () => {
  const res = await fetch('http://localhost:8040/cars');
  const cars = await res.json();
  return cars;
};

export const oneCar = async carId => {
  const res = await fetch(
    `http://localhost:8040/cars/${encodeURIComponent(carId)}`);
  const car = await res.json();
  return car;
}

export const appendCar = async newCar => {
  const res = await fetch('http://localhost:8040/cars', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newCar),
  });
  const car = await res.json();
  return car;
};

export const replaceCar = async car => {
  await fetch(
    `http://localhost:8040/cars/${encodeURIComponent(car.id)}`,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });
};

export const removeCar = async carId => {
  await fetch(
    `http://localhost:8040/cars/${encodeURIComponent(carId)}`,
    { method: 'DELETE' });
};
