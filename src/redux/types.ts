import {
  SET_COUNT,
  SET_NOTIFICATION,
  SET_URL,
  SET_RECENT_STATE,
} from "./constants";

export interface Notification {
  message: string;
  type: "popup" | "error";
}

export interface State {
  url: string;
  count: number;
  notification: Notification | null;
  recent?: boolean;
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

export interface SetRecentState {
  type: typeof SET_RECENT_STATE;
  payload: boolean;
}

export type ActionsTypes = SetUrl | SetCount | SetNotification | SetRecentState;
