import * as React from "react";

import { IconElement } from "../../index";

import { BookmarkEmpty, BookmarkFill } from "../../../../assets";

// TODO: functionality needs to be added
const PostBookmark = () => {
	const [isPostBookmarked, setIsPostBookmarked] = React.useState(false);

	const handlePostBookmarkOnClick = () => {
		setIsPostBookmarked((prevState) => !prevState);
	};

	return (
		<IconElement
			iconRole="button"
			onClick={handlePostBookmarkOnClick}
			iconElementStyleObject={{
				elementPadding: "0rem",
				elementBackgroundColor: "none",
				elementHoverBackgroundColor: "none",
				iconColor: "var(--icon-default-color)",
				iconHoverColor: "var(--icon-default-color)",
				iconSize: "2.5rem",
			}}
		>
			{isPostBookmarked ? <BookmarkFill /> : <BookmarkEmpty />}
		</IconElement>
	);
};

export default PostBookmark;
