import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

import homeFeedPostsReducer from "./home-feed/home-feed-posts/homeFeedPostsReducer";

import userProfileReducer from "./user-profile/userProfileReducer";

import userLoginReducer from "./user-login/userLoginReducer";

import userRegisterFormReducer from "./user-register/user-register-form/userRegisterFormReducer";
import userRegisterStepReducer from "./user-register/user-register-step/userRegisterStepReducer";

import userFollowTopicsReducer from "./user-follow-topics/userFollowTopicsReducer";
import userFollowingTopicsReducer from "./user-following-topics/userFollowingTopicsReducer";

import postReducer from "./post/postReducer";

import mainPostReducer from "./main-post/mainPostReducer";
import mainPostCommentInputReducer from "./main-post-comment-input/mainPostCommentInputReducer";
import mainPostMyParentCommentsReducer from "./main-post-comments/main-post-my-parent-comments/mainPostMyParentCommentsReducer";
import mainPostOtherUsersCommentsReducer from "./main-post-comments/main-post-other-users-comments/mainPostOtherUsersCommentsReducer";

import postImagesReducer from "./add-post/post-images/postImagesReducer";
import postTopicsReducer from "./add-post/post-topics/postTopicsReducer";
import postUsersReducer from "./add-post/post-users/postUsersReducer";
import postCaptionsReducer from "./add-post/post-captions/postCaptionsReducer";
import postUploadReducer from "./add-post/post-upload/postUploadReducer";

const rootReducer = combineReducers({
	userReducer,

	homeFeedPostsReducer,

	userProfileReducer,

	postImagesReducer,
	postTopicsReducer,
	postUsersReducer,
	postCaptionsReducer,
	postUploadReducer,

	postReducer,

	mainPostReducer,
	mainPostCommentInputReducer,
	mainPostMyParentCommentsReducer,
	mainPostOtherUsersCommentsReducer,

	userLoginReducer,

	userRegisterFormReducer,
	userRegisterStepReducer,

	userFollowTopicsReducer,
	userFollowingTopicsReducer,
});

export default rootReducer;
