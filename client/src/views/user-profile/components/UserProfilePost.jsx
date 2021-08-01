import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

import {
	UserProfilePostStyle,
	UserProfilePostMetadataOverlayStyle,
	UserProfilePostMetadataStyle,
} from "../styles/UserProfilePostStyle";

import { HeartFill, CommentFilled } from "../../../assets";

const UserProfilePost = ({ post }) => {
	const {
		post_id,
		user_profile_post_images,
		user_profile_post_total_likes,
		user_profile_post_total_comments,
	} = post;

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
			<img src={user_profile_post_images[0].image_url} alt="post thumbnail" />

			<UserProfilePostMetadataOverlayStyle id="user-profile-post__post-metadata-overlay">
				<UserProfilePostMetadataStyle>
					<HeartFill id="user-profile-post__heart" />

					<h4>{user_profile_post_total_likes}</h4>
				</UserProfilePostMetadataStyle>

				<UserProfilePostMetadataStyle>
					<CommentFilled />

					<h4>{user_profile_post_total_comments}</h4>
				</UserProfilePostMetadataStyle>
			</UserProfilePostMetadataOverlayStyle>
		</UserProfilePostStyle>
	);
};

export default UserProfilePost;
