import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducer";
import postCategoryReducer from "./post-category/postCategoryReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
	registerReducer,
	loginReducer,
	userReducer,
	postCategoryReducer,
});

export default rootReducer;
