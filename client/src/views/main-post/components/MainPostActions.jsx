import * as React from "react";

import { IconElement } from "../../shared";

import {
	MainPostActionsStyle,
	MainPostActionStyle,
} from "../styles/MainPostActionsStyle";

import { HeartFill, BookmarkEmpty, CommentOutline } from "../../../assets";

const MainPostActions = ({
	postTotalLikes,
	postTotalComments,
	postIsLiked,
}) => {
	const iconSize = "2.2rem";

	return (
		<MainPostActionsStyle>
			<MainPostActionStyle>
				<IconElement
					iconRole="button"
					iconElementStyleObject={{
						elementBackgroundColor: "var(--likes-bg-color)",
						elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
						iconColor: "var(--likes-icon-color)",
						iconSize,
					}}
				>
					<HeartFill />
				</IconElement>

				<h5>{postTotalLikes}</h5>
			</MainPostActionStyle>

			<MainPostActionStyle>
				<IconElement
					iconRole="button"
					iconID="post-preview-actions__comment-outline"
					iconElementStyleObject={{
						iconSize,
					}}
				>
					<CommentOutline />
				</IconElement>

				<h5>{postTotalComments}</h5>
			</MainPostActionStyle>

			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					iconSize,
				}}
			>
				<BookmarkEmpty />
			</IconElement>
		</MainPostActionsStyle>
	);
};

export default MainPostActions;
