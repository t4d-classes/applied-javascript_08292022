import { Reducer, AnyAction, combineReducers } from 'redux';

import { Color } from '../models/colors';
import { isRefreshColorsDoneAction } from '../actions/colorToolActions';

export const colorsReducer: Reducer<Color[], AnyAction> = (
  colors = [],
  action,
) => {
  
  if (isRefreshColorsDoneAction(action)) {
    return action.payload.colors;
  }

  return colors;
};

export const colorToolReducer = combineReducers({
  colors: colorsReducer,
});
