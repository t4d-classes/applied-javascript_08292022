import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { CalcToolState, CalcToolProps } from '../models/calcToolStore';
import { 
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryEntryAction,
  createNoOpAction, createErrorMessageAction } from '../actions/calcToolActions';
import { HistoryEntry } from '../models/history';

import {
  resultSelector, historySelector, errorMessageSelector
} from '../selectors/calcToolSelectors';


export type UseCalcTool = () => CalcToolProps;

export const useCalcTool: UseCalcTool = () => {

  console.log("useCalcTool")

  const result = useSelector<CalcToolState, number>(resultSelector);

  const history = useSelector<CalcToolState, HistoryEntry[]>(historySelector);

  const errorMessage = useSelector<CalcToolState, string>(errorMessageSelector);

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
    noOp: createNoOpAction,
    setErrorMessage: createErrorMessageAction,
  }, useDispatch());

  return {
    result,
    history,
    errorMessage,
    ...boundActions,
  };

};