import * as React from "react";
import { useHistory } from "react-router";

import { User, Likes } from "../../shared";
import HomePostImages from "./HomePostImages";
import HomePostContent from "./HomePostContent";
import HomePostBookmark from "./HomePostBookmark";
import HomePostComment from "./HomePostComment";
import { Post } from "../../post";

import { HomePostStyle } from "../styles/HomePostStyle";
import { HomePostHeaderStyle } from "../styles/HomePostHeaderStyle";
import { HomePostFooterStyle } from "../styles/HomePostFooterStyle";

const HomePost = ({ post }) => {
	// const [isPostOpen, setIsPostOpen] = React.useState(false);

	const { post_id, user, images, content, totalComments } = post;

	const history = useHistory();

	const handlePostOnClick = () => {
		history.push(`/post/${post_id}`);
		// setIsPostOpen((prevState) => !prevState);
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
				<Likes postID={post_id} iconSize="2.4rem" numberFontSize="1.4rem" />

				<HomePostComment totalComments={totalComments} />
			</HomePostFooterStyle>

			{/* {isPostOpen && (
				<Post postID={post_id} handlePostOnClick={handlePostOnClick} />
			)} */}
		</HomePostStyle>
	);
};

export default HomePost;
