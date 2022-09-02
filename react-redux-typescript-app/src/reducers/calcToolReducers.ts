import { Reducer, AnyAction, combineReducers } from 'redux';

import {
  isAddAction, isSubtractAction, isMultiplyAction, isDivideAction,
  isMathAction, isClearAction, isDeleteHistoryEntryAction, DIVIDE_ACTION, isNoOpAction, isErrorMessageAction
} from '../actions/calcToolActions';
import { CalcToolState } from '../models/calcToolStore';
import { HistoryEntry } from '../models/history';


// export const resultReducer: Reducer<number, AnyAction> = (
//   result = 0, action) => {

//     if (isClearAction(action)) {
//       return 0;
//     }
  
//     if (isAddAction(action)) {
//       return result + action.payload.num;
//     }

//     if (isSubtractAction(action)) {
//       return result - action.payload.num;
//     }

//     if (isMultiplyAction(action)) {
//       return result * action.payload.num;
//     }

//     if (isDivideAction(action)) {

//       if (action.payload.num === 0) {
//         return result;
//       }

//       return result / action.payload.num;
//     }

//     return result;

//   };

  export const historyReducer: Reducer<HistoryEntry[], AnyAction> = (
    history = [], action) => {

      if (isDeleteHistoryEntryAction(action)) {
        return history.filter(entry => entry.id !== action.payload.historyEntryId);
      }

      if (isClearAction(action)) {
        return [];
      }

      if (isMathAction(action)) {

          if (isDivideAction(action) && action.payload.num === 0) {
            return history;
          }

          return [
            ...history,
            {
              id: Math.max(...history.map(e => e.id), 0) + 1,
              opName: action.type,
              opValue: action.payload.num
            }
          ];
      }
  
      return history;
    };

  export const errorMessageReducer: Reducer<string, AnyAction> = (
    errorMessage = "", action) => {

    if (isErrorMessageAction(action)) {
      return action.payload.errorMessage;
    }

    if (isNoOpAction(action)) {
      return errorMessage + "!";
    }

    return "";
  }

  export const calcToolReducer: Reducer<
    CalcToolState, AnyAction
  > = combineReducers({
    // result: resultReducer,
    history: historyReducer,
    errorMessage: errorMessageReducer,
  });

//  export const calcToolReducer = function(state:CalcToolState, action: AnyAction) {

//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
//  }