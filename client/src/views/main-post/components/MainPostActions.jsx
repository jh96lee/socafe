import * as React from "react";
import { useSelector } from "react-redux";

import { PostLike, PostBookmark, PostTotalComments } from "../../shared";

import { MainPostActionsStyle } from "../styles/MainPostActionsStyle";

const MainPostActions = () => {
	const iconSize = "2.4rem";

	const {
		mainPostID,
		isMainPostLiked,
		mainPostTotalLikes,
		isMainPostBookmarked,
		mainPost,
	} = useSelector((state) => state.mainPostReducer);

	return (
		<MainPostActionsStyle>
			<PostLike
				likeIconSize={iconSize}
				postIDProp={mainPostID}
				isLikedProp={isMainPostLiked}
				totalLikesProp={mainPostTotalLikes}
				postLikeIconSize={iconSize}
			/>

			<PostTotalComments
				totalCommentsProp={mainPost.post_total_comments}
				postTotalCommentsIconSize={iconSize}
			/>

			<PostBookmark
				bookmarkIconSize={iconSize}
				postIDProp={mainPostID}
				isBookmarkedProp={isMainPostBookmarked}
			/>
		</MainPostActionsStyle>
	);
};

export default MainPostActions;
