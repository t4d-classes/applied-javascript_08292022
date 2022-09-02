import { useState, ChangeEvent } from 'react';
import { NewCar } from '../models/cars';
import { useForm } from '../hooks/useForm';

export type CarFormProps = {
  buttonText: string;
  onSubmitCar: (car: NewCar) => void;
}

export const CarForm = (props: CarFormProps) => {

  const [carForm, change, resetCarForm ] = useForm({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const [ errorMessage, setErrorMessage ] = useState('');

  const submitCar = () => {

    if (!carForm.make) {
      setErrorMessage("Make is required.");
      return;
    }

    props.onSubmitCar({
      ...carForm
    });

    resetCarForm();
    setErrorMessage("");
  };

  return (
    <form>
      {errorMessage && <div>{errorMessage}</div>}
      <label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </label>
      <label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </label>
      <label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </label>
      <label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </label>
      <label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );

};