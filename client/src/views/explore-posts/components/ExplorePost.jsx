import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PostLike, UserMetadata } from "../../shared";

import styled from "styled-components";

const ExplorePostStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-height: 100%;
	border-radius: 1rem;
	overflow: hidden;

	/* box-shadow: 0 0 0 1.3px var(--separator-1); */

	& > * {
		width: 100%;
	}

	& > *:first-child {
		height: calc(100% - 6.5rem);
	}

	& > *:last-child {
		min-height: 6.5rem;
	}

	&:hover {
		cursor: pointer;
	}
`;

const ExplorePostImageContainerStyle = styled.div`
	display: flex;
	background-color: antiquewhite;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
`;

const ExplorePostFooterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: var(--bg-post);
	padding: 0 1rem;
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
		>
			<ExplorePostImageContainerStyle>
				<img
					src={post_images[0].image_url}
					alt="explore post"
					onClick={handlePostOnClick}
				/>
			</ExplorePostImageContainerStyle>

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
