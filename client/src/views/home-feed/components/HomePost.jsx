import * as React from "react";
import styled from "styled-components";

import { IconElement, User } from "../../shared";
import { Post } from "../../post";

import {
	HeartFill,
	HeartEmpty,
	BookmarkFill,
	BookmarkEmpty,
	Comment,
	Settings,
} from "../../../assets";

const HomePostStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const HomePostHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.4rem;
`;

const HomePostImageStyle = styled.img`
	width: 100%;
	height: 16rem;
	object-fit: cover;
	border-radius: 2rem;

	&:hover {
		cursor: pointer;
	}
`;

const HomePostFooterStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0.4rem;
`;

const HomePostMetadataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	& p {
		font-size: 1.3rem;
		color: var(--txt-1);
	}
`;

const HomePostIndividualDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
`;

const HomePost = ({ post }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isLiked, setIsLiked] = React.useState(false);
	const [isBookmarked, setIsBookmarked] = React.useState(false);

	const handlePostOnClick = () => {
		setIsOpen((prevState) => !prevState);
	};

	const handleLikeOnClick = () => {
		setIsLiked((prevState) => !prevState);
	};

	const handleBookmarkOnClick = () => {
		setIsBookmarked((prevState) => !prevState);
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

				<IconElement
					iconRole="button"
					iconElementStyleObject={{
						elementPadding: "0rem",
						elementHoverBackgroundColor: "none",
						iconColor: "var(--icon-2)",
						iconHoverColor: "#var(--icon-2)",
						iconSize: "2rem",
					}}
				>
					<Settings />
				</IconElement>
			</HomePostHeaderStyle>

			<HomePostImageStyle src={post.image_url} onClick={handlePostOnClick} />

			<HomePostFooterStyle>
				<HomePostMetadataStyle>
					<HomePostIndividualDataStyle>
						<IconElement
							iconRole="button"
							onClick={handleLikeOnClick}
							iconElementStyleObject={{
								elementPadding: "0rem",
								elementHoverBackgroundColor: "none",
								iconColor: "#ff0000",
								iconHoverColor: "#d80000",
								iconSize: "2rem",
							}}
						>
							{isLiked ? <HeartFill /> : <HeartEmpty />}
						</IconElement>

						<p>{post.totalLikes} </p>
					</HomePostIndividualDataStyle>

					<HomePostIndividualDataStyle>
						<IconElement
							iconRole="button"
							iconElementStyleObject={{
								elementPadding: "0rem",
								elementHoverBackgroundColor: "none",
								iconColor: "var(--icon-2)",
								iconHoverColor: "#var(--icon-2)",
								iconSize: "2rem",
							}}
						>
							<Comment />
						</IconElement>

						<p>{post.totalComments} </p>
					</HomePostIndividualDataStyle>
				</HomePostMetadataStyle>

				<IconElement
					iconRole="button"
					onClick={handleBookmarkOnClick}
					iconElementStyleObject={{
						elementPadding: "0rem",
						elementHoverBackgroundColor: "none",
						iconColor: "var(--icon-2)",
						iconHoverColor: "#var(--icon-2)",
						iconSize: "2rem",
					}}
				>
					{isBookmarked ? <BookmarkFill /> : <BookmarkEmpty />}
				</IconElement>
			</HomePostFooterStyle>

			{isOpen && (
				<Post postID={post.post_id} handlePostOnClick={handlePostOnClick} />
			)}
		</HomePostStyle>
	);
};

export default HomePost;
