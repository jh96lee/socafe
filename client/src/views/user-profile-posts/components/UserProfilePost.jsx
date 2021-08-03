import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { usePostLike } from "../../../hooks";

import {
	UserProfilePostStyle,
	UserProfilePostMetadataOverlayStyle,
	UserProfilePostMetadataStyle,
} from "../styles/UserProfilePostStyle";

import { HeartFill, CommentFilled } from "../../../assets";

const UserProfilePost = ({ post }) => {
	const {
		post_id,
		post_images,
		post_total_likes,
		post_total_comments,
		post_is_liked,
	} = post;

	const { postTotalLikes } = usePostLike(
		post_is_liked,
		post_total_likes,
		post_id
	);

	const location = useLocation();
	const history = useHistory();

	const handlePostOnClick = () => {
		history.push({
			pathname: `/post/${post_id}`,
			state: { overlaidComponentLocation: location },
		});
	};

	return (
		<UserProfilePostStyle onClick={handlePostOnClick}>
			<img src={post_images[0].url} alt="post thumbnail" />

			<UserProfilePostMetadataOverlayStyle id="user-profile-post__post-metadata-overlay">
				<UserProfilePostMetadataStyle>
					<HeartFill id="user-profile-post__heart" />

					<h4>{postTotalLikes}</h4>
				</UserProfilePostMetadataStyle>

				<UserProfilePostMetadataStyle>
					<CommentFilled />

					<h4>{post_total_comments}</h4>
				</UserProfilePostMetadataStyle>
			</UserProfilePostMetadataOverlayStyle>
		</UserProfilePostStyle>
	);
};

export default UserProfilePost;
