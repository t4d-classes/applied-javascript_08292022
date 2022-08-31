import { useState } from "react";

export const ColorForm = (props) => {

  const [ colorForm, setColorForm ] = useState({
    name: '', hexcode: '',
  });

  const change = (evt) => {
    setColorForm({
      ...colorForm,
      [ evt.target.name ]: evt.target.value,
    });
  };

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>Add Color</button>
    </form>
  );

};