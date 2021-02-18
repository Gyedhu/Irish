import { SET_COUNT, SET_LOADING, SET_URL } from "./constants";
import { SetCount, SetLoading, SetUrl } from "./types";

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
