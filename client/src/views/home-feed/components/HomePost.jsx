import * as React from "react";
import { useHistory } from "react-router";

import { User, Likes } from "../../shared";
import HomePostImages from "./HomePostImages";
import HomePostContent from "./HomePostContent";
import HomePostBookmark from "./HomePostBookmark";
import HomePostComment from "./HomePostComment";

import { HomePostStyle } from "../styles/HomePostStyle";
import { HomePostHeaderStyle } from "../styles/HomePostHeaderStyle";
import { HomePostFooterStyle } from "../styles/HomePostFooterStyle";

const HomePost = ({ post }) => {
	const { post_id, user, images, content, totalComments } = post;

	const history = useHistory();

	const handlePostOnClick = () => {
		history.push(`/post/${post_id}`);
	};

	return (
		<HomePostStyle>
			<HomePostHeaderStyle>
				<User
					userID={user.user_id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="3.5rem"
					usernameFontSize="1.3rem"
					fullNameFontSize="1.2rem"
					onClick={() => {
						// REVIEW: move to story
					}}
					conditionalRenderingVariable={true}
				/>

				<HomePostBookmark />
			</HomePostHeaderStyle>

			{/* REVIEW: Post Content */}
			<HomePostContent contentObject={content} />

			<HomePostImages postImagesArray={images} onClick={handlePostOnClick} />

			<HomePostFooterStyle>
				<Likes postID={post_id} />

				<HomePostComment totalComments={totalComments} />
			</HomePostFooterStyle>
		</HomePostStyle>
	);
};

export default HomePost;
