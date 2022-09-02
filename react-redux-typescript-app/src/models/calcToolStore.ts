import { HistoryEntry } from './history';

export type CalcToolState = {
  history: HistoryEntry[];
  errorMessage: string;
};

export type CalcToolProps = {
  result: number;
  history: HistoryEntry[];
  errorMessage: string;
  add: (value: number) => void;
  subtract: (value: number) => void;
  multiply: (value: number) => void;
  divide: (value: number) => void;
  clear: () => void;
  deleteHistoryEntry: (historyEntryId: number) => void;
  noOp: () => void;
  setErrorMessage: (errorMessage: string) => void;
}
