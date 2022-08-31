import { useState } from "react";
import styled from 'styled-components';


const Label = styled.label`
  display: block;
`;

export const CarForm = (props) => {

  const [carForm, setCarForm] = useState({
    make: '', model: '', year: 1900, color: '', price: 0,
  });

  const change = (evt) => {
    setCarForm({
      ...carForm,
      [evt.target.name]:evt.target.type === 'number'
        ? evt.target.valueAsNumber : evt.target.value,
    });
  };

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
  };

  return (
    <form>
      <Label>
        Make:
        <input type="text" name="make"
          value={carForm.make} onChange={change} />
      </Label>
      <Label>
        Model:
        <input type="text" name="model"
          value={carForm.model} onChange={change} />
      </Label>
      <Label>
        Year:
        <input type="number" name="year"
          value={carForm.year} onChange={change} />
      </Label>
      <Label>
        Color:
        <input type="text" name="color"
          value={carForm.color} onChange={change} />
      </Label>
      <Label>
        Price:
        <input type="number" name="price"
          value={carForm.price} onChange={change} />
      </Label>
      <button type="button" onClick={submitCar}>Add Car</button>
    </form>
  );

};