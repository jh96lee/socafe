import * as React from "react";

import { IconElement } from "../../shared";

import MainPostLike from "./MainPostLike";
import MainPostBookmark from "./MainPostBookmark";

import { MainPostActionsStyle } from "../styles/MainPostActionsStyle";
import { PostActionStyle } from "../../../styles";

import { CommentOutline } from "../../../assets";

const MainPostActions = ({
	isLikedProp,
	totalLikesProp,
	totalPostCommentsProp,
	isBookmarkedProp,
}) => {
	const iconSize = "2.2rem";

	return (
		<MainPostActionsStyle>
			<MainPostLike
				likeIconSize={iconSize}
				isLikedProp={isLikedProp}
				totalLikesProp={totalLikesProp}
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

				<h5>{totalPostCommentsProp}</h5>
			</PostActionStyle>

			<MainPostBookmark
				bookmarkIconSize={iconSize}
				isBookmarkedProp={isBookmarkedProp}
			/>
		</MainPostActionsStyle>
	);
};

export default MainPostActions;
