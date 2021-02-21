import {
  SET_COUNT,
  SET_NOTIFICATION,
  SET_URL,
  SET_RECENT_VISIBILITY,
  SET_RECENT_LIST,
  PUSH_TO_RECENT_LIST,
} from "./constants";

export interface Notification {
  message: string;
  type: "popup" | "error";
}

export interface State {
  url: string;
  count: number;
  notification: Notification | null;
  recentList: Array<[string, string]>;
  recentVisibility?: boolean;
}

export interface SetUrl {
  type: typeof SET_URL;
  payload: string;
}

export interface SetCount {
  type: typeof SET_COUNT;
  payload: number;
}

export interface SetNotification {
  type: typeof SET_NOTIFICATION;
  payload: Notification | null;
}

export interface SetRecentVisibility {
  type: typeof SET_RECENT_VISIBILITY;
  payload: boolean;
}

export interface SetRecentList {
  type: typeof SET_RECENT_LIST;
  payload: Array<[string, string]>;
}

export interface PushToREcentList {
  type: typeof PUSH_TO_RECENT_LIST;
  payload: [string, string];
}

export type ActionsTypes =
  | SetUrl
  | SetCount
  | SetNotification
  | SetRecentVisibility
  | SetRecentList
  | PushToREcentList;
