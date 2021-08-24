import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

import homeFeedPostsReducer from "./home-feed/home-feed-posts/homeFeedPostsReducer";

import userLoginReducer from "./user-login/userLoginReducer";

import userRegisterFormReducer from "./user-register/user-register-form/userRegisterFormReducer";
import userRegisterStepReducer from "./user-register/user-register-step/userRegisterStepReducer";

import userFollowTopicsReducer from "./user-follow-topics/userFollowTopicsReducer";
import userFollowingTopicsReducer from "./user-following-topics/userFollowingTopicsReducer";

import mainPostReducer from "./main-post/mainPostReducer";
import mainPostCommentsReducer from "./main-post-comments/mainPostCommentsReducer";
import mainPostCommentInputReducer from "./main-post-comment-input/mainPostCommentInputReducer";

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

import storyBackgroundReducer from "./add-story/story-background/storyBackgroundReducer";
import storyTextReducer from "./add-story/story-text/storyTextReducer";
import storyImageReducer from "./add-story/story-image/storyImageReducer";
import storyUploadReducer from "./add-story/story-upload/storyUploadReducer";

import activeStoryReducer from "./story/active-story/activeStoryReducer";
import usersStoriesReducer from "./story/users-stories/usersStoriesReducer";
import viewedStoriesReducer from "./story/viewed-stories/viewedStoriesReducer";

import exploreReducer from "./explore/exploreReducer";

const rootReducer = combineReducers({
	userReducer,

	activeStoryReducer,

	changePasswordReducer,

	commentNotificationsReducer,

	editProfileReducer,

	exploreReducer,

	homeFeedPostsReducer,

	postImagesReducer,
	postTopicsReducer,
	postUsersReducer,
	postCaptionsReducer,
	postUploadReducer,

	mainPostReducer,
	mainPostCommentsReducer,
	mainPostCommentInputReducer,

	userLoginReducer,

	userRegisterFormReducer,
	userRegisterStepReducer,

	userFollowTopicsReducer,
	userFollowingTopicsReducer,

	userProfileOwnerReducer,
	userProfilePostsReducer,

	usersStoriesReducer,

	storyBackgroundReducer,
	storyTextReducer,
	storyImageReducer,
	storyUploadReducer,

	viewedStoriesReducer,
});

export default rootReducer;
