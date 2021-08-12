import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

import homeFeedPostsReducer from "./home-feed/home-feed-posts/homeFeedPostsReducer";

import userLoginReducer from "./user-login/userLoginReducer";

import userRegisterFormReducer from "./user-register/user-register-form/userRegisterFormReducer";
import userRegisterStepReducer from "./user-register/user-register-step/userRegisterStepReducer";

import userFollowTopicsReducer from "./user-follow-topics/userFollowTopicsReducer";
import userFollowingTopicsReducer from "./user-following-topics/userFollowingTopicsReducer";

import mainPostReducer from "./main-post/mainPostReducer";
import mainPostCommentInputReducer from "./main-post-comment-input/mainPostCommentInputReducer";
import mainPostMyParentCommentsReducer from "./main-post-all-comments/main-post-my-parent-comments/mainPostMyParentCommentsReducer";
import mainPostOtherParentCommentsReducer from "./main-post-all-comments/main-post-other-parent-comments/mainPostOtherParentCommentsReducer";

import postImagesReducer from "./add-post/post-images/postImagesReducer";
import postTopicsReducer from "./add-post/post-topics/postTopicsReducer";
import postUsersReducer from "./add-post/post-users/postUsersReducer";
import postCaptionsReducer from "./add-post/post-captions/postCaptionsReducer";
import postUploadReducer from "./add-post/post-upload/postUploadReducer";

import userProfileOwnerReducer from "./user-profile/user-profile-owner/userProfileOwnerReducer";
import userProfilePostsReducer from "./user-profile/user-profile-posts/userProfilePostsReducer";

import editProfileReducer from "./edit-profile/editProfileReducer";

import changePasswordReducer from "./change-password/changePasswordReducer";

import commentNotificationsReducer from "./notifications/comment-notifications/commentNotificationsReducer";

const rootReducer = combineReducers({
	userReducer,

	changePasswordReducer,

	commentNotificationsReducer,

	editProfileReducer,

	homeFeedPostsReducer,

	postImagesReducer,
	postTopicsReducer,
	postUsersReducer,
	postCaptionsReducer,
	postUploadReducer,

	mainPostReducer,
	mainPostCommentInputReducer,
	mainPostMyParentCommentsReducer,
	mainPostOtherParentCommentsReducer,

	userLoginReducer,

	userRegisterFormReducer,
	userRegisterStepReducer,

	userFollowTopicsReducer,
	userFollowingTopicsReducer,

	userProfileOwnerReducer,
	userProfilePostsReducer,
});

export default rootReducer;
