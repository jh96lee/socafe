import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
	UserMetadata,
	TextArea,
	PostLike,
	PostBookmark,
	PostTotalComments,
} from "../../shared";
import HomePostImages from "./HomePostImages";

import { HomeFeedPostStyle } from "../styles/HomeFeedPostStyle";
import { HomeFeedPostHeaderStyle } from "../styles/HomeFeedPostHeaderStyle";
import { HomeFeedPostFooterStyle } from "../styles/HomeFeedPostFooterStyle";

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
					userID={post_owner.id}
					avatarURL={post_owner.avatar_url}
					username={post_owner.username}
					text={post_owner.username}
					subText={post_owner.full_name}
					avatarSize="4.5rem"
				/>

				<PostBookmark
					isBookmarkIconBackgroundTransparent={true}
					postIDProp={post_id}
					isBookmarkedProp={post_is_bookmarked}
				/>
			</HomeFeedPostHeaderStyle>

			<TextArea textAreaNodesArray={post_captions} charactersLimit={100} />

			<HomePostImages
				postImagesArray={post_images}
				onClick={handleHomePostOnClick}
			/>

			<HomeFeedPostFooterStyle>
				<PostLike
					isLikeIconBackgroundTransparent={true}
					postIDProp={post_id}
					isLikedProp={post_is_liked}
					totalLikesProp={post_total_likes}
				/>

				<PostTotalComments totalCommentsProp={post_total_comments} />
			</HomeFeedPostFooterStyle>
		</HomeFeedPostStyle>
	);
};

export default HomePost;
