import { useState } from 'react';

import { useCalcTool } from '../hooks/useCalcTool';

export const CalcTool = () => {

  const {
    result, history, errorMessage,
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry , noOp,
    setErrorMessage } = useCalcTool();

  const [ numInput, setNumInput ] = useState(0);

  const doDivide = () => {
    if (numInput === 0) {
      setErrorMessage("Cannot divide by zero.")
    } else {
      divide(numInput)
    }
  }

  const doClear = () => {
    setNumInput(0);
    clear();
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <div>Result: {result}</div>
      <form>
        <label>
          Num Input:
          <input type="number" value={numInput}
          onChange={e => setNumInput(parseFloat(e.target.value))} />
        </label>

        <fieldset>
          <button type="button" onClick={() => add(numInput)}>+</button>
          <button type="button" onClick={() => subtract(numInput)}>-</button>
          <button type="button" onClick={() => multiply(numInput)}>*</button>
          <button type="button" onClick={doDivide}>/</button>
          <button type="button" onClick={doClear}>Clear</button>
          <button type="button" onClick={noOp}>No Op</button>
        </fieldset>
      </form>

      <ul>
        {history.map(entry => <li key={entry.id}>
          {entry.opName} {entry.opValue}
          <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>X</button>
        </li>)}
      </ul>
    </>
  )

};