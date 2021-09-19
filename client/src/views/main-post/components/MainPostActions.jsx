import * as React from "react";
import { useSelector } from "react-redux";

import { Icon, PostLike, PostBookmark } from "../../shared";

import { MainPostActionsStyle } from "../styles/MainPostActionsStyle";
import { PostActionStyle } from "../../../styles";

import { CommentOutline } from "../../../assets";

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

			<PostActionStyle>
				<Icon
					iconRole="button"
					iconType="presentation"
					iconStyleObject={{
						iconSize,
					}}
				>
					<CommentOutline />
				</Icon>

				<h5>{mainPost.post_total_comments}</h5>
			</PostActionStyle>

			<PostBookmark
				bookmarkIconSize={iconSize}
				postIDProp={mainPostID}
				isBookmarkedProp={isMainPostBookmarked}
			/>
		</MainPostActionsStyle>
	);
};

export default MainPostActions;
