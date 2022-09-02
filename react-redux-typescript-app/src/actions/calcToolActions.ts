import { Action } from 'redux';


export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'MULTIPLY';
export const DIVIDE_ACTION = 'DIVIDE';
export const CLEAR_ACTION = 'CLEAR';
export const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY';
export const NO_OP_ACTION = 'NO_OP';
export const ERROR_MESSAGE_ACTION = 'ERROR_MESSAGE';

export type MathActions =
  | typeof ADD_ACTION
  | typeof SUBTRACT_ACTION
  | typeof MULTIPLY_ACTION
  | typeof DIVIDE_ACTION;

export interface MathAction<T = MathActions> extends Action<T> {
  payload: {
    num: number;
  }
}

export function isMathAction(action: any): action is MathAction {
  return ([
    ADD_ACTION,
    SUBTRACT_ACTION,
    MULTIPLY_ACTION,
    DIVIDE_ACTION ].includes(action.type));
}

export interface AddAction extends MathAction<typeof ADD_ACTION> { }

export type CreateAddAction = (value: number) => AddAction;

export function isAddAction(action: any): action is AddAction {
  return action?.type === ADD_ACTION;
}

export const createAddAction: CreateAddAction = (value) => ({
  type: ADD_ACTION,
  payload: { num: value },
});

export interface SubtractAction extends MathAction<typeof SUBTRACT_ACTION> { }

export type CreateSubtractAction = (value: number) => SubtractAction;

export function isSubtractAction(action: any): action is SubtractAction {
  return action?.type === SUBTRACT_ACTION;
}

export const createSubtractAction: CreateSubtractAction = (value) => ({
  type: SUBTRACT_ACTION,
  payload: { num: value },
});

export interface MultiplyAction extends MathAction<typeof MULTIPLY_ACTION> { }

export type CreateMultiplyAction = (value: number) => MultiplyAction;

export function isMultiplyAction(action: any): action is MultiplyAction {
  return action?.type === MULTIPLY_ACTION;
}

export const createMultiplyAction: CreateMultiplyAction = (value) => ({
  type: MULTIPLY_ACTION,
  payload: { num: value },
});

export interface DivideAction extends MathAction<typeof DIVIDE_ACTION> { }

export type CreateDivideAction = (value: number) => DivideAction;

export function isDivideAction(action: any): action is DivideAction {
  return action?.type === DIVIDE_ACTION;
}

export const createDivideAction: CreateDivideAction = (value) => ({
  type: DIVIDE_ACTION,
  payload: { num: value },
});


export interface ClearAction extends Action<typeof CLEAR_ACTION> { }

export type CreateClearAction = () => ClearAction;

export function isClearAction(action: any): action is ClearAction {
  return action?.type === CLEAR_ACTION;
}

export const createClearAction: CreateClearAction = () => ({
  type: CLEAR_ACTION,
});

export interface DeleteHistoryEntryAction extends Action<typeof DELETE_HISTORY_ENTRY_ACTION> {
  payload: {
    historyEntryId: number,
  }
}

export type CreateDeleteHistoryEntryAction = (historyEntryId: number) => DeleteHistoryEntryAction;

export function isDeleteHistoryEntryAction(action: any): action is DeleteHistoryEntryAction {
  return action?.type === DELETE_HISTORY_ENTRY_ACTION;
}

export const createDeleteHistoryEntryAction: CreateDeleteHistoryEntryAction = (historyEntryId) => ({
  type: DELETE_HISTORY_ENTRY_ACTION,
  payload: {
    historyEntryId,
  }
});

export interface NoOpAction extends Action<typeof NO_OP_ACTION> {
}

export type CreateNoOpAction = () => NoOpAction;

export function isNoOpAction(action: any): action is NoOpAction {
  return action?.type === NO_OP_ACTION;
}

export const createNoOpAction: CreateNoOpAction = () => ({
  type: NO_OP_ACTION,
});

export interface ErrorMessageAction extends Action<typeof ERROR_MESSAGE_ACTION> {
  payload: {
    errorMessage: string,
  }
}

export type CreateErrorMessageAction = (errorMessae: string) => ErrorMessageAction;

export function isErrorMessageAction(action: any): action is ErrorMessageAction {
  return action?.type === ERROR_MESSAGE_ACTION;
}

export const createErrorMessageAction: CreateErrorMessageAction = (errorMessage: string) => ({
  type: ERROR_MESSAGE_ACTION,
  payload: {
    errorMessage,
  }
});