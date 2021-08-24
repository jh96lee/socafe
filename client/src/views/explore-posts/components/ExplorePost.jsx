import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PostLike, UserMetadata } from "../../shared";

import styled from "styled-components";

const ExplorePostStyle = styled.div`
	position: relative;
	display: grid;
	grid-auto-rows: min-content 1fr min-content;

	gap: 1.2rem;
	width: 100%;
	border-radius: 1rem;
	overflow: hidden;

	& > img {
		display: block;
		width: 100%;
		height: 15vw;
		object-fit: cover;
		border-radius: 1rem;
	}
`;

const ExplorePostFooterStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr min-content min-content;
	gap: 1.2rem;
	padding: 0 0.5rem;

	& > *:first-child {
		justify-self: start;
	}
`;

const ExplorePost = ({ post }) => {
	const { post_id, post_owner, post_images, post_is_liked, post_total_likes } =
		post;

	const location = useLocation();
	const history = useHistory();

	const handlePostOnClick = () => {
		history.push({
			pathname: `/post/${post_id}`,
			state: { overlaidComponentLocation: location },
		});
	};

	return (
		<ExplorePostStyle
			isImageTall={post_images[0].image_height > post_images[0].image_width}
			onClick={handlePostOnClick}
		>
			<img src={post_images[0].image_url} alt="explore post" />

			<ExplorePostFooterStyle>
				<UserMetadata
					userID={post_owner.id}
					avatarURL={post_owner.avatar_url}
					username={post_owner.username}
					fullName={post_owner.full_name}
					avatarSize="4rem"
					usernameFontSize="1.35rem"
					fullNameFontSize="1.2rem"
				/>
				<PostLike
					postIDProp={post_id}
					isLikedProp={post_is_liked}
					totalLikesProp={post_total_likes}
					postLikeStyleObject={{
						postLikeGap: "0.9rem",
						postLikeBackgroundColor: "none",
						postLikePadding: "0",
						postLikeHoverBackgroundColor: "none",
						postLikeIconSize: "2.2rem",
					}}
				/>
			</ExplorePostFooterStyle>
		</ExplorePostStyle>
	);
};

export default ExplorePost;
