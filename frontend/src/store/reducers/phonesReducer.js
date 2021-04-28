import { GET_PHONES, PHONES_ERROR } from "../types";

const initialState = {
  phones: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload,
        loading: false,
      };
    case PHONES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
