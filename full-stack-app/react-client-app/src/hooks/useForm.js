import { useState } from 'react';

export const useForm = initialForm => {

  const [ form, setForm ] = useState(initialForm);

  const change = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.type === 'number'
        ? evt.target.valueAsNumber
        : evt.target.value,
    });
  };

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ]; // think of this as a tuple

};