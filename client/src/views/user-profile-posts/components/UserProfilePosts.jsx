import * as React from "react";
import { useSelector } from "react-redux";

import { Loader } from "../../shared";
import UserProfilePost from "./UserProfilePost";

import { UserProfilePostsStyle } from "../styles/UserProfilePostsStyle";

const UserProfilePosts = () => {
	const { userProfilePosts, isUserProfilePostsLoaded } = useSelector(
		(state) => state.userProfilePostsReducer
	);

	return (
		<UserProfilePostsStyle>
			{!isUserProfilePostsLoaded ? (
				<Loader />
			) : (
				userProfilePosts.map((post) => {
					return <UserProfilePost key={post.post_id} post={post} />;
				})
			)}
		</UserProfilePostsStyle>
	);
};

export default UserProfilePosts;
