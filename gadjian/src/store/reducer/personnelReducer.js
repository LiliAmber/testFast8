import { SHOW_PERSONNEL, SHOW_LOADING, SHOW_ERROR } from "../action/actionType";

const initialState = {
  personnel: [],
  loading: false,
  error: null,
};

function personnelReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_PERSONNEL:
      return { ...state, personnel: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERROR:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default personnelReducer;
