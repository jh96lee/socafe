import * as React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { HeartEmpty, Comment } from "../../../assets";

const UserProfilePostStyle = styled.div`
	position: relative;
	border-radius: 1rem;
	overflow: hidden;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	& > #user-profile-post__metadata {
		display: none;
	}

	&:hover > #user-profile-post__metadata {
		display: flex;
		cursor: pointer;
	}
`;

const UserProfilePostMetadataStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: #000000b8;
	width: 103%;
	height: 103%;
`;

const UserProfilePostTotalStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: #fff;
	fill: #fff;

	& > svg {
		width: 2.8rem;
		height: 2.8rem;
	}

	& > #user-profile-post-total__heart {
		fill: red;
	}
`;

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
