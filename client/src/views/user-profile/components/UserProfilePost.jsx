import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";

import { HeartFill, CommentFilled } from "../../../assets";

const UserProfilePostStyle = styled.div`
	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
`;

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
			{/* <HeartFill />

			<CommentFilled /> */}
		</UserProfilePostStyle>
	);
};

export default UserProfilePost;
