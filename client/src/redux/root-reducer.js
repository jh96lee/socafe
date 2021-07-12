import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
// import postCategoryReducer from "./post-category/postCategoryReducer";

import uploadImageReducer from "./upload-image/uploadImageReducer";

import commentReducer from "./comment/commentReducer";
import homeFeedReducer from "./home-feed/homeFeedReducer";
import userProfileReducer from "./user-profile/userProfileReducer";

import userLoginReducer from "./user-login/userLoginReducer";

import userRegisterFormReducer from "./user-register/user-register-form/userRegisterFormReducer";
import userRegisterStepReducer from "./user-register/user-register-step/userRegisterStepReducer";
import userRegisterFollowTopic from "./user-register/user-register-follow-topic/userRegisterFollowTopicReducer";

import userFollowTopicsReducer from "./user-follow-topics/userFollowTopicsReducer";
import userFollowingTopicsReducer from "./user-following-topics/userFollowingTopicsReducer";

import postReducer from "./post/postReducer";

import postImagesReducer from "./add-post/post-images/postImagesReducer";
import postCategoriesReducer from "./add-post/post-categories/postCategoriesReducer";
import postUsersReducer from "./add-post/post-users/postUsersReducer";
import postCaptionReducer from "./add-post/post-caption/postCaptionReducer";
import postUploadReducer from "./add-post/post-upload/postUploadReducer";

const rootReducer = combineReducers({
	userReducer,
	uploadImageReducer,

	commentReducer,
	homeFeedReducer,
	userProfileReducer,
	postImagesReducer,
	postCategoriesReducer,
	postUsersReducer,
	postCaptionReducer,
	postUploadReducer,
	postReducer,

	userLoginReducer,

	userRegisterFormReducer,
	userRegisterStepReducer,
	userRegisterFollowTopic,

	userFollowTopicsReducer,
	userFollowingTopicsReducer,
});

export default rootReducer;
