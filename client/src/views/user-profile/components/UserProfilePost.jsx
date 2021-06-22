import * as React from "react";
import { useHistory } from "react-router";

import {
	UserProfilePostStyle,
	UserProfilePostMetadataStyle,
	UserProfilePostTotalStyle,
} from "../styles/UserProfilePostStyle";

import { HeartEmpty, Comment } from "../../../assets";

const UserProfilePost = ({ post }) => {
	const history = useHistory();

	const handleOnClick = () => {
		history.push(`/post/${post.post_id}`);
	};

	return (
		<UserProfilePostStyle onClick={handleOnClick}>
			<img src={post.image_url} alt="User profile post thumbnail" />

			<UserProfilePostMetadataStyle id="user-profile-post__metadata">
				<UserProfilePostTotalStyle>
					<HeartEmpty id="user-profile-post-total__heart" />

					<h4>{post.totalLikes}</h4>
				</UserProfilePostTotalStyle>

				<UserProfilePostTotalStyle>
					<Comment />

					<h4>{post.totalComments}</h4>
				</UserProfilePostTotalStyle>
			</UserProfilePostMetadataStyle>
		</UserProfilePostStyle>
	);
};

export default UserProfilePost;
