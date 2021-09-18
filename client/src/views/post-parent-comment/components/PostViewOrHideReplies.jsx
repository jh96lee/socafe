import * as React from "react";

import {
	PostViewOrHideRepliesStyle,
	PostViewOrHideActionStyle,
} from "../styles/PostViewOrHideRepliesStyle";

import { Up, Down } from "../../../assets";

const PostViewOrHideReplies = ({
	isRepliesOpen,
	setIsRepliesOpen,
	setCurrentPage,
	commentTotalReplies,
	nextAPIEndpoint,
}) => {
	const handleViewMoreRepliesActionOnClick = () => {
		if (!isRepliesOpen) {
			setIsRepliesOpen((prevState) => !prevState);
		} else if (nextAPIEndpoint === null) {
			return;
		} else {
			setCurrentPage((prevState) => prevState + 1);
		}
	};

	const handleHideRepliesActionOnClick = () => {
		setIsRepliesOpen(false);
	};

	return (
		<PostViewOrHideRepliesStyle>
			{commentTotalReplies !== 0 && (
				<PostViewOrHideActionStyle onClick={handleViewMoreRepliesActionOnClick}>
					<span>
						View more replies
						{!isRepliesOpen ? `(${commentTotalReplies})` : null}
					</span>

					{!isRepliesOpen ? <Down /> : null}
				</PostViewOrHideActionStyle>
			)}

			{isRepliesOpen && (
				<PostViewOrHideActionStyle onClick={handleHideRepliesActionOnClick}>
					<span>Hide</span>

					<Up />
				</PostViewOrHideActionStyle>
			)}
		</PostViewOrHideRepliesStyle>
	);
};

export default PostViewOrHideReplies;
