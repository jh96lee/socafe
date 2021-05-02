import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({ registerReducer, userReducer });

export default rootReducer;
