import { SET_COUNT, SET_NOTIFICATION, SET_URL } from "./constants";

export interface Notification {
  message: string;
  type: "loading" | "error";
}

export interface State {
  url: string;
  count: number;
  notification: Notification | null;
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

export type ActionsTypes = SetUrl | SetCount | SetNotification;
