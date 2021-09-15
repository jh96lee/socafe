import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

import homeFeedPostsReducer from "./home-feed/home-feed-posts/homeFeedPostsReducer";
import homeFeedStoriesReducer from "./home-feed/home-feed-stories/homeFeedStoriesReducer";

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

import storyBackgroundReducer from "./add-story/story-background/storyBackgroundReducer";
import storyTextReducer from "./add-story/story-text/storyTextReducer";
import storyImageReducer from "./add-story/story-image/storyImageReducer";
import storyUploadReducer from "./add-story/story-upload/storyUploadReducer";

import activeStoryReducer from "./story/active-story/activeStoryReducer";
import storyViewershipReducer from "./story/story-viewership/storyViewershipReducer";
import viewedStoriesReducer from "./story/viewed-stories/viewedStoriesReducer";

import exploreReducer from "./explore/exploreReducer";

import notificationsReducer from "./notifications/notificationsReducer";
import allNotificationsReducer from "./notifications/all-notifications/allNotificationsReducer";
import homeFeedNotificationsReducer from "./notifications/home-feed-notifications/homeFeedNotificationsReducer";
import commentNotificationsReducer from "./notifications/comment-notifications/commentNotificationsReducer";

import userStoriesReducer from "./user-stories/userStoriesReducer";

import statsGraphReducer from "./stats/stats-graph/statsGraphReducer";

import userInterfaceReducer from "./user-interface/userInterfaceReducer";

const rootReducer = combineReducers({
	userReducer,

	activeStoryReducer,

	allNotificationsReducer,

	changePasswordReducer,

	commentNotificationsReducer,

	editProfileReducer,

	exploreReducer,

	homeFeedPostsReducer,
	homeFeedNotificationsReducer,
	homeFeedStoriesReducer,

	postImagesReducer,
	postTopicsReducer,
	postUsersReducer,
	postCaptionsReducer,
	postUploadReducer,

	mainPostReducer,
	mainPostCommentsReducer,
	mainPostCommentInputReducer,

	notificationsReducer,

	userLoginReducer,

	userInterfaceReducer,

	userRegisterFormReducer,
	userRegisterStepReducer,

	userFollowTopicsReducer,
	userFollowingTopicsReducer,

	userProfileOwnerReducer,
	userProfilePostsReducer,

	userStoriesReducer,

	statsGraphReducer,

	storyBackgroundReducer,
	storyTextReducer,
	storyImageReducer,
	storyUploadReducer,

	storyViewershipReducer,

	viewedStoriesReducer,
});

export default rootReducer;
