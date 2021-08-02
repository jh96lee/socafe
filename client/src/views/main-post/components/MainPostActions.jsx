import * as React from "react";
import { useSelector } from "react-redux";

import { IconElement, PostLike, PostBookmark } from "../../shared";

import { MainPostActionsStyle } from "../styles/MainPostActionsStyle";
import { PostActionStyle } from "../../../styles";

import { CommentOutline } from "../../../assets";

const MainPostActions = () => {
	const iconSize = "2.2rem";

	const {
		mainPostID,
		isMainPostLiked,
		mainPostTotalLikes,
		mainPostTotalComments,
		isMainPostBookmarked,
	} = useSelector((state) => state.mainPostReducer);

	return (
		<MainPostActionsStyle>
			<PostLike
				likeIconSize={iconSize}
				postIDProp={mainPostID}
				isLikedProp={isMainPostLiked}
				totalLikesProp={mainPostTotalLikes}
			/>

			<PostActionStyle>
				<IconElement
					iconRole="button"
					iconElementStyleObject={{
						iconSize,
					}}
				>
					<CommentOutline />
				</IconElement>

				<h5>{mainPostTotalComments}</h5>
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
