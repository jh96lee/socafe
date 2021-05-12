import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducer";
import postCategoryReducer from "./post-category/postCategoryReducer";
import loginReducer from "./login/loginReducer";
import addPostReducer from "./add-post/addPostReducer";
import uploadImageReducer from "./upload-image/uploadImageReducer";

const rootReducer = combineReducers({
	registerReducer,
	loginReducer,
	userReducer,
	postCategoryReducer,
	addPostReducer,
	uploadImageReducer,
});

export default rootReducer;
