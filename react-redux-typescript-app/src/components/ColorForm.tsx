import { useState, ChangeEvent } from 'react';
import { NewColor } from '../models/colors';
import { useForm } from '../hooks/useForm';

export type ColorFormProps = {
  buttonText: string;
  onSubmitColor: (color: NewColor) => void;
}

export const ColorForm = (props: ColorFormProps) => {

  const [colorForm, change, resetColorForm] = useForm({
    name: '', hexcode: '',
  });

  const submitColor = () => {
    props.onSubmitColor({
      ...colorForm
    });
    resetColorForm();
  };

  return (
    <form>
      <label>
        Color Name:
        <input type="text" name="name"
          value={colorForm.name} onChange={change} />
      </label>
      <label>
        Color Hexcode:
        <input type="text" name="hexcode"
          value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );

};