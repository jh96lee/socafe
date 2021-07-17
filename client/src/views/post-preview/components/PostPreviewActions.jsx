import * as React from "react";
import styled from "styled-components";

import { Skeleton } from "../../shared";

import { Comment, HeartEmpty, BookmarkEmpty } from "../../../assets";

const PostActionsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;

	& svg {
		fill: var(--icon-default-color);
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}

	& #post-preview__heart-empty {
		fill: #ff0000;
	}

	& #post-preview__heart-empty:hover {
		fill: #d80000;
	}
`;

const PostActionAndDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
`;

const PostPreviewActions = () => {
	return (
		<PostActionsStyle>
			<PostActionAndDataStyle>
				<HeartEmpty id="post-preview__heart-empty" />

				<Skeleton skeletonWidth="4rem" skeletonHeight="2.5rem" />
			</PostActionAndDataStyle>

			<PostActionAndDataStyle>
				<Comment />

				<Skeleton skeletonWidth="4rem" skeletonHeight="2.5rem" />
			</PostActionAndDataStyle>

			<BookmarkEmpty />
		</PostActionsStyle>
	);
};

export default PostPreviewActions;
