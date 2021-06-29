import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { User, PostLikes } from "../../shared";
import HomePostImages from "./HomePostImages";
import HomePostContent from "./HomePostContent";
import HomePostBookmark from "./HomePostBookmark";
import HomePostComment from "./HomePostComment";

import { HomePostStyle } from "../styles/HomePostStyle";
import { HomePostHeaderStyle } from "../styles/HomePostHeaderStyle";
import { HomePostFooterStyle } from "../styles/HomePostFooterStyle";

const HomePost = ({ post }) => {
	const { post_id, user, images, content, totalComments, totalLikes, isLiked } =
		post;

	const homePostLocation = useLocation();
	const history = useHistory();

	// REVIEW: the location of this component will be used by all Components within the Switch Component
	const handlePostOnClick = () => {
		history.push({
			pathname: `/post/${post_id}`,
			state: {
				overlaidComponentLocation: homePostLocation,
			},
		});
	};

	return (
		<HomePostStyle>
			<HomePostHeaderStyle>
				<User
					userID={user.user_id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="3.8rem"
					usernameFontSize="1.4rem"
					fullNameFontSize="1.3rem"
					onClick={() => {
						// FIX: move to story
					}}
					conditionalRenderingVariable={true}
				/>

				<HomePostBookmark />
			</HomePostHeaderStyle>

			<HomePostContent contentObject={content} />

			<HomePostImages postImagesArray={images} onClick={handlePostOnClick} />

			<HomePostFooterStyle>
				<PostLikes
					postID={post_id}
					totalLikesData={totalLikes}
					isLikedData={isLiked}
				/>

				<HomePostComment totalComments={totalComments} />
			</HomePostFooterStyle>
		</HomePostStyle>
	);
};

export default HomePost;
