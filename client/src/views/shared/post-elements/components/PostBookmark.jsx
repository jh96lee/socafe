import * as React from "react";

import { Icon } from "../../../shared";

import { BookmarkEmpty, BookmarkFill } from "../../../../assets";

import { usePostBookmark } from "../../../../hooks";

const PostBookmark = ({
	bookmarkIconSize = "2.2rem",
	postIDProp,
	isBookmarkedProp,
}) => {
	const { isBookmarkedState, handlePostBookmarkOnClick } = usePostBookmark(
		isBookmarkedProp,
		postIDProp
	);

	return (
		<Icon
			iconRole="button"
			iconType="presentation"
			iconOnClick={handlePostBookmarkOnClick}
			iconStyleObject={{
				iconSize: bookmarkIconSize,
			}}
		>
			{isBookmarkedState ? <BookmarkFill /> : <BookmarkEmpty />}
		</Icon>
	);
};

export default PostBookmark;
