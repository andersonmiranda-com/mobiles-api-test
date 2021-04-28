import { combineReducers } from "redux";
import phoneReducer from "./phonesReducer";

export default combineReducers({
  phonesList: phoneReducer,
});
