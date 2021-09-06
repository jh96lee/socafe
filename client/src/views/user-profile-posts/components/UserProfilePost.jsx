import * as React from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

import { usePostLike } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import {
	UserProfilePostStyle,
	UserProfilePostMetadataOverlayStyle,
	UserProfilePostMetadataStyle,
} from "../styles/UserProfilePostStyle";

import { HeartFill, CommentFilled, More } from "../../../assets";
import { IconElement } from "../../shared";

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
		<UserProfilePostStyle>
			<img
				src={post_images[0].image_url}
				alt="post thumbnail"
				onClick={handlePostOnClick}
			/>

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

			<IconElement
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "1rem",
					elementRight: "1rem",
					elementZIndex: "100",
				}}
				onClick={async () => {
					const token = fetchToken();

					const { data } = await axios({
						method: "DELETE",
						url: `http://localhost:8080/post/delete/${post_id}`,
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});

					const { id, success, error } = data;
				}}
			>
				<More />
			</IconElement>
		</UserProfilePostStyle>
	);
};

export default UserProfilePost;
