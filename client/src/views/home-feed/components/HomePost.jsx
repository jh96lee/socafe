import * as React from "react";

import { User } from "../../shared";
import { Post } from "../../post";
import HomePostImages from "./HomePostImages";
import HomePostContent from "./HomePostContent";
import HomePostBookmark from "./HomePostBookmark";
import HomePostLike from "./HomePostLike";
import HomePostComment from "./HomePostComment";

import { HomePostStyle } from "../styles/HomePostStyle";
import { HomePostHeaderStyle } from "../styles/HomePostHeaderStyle";
import { HomePostFooterStyle } from "../styles/HomePostFooterStyle";

const HomePost = ({ post }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handlePostOnClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<HomePostStyle>
			<HomePostHeaderStyle>
				<User
					userID={post.user_id}
					avatarURL={post.avatar_url}
					username={post.username}
					fullName={post.full_name}
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
			<HomePostContent contentObject={post.content} />

			<HomePostImages
				postImagesArray={post.images}
				onClick={handlePostOnClick}
			/>

			<HomePostFooterStyle>
				<HomePostLike totalLikes={post.totalLikes} />

				<HomePostComment totalComments={post.totalComments} />
			</HomePostFooterStyle>

			{isOpen && (
				<Post postID={post.post_id} handlePostOnClick={handlePostOnClick} />
			)}
		</HomePostStyle>
	);
};

export default HomePost;
