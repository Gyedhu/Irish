import { SET_COUNT, SET_ERROR, SET_LOADING, SET_URL } from "./constants";
import { SetCount, SetError, SetLoading, SetUrl } from "./types";

export const setUrl = (payload: string): SetUrl => ({
  type: SET_URL,
  payload,
});

export const setLoading = (payload: boolean): SetLoading => ({
  type: SET_LOADING,
  payload,
});

export const setCount = (payload: number): SetCount => ({
  type: SET_COUNT,
  payload,
});

export const setError = (payload: string): SetError => ({
  type: SET_ERROR,
  payload,
});
