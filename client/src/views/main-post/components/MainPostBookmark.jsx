import * as React from "react";

import { IconElement } from "../../shared";

import { BookmarkEmpty, BookmarkFill } from "../../../assets";

const PostBookmark = ({ bookmarkIconSize, isBookmarkedProp }) => {
	const [isPostBookmarked, setIsPostBookmarked] =
		React.useState(isBookmarkedProp);

	const handlePostBookmarkOnClick = () => {
		setIsPostBookmarked((prevState) => !prevState);
	};

	return (
		<IconElement
			iconRole="button"
			onClick={handlePostBookmarkOnClick}
			iconElementStyleObject={{
				iconSize: bookmarkIconSize,
			}}
		>
			{isPostBookmarked ? <BookmarkFill /> : <BookmarkEmpty />}
		</IconElement>
	);
};

export default PostBookmark;
