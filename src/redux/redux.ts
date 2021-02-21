import {
  SET_COUNT,
  SET_NOTIFICATION,
  SET_URL,
  SET_RECENT_VISIBILITY,
  SET_RECENT_LIST,
  PUSH_TO_RECENT_LIST,
} from "./constants";
import { ActionsTypes, State } from "./types";

const initialState: State = {
  url: "",
  count: -1,
  notification: null,
  recentVisibility: false,
};

const reducer = (state: State = initialState, action: ActionsTypes): State => {
  const newRecentList = state.recentList?.slice();

  switch (action.type) {
    case SET_URL:
      return { ...state, url: action.payload, count: -1 };

    case SET_COUNT:
      return { ...state, count: action.payload };

    case SET_NOTIFICATION:
      return { ...state, notification: action.payload };

    case SET_RECENT_VISIBILITY:
      return { ...state, recentVisibility: action.payload };

    case SET_RECENT_LIST:
      return { ...state, recentList: action.payload };

    case PUSH_TO_RECENT_LIST:
      newRecentList?.unshift(action.payload);
      return {
        ...state,
        recentList: newRecentList,
      };

    default:
      return state;
  }
};

export default reducer;
