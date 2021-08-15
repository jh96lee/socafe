import * as React from "react";

import {
	MainPostViewOrHideRepliesStyle,
	MainPostViewOrHideActionStyle,
} from "../styles/MainPostViewOrHideRepliesStyle";

import { Up, Down } from "../../../assets";

const MainPostViewOrHideReplies = ({
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
		<MainPostViewOrHideRepliesStyle>
			{commentTotalReplies !== 0 && (
				<MainPostViewOrHideActionStyle
					onClick={handleViewMoreRepliesActionOnClick}
				>
					<span>
						View more replies
						{!isRepliesOpen ? `(${commentTotalReplies})` : null}
					</span>

					{!isRepliesOpen ? <Down /> : null}
				</MainPostViewOrHideActionStyle>
			)}

			{isRepliesOpen && (
				<MainPostViewOrHideActionStyle onClick={handleHideRepliesActionOnClick}>
					<span>Hide</span>

					<Up />
				</MainPostViewOrHideActionStyle>
			)}
		</MainPostViewOrHideRepliesStyle>
	);
};

export default MainPostViewOrHideReplies;
