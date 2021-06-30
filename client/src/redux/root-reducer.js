import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducer";
import postCategoryReducer from "./post-category/postCategoryReducer";
import loginReducer from "./login/loginReducer";
import addPostReducer from "./add-post/addPostReducer";
import uploadImageReducer from "./upload-image/uploadImageReducer";
import categoryOfInterestReducer from "./category-of-interest/categoryOfInterestReducer";
import commentReducer from "./comment/commentReducer";
import homeFeedReducer from "./home-feed/homeFeedReducer";
import userProfileReducer from "./user-profile/userProfileReducer";
import postModalReducer from "./post-modal/postModalReducer";
import postImageReducer from "./upload-post/post-image/postImageReducer";

const rootReducer = combineReducers({
	registerReducer,
	loginReducer,
	userReducer,
	postCategoryReducer,
	addPostReducer,
	uploadImageReducer,
	categoryOfInterestReducer,
	commentReducer,
	homeFeedReducer,
	userProfileReducer,
	postModalReducer,
	postImageReducer,
});

export default rootReducer;
