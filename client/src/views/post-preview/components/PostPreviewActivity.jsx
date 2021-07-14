import * as React from "react";
import styled from "styled-components";

import { Skeleton } from "../../shared";

import {
	Comment,
	HeartEmpty,
	BookmarkEmpty,
	UserFilled,
} from "../../../assets";

// REVIEW: likes, comments, and bookmark
const PostModalActivityStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;

	& svg {
		fill: var(--icon-default-color);
		width: 2.5rem;
		height: 2.5rem;
	}

	& #post-preview__heart-empty {
		fill: #ff0000;
	}

	& #post-preview__heart-empty {
		cursor: pointer;
		fill: #d80000;
	}
`;

const PostModalActivityAndDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
`;

const PostPreviewActivity = () => {
	return (
		<PostModalActivityStyle>
			<PostModalActivityAndDataStyle>
				<HeartEmpty id="post-preview__heart-empty" />

				<Skeleton skeletonWidth="4rem" skeletonHeight="2.5rem" />
			</PostModalActivityAndDataStyle>

			<PostModalActivityAndDataStyle>
				<Comment />

				<Skeleton skeletonWidth="4rem" skeletonHeight="2.5rem" />
			</PostModalActivityAndDataStyle>

			<BookmarkEmpty />

			<UserFilled id="test-trigger" />
		</PostModalActivityStyle>
	);
};

export default PostPreviewActivity;
