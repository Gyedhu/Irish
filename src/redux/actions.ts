import {
  SET_COUNT,
  SET_NOTIFICATION,
  SET_URL,
  SET_RECENT_VISIBILITY,
  SET_RECENT_LIST,
  PUSH_TO_RECENT_LIST,
} from "./constants";
import {
  SetCount,
  SetNotification,
  SetUrl,
  SetRecentVisibility,
  SetRecentList,
  PushToREcentList,
} from "./types";

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

export const setRecentVisibility = (
  payload: SetRecentVisibility["payload"]
): SetRecentVisibility => ({
  type: SET_RECENT_VISIBILITY,
  payload,
});

export const setRecentList = (
  payload: SetRecentList["payload"]
): SetRecentList => ({
  type: SET_RECENT_LIST,
  payload,
});

export const pushToRecentList = (
  payload: PushToREcentList["payload"]
): PushToREcentList => ({
  type: PUSH_TO_RECENT_LIST,
  payload,
});
