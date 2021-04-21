import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import userRegisterReducer from "./user/userRegisterReducer";
import userRegisterFormReducer from "./user/userRegisterFormReducer";

const rootReducer = combineReducers({
	userReducer,
	userRegisterReducer,
	userRegisterFormReducer,
});

export default rootReducer;
