import styled from 'styled-components';

import { useForm } from '../hooks/useForm';

const Label = styled.label`
  display: block;
`;

export const ColorForm = ({ buttonText, onSubmitColor }) => {

  const [ colorForm, change, resetColorForm ] = useForm({
    name: '', hexcode: '',
  });

  const submitColor = () => {
    onSubmitColor({...colorForm });
    resetColorForm();
  };

  return (
    <form className="colorForm">
      <Label>
        Name:
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </Label>
      <Label>
        Hexcode:
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </Label>
      <button type="button" onClick={submitColor}>{buttonText}</button>
    </form>
  );

};

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};