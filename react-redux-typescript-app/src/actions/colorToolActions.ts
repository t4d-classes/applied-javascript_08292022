import { Action, Dispatch } from 'redux';

import { NewColor, Color } from '../models/colors';

export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';
export const APPEND_COLOR_REQUEST_ACTION = 'APPEND_COLOR_REQUEST';

export interface RefreshColorsRequestAction
  extends Action<typeof REFRESH_COLORS_REQUEST_ACTION> {
}

export type CreateRefreshColorsRequestAction = () => RefreshColorsRequestAction;

export function isRefreshColorsRequestAction(
  action: any,
): action is RefreshColorsRequestAction {
  return action?.type === REFRESH_COLORS_REQUEST_ACTION;
}

export const createRefreshColorsRequestAction: CreateRefreshColorsRequestAction = () =>
({
  type: REFRESH_COLORS_REQUEST_ACTION,
});

export interface RefreshColorsDoneAction
  extends Action<typeof REFRESH_COLORS_DONE_ACTION> {
    payload: {
      colors: Color[]
    }
}

export type CreateRefreshColorsDoneAction = (colors: Color[]) => RefreshColorsDoneAction;

export function isRefreshColorsDoneAction(
  action: any,
): action is RefreshColorsDoneAction {
  return action?.type === REFRESH_COLORS_DONE_ACTION;
}

export const createRefreshColorsDoneAction: CreateRefreshColorsDoneAction = (colors) =>
({
  type: REFRESH_COLORS_DONE_ACTION,
  payload: {
    colors,
  }
});

export interface AppendColorRequestAction
  extends Action<typeof APPEND_COLOR_REQUEST_ACTION> {
  payload: {
    newColor: NewColor;
  };
}

export type CreateAppendColorRequestAction = (newColor: NewColor) => AppendColorRequestAction;

export function isAppendColorRequestAction(
  action: any,
): action is AppendColorRequestAction {
  return action?.type === APPEND_COLOR_REQUEST_ACTION;
}

export const createAppendColorRequestAction: CreateAppendColorRequestAction = (
  newColor: NewColor,
) => ({
  type: APPEND_COLOR_REQUEST_ACTION,
  payload: { newColor },
});

export const refreshColors = () => {

  return async (dispatch: Dispatch) => {

    // orchestrate multiple actions
    dispatch(createRefreshColorsRequestAction());
    const res = await fetch('http://localhost:3060/colors');
    const colors = await res.json();
    dispatch(createRefreshColorsDoneAction(colors));
  };

};

export const appendColor = (newColor: NewColor) => {

  return async (dispatch: Dispatch) => {

    dispatch(createAppendColorRequestAction(newColor));
    await fetch('http://localhost:3060/colors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newColor),
    });
    refreshColors()(dispatch);

  };

};
