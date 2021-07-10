import { combineReducers } from "redux";
import registerReducer from "./register/registerReducer";
import userReducer from "./user/userReducer";
// import postCategoryReducer from "./post-category/postCategoryReducer";
import loginReducer from "./login/loginReducer";

import uploadImageReducer from "./upload-image/uploadImageReducer";
import categoryOfInterestReducer from "./category-of-interest/categoryOfInterestReducer";
import commentReducer from "./comment/commentReducer";
import homeFeedReducer from "./home-feed/homeFeedReducer";
import userProfileReducer from "./user-profile/userProfileReducer";

import postReducer from "./post/postReducer";

import postImagesReducer from "./add-post/post-images/postImagesReducer";
import postCategoriesReducer from "./add-post/post-categories/postCategoriesReducer";
import postUsersReducer from "./add-post/post-users/postUsersReducer";
import postCaptionReducer from "./add-post/post-caption/postCaptionReducer";
import postUploadReducer from "./add-post/post-upload/postUploadReducer";

const rootReducer = combineReducers({
	registerReducer,
	loginReducer,
	userReducer,
	uploadImageReducer,
	categoryOfInterestReducer,
	commentReducer,
	homeFeedReducer,
	userProfileReducer,
	postImagesReducer,
	postCategoriesReducer,
	postUsersReducer,
	postCaptionReducer,
	postUploadReducer,
	postReducer,
});

export default rootReducer;
