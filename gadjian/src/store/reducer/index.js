import { combineReducers } from "redux";
import personnelReducer from "./personnelReducer";
import searchReducer from "./searchReducer";

const reducer = combineReducers({
  personnelReducer,
  searchReducer,
});

export default reducer;
