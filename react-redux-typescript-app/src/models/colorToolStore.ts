import { Dispatch, AnyAction } from 'redux';
import { Color, NewColor } from './colors';

export type ColorToolState = {
  colors: Color[];
};

export type ColorToolProps = {
  colors: Color[];
  refreshColors: () => (dispatch: Dispatch<AnyAction>) =>
    Promise<void>;
  addColor: (newColor: NewColor) =>
    (dispatch: Dispatch<AnyAction>) =>
      Promise<void>;
};
