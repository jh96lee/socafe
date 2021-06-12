import * as React from "react";

import { User } from "../../shared";
import { Post } from "../../post";
import HomePostImages from "./HomePostImages";
import HomePostContent from "./HomePostContent";
import HomePostBookmark from "./HomePostBookmark";
import HomePostLike from "./HomePostLike";
import HomePostComment from "./HomePostComment";

import { useLikeAndUnlikePostHook } from "../../../hooks/useLikeAndUnlikePostHook";

import { HomePostStyle } from "../styles/HomePostStyle";
import { HomePostHeaderStyle } from "../styles/HomePostHeaderStyle";
import { HomePostFooterStyle } from "../styles/HomePostFooterStyle";

const HomePost = ({ post }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const { post_id, user, isLiked, images, content, totalLikes, totalComments } =
		post;

	// REVIEW: lift the states
	const { isLikedState, totalLikesState, handleIsLikedOnClick } =
		useLikeAndUnlikePostHook(isLiked, totalLikes, post_id);

	const handlePostOnClick = () => {
		setIsOpen((prevState) => !prevState);
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
				{/* REVIEW: prop drill likes related data */}
				<HomePostLike
					isLiked={isLikedState}
					totalLikes={totalLikesState}
					onClick={handleIsLikedOnClick}
				/>

				<HomePostComment totalComments={totalComments} />
			</HomePostFooterStyle>

			{isOpen && (
				// REVIEW: prop drill likes related data
				<Post
					postID={post_id}
					handlePostOnClick={handlePostOnClick}
					isLiked={isLikedState}
					totalLikes={totalLikesState}
					onClick={handleIsLikedOnClick}
				/>
			)}
		</HomePostStyle>
	);
};

export default HomePost;
