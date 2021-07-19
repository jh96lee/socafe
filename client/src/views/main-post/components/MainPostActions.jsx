import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../../shared";

import {
	HeartFill,
	BookmarkEmpty,
	CommentOutline,
	CommentFilled,
} from "../../../assets";

const MainPostActionsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;
`;

const MainPostActions = ({
	isPostCommentsOpen,
	handleOpenAndClosePostCommentsOnClick,
}) => {
	return (
		<MainPostActionsStyle>
			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					elementBackgroundColor: "var(--likes-bg-color)",
					elementHoverBackgroundColor: "var(--likes-hover-bg-color)",
					iconColor: "var(--likes-icon-color)",
					iconSize: "2.3rem",
				}}
			>
				<HeartFill />
			</IconElement>

			<IconElement
				iconRole="button"
				iconElementStyleObject={{
					iconSize: "2.3rem",
				}}
			>
				<BookmarkEmpty />
			</IconElement>

			<IconElement
				onClick={handleOpenAndClosePostCommentsOnClick}
				iconRole="button"
				iconID="post-preview-actions__comment-outline"
				iconElementStyleObject={{
					iconSize: "2.3rem",
				}}
			>
				{isPostCommentsOpen ? <CommentFilled /> : <CommentOutline />}
			</IconElement>
		</MainPostActionsStyle>
	);
};

export default MainPostActions;
