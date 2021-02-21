import {
  SET_COUNT,
  SET_NOTIFICATION,
  SET_URL,
  SET_RECENT_STATE,
} from "./constants";
import { SetCount, SetNotification, SetUrl, SetRecentState } from "./types";

export const setUrl = (payload: SetUrl["payload"]): SetUrl => ({
  type: SET_URL,
  payload,
});

export const setCount = (payload: SetCount["payload"]): SetCount => ({
  type: SET_COUNT,
  payload,
});

export const setNotification = (
  payload: SetNotification["payload"]
): SetNotification => ({
  type: SET_NOTIFICATION,
  payload,
});

export const setRecentState = (
  payload: SetRecentState["payload"]
): SetRecentState => ({
  type: SET_RECENT_STATE,
  payload,
});
