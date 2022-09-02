import { createSelector } from 'reselect';

import { CalcToolState } from '../models/calcToolStore';

export const resultSelector = createSelector( 
  (state: CalcToolState) => state.history,
  history => {

    const newResult = history.reduce((r, entry) => {
      switch (entry.opName) {
        case 'ADD':
          return r + entry.opValue;
        case 'SUBTRACT':
          return r - entry.opValue;
        case 'MULTIPLY':
          return r * entry.opValue;
        case 'DIVIDE':
          return r / entry.opValue;
        default:
          return r;
      }
    }, 0);
    
    console.log("recalculate results 2, ", newResult);

    return newResult;
    
  });

export const historySelector = (state: CalcToolState) =>
  state.history;

export const errorMessageSelector = (state: CalcToolState) =>
  state.errorMessage;
