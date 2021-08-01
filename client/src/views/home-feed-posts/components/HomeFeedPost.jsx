import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { UserMetadata, IconElement, TextArea } from "../../shared";
import HomePostImages from "./HomePostImages";

import { HomeFeedPostStyle } from "../styles/HomeFeedPostStyle";
import { HomeFeedPostHeaderStyle } from "../styles/HomeFeedPostHeaderStyle";
import { HomeFeedPostFooterStyle } from "../styles/HomeFeedPostFooterStyle";
import { PostActionStyle } from "../../../styles";

import { BookmarkEmpty, HeartEmpty, CommentOutline } from "../../../assets";

const HomePost = ({ post }) => {
	const {
		post_id,
		post_images,
		post_owner,
		post_captions,
		post_total_likes,
		post_total_comments,
		post_is_liked,
		post_is_bookmarked,
	} = post;

	const location = useLocation();
	const history = useHistory();

	const handleHomePostOnClick = () => {
		history.push({
			pathname: `/post/${post_id}`,
			state: { overlaidComponentLocation: location },
		});
	};

	return (
		<HomeFeedPostStyle>
			<HomeFeedPostHeaderStyle>
				<UserMetadata
					userID={post_owner.user_id}
					avatarURL={post_owner.avatar_url}
					username={post_owner.username}
					fullName={post_owner.full_name}
					avatarSize="4.5rem"
					usernameFontSize="1.4rem"
					fullNameFontSize="1.3rem"
					avatarOnClick={() => {}}
				/>

				<IconElement
					iconRole="button"
					iconElementStyleObject={{
						elementBackgroundColor: "transparent",
						iconSize: "2.2rem",
					}}
				>
					<BookmarkEmpty />
				</IconElement>
			</HomeFeedPostHeaderStyle>

			<TextArea textAreaNodesArray={post_captions} charactersLimit={100} />

			<HomePostImages
				postImagesArray={post_images}
				onClick={handleHomePostOnClick}
			/>

			<HomeFeedPostFooterStyle>
				<PostActionStyle>
					<IconElement
						iconRole="button"
						iconElementStyleObject={{
							// elementBackgroundColor: "var(--likes-bg-color)",
							elementBackgroundColor: "transparent",
							elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
							elementPadding: "0.7rem",
							iconColor: "var(--likes-icon-color)",
							iconSize: "2.2rem",
						}}
					>
						<HeartEmpty />
					</IconElement>

					<h5>{post_total_likes}</h5>
				</PostActionStyle>

				<PostActionStyle>
					<IconElement
						iconRole="button"
						iconElementStyleObject={{
							elementBackgroundColor: "transparent",
							elementPadding: "0.7rem",
							iconSize: "2.2rem",
						}}
					>
						<CommentOutline />
					</IconElement>

					<h5>{post_total_comments}</h5>
				</PostActionStyle>
			</HomeFeedPostFooterStyle>
		</HomeFeedPostStyle>
	);
};

export default HomePost;
