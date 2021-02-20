import { SET_COUNT, SET_NOTIFICATION, SET_URL } from "./constants";
import { ActionsTypes, State } from "./types";

const initialState: State = {
  url: "",
  count: -1,
  notification: null,
};

const reducer = (state: State = initialState, action: ActionsTypes): State => {
  switch (action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.payload,
        count: -1,
      };

    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    case SET_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
