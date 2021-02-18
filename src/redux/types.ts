import { SET_COUNT, SET_ERROR, SET_LOADING, SET_URL } from "./constants";

export interface State {
  url: string;
  loading: boolean;
  count: number;
  resultText: string;
  error: string;
}

export interface SetUrl {
  type: typeof SET_URL;
  payload: string;
}

export interface SetLoading {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetCount {
  type: typeof SET_COUNT;
  payload: number;
}

export interface SetError {
  type: typeof SET_ERROR;
  payload: string;
}

export type ActionsTypes = SetUrl | SetLoading | SetCount | SetError;
