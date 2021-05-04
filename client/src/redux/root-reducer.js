import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducer";
import postCategoryReducer from "./post-category/postCategoryReducer";

const rootReducer = combineReducers({
	registerReducer,
	userReducer,
	postCategoryReducer,
});

export default rootReducer;
