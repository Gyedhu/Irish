import { SET_COUNT, SET_LOADING, SET_URL } from "./constants";
import { ActionsTypes, State } from "./types";

const initialState: State = {
  url: "",
  loading: false,
  count: -1,
  resultText: "",
};

const reducer = (state: State = initialState, action: ActionsTypes): State => {
  switch (action.type) {
    case SET_URL:
      return {
        ...state,
        url: action.payload,
        count: -1,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;