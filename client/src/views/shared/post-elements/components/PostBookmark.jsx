import * as React from "react";

import { IconElement } from "../../index";

import { BookmarkEmpty, BookmarkFill } from "../../../../assets";

// TODO: functionality needs to be added
const PostBookmark = ({ disablePostBookmark }) => {
	const [isPostBookmarked, setIsPostBookmarked] = React.useState(false);

	const handlePostBookmarkOnClick = () => {
		setIsPostBookmarked((prevState) => !prevState);
	};

	return (
		<IconElement
			iconRole="button"
			onClick={disablePostBookmark ? null : handlePostBookmarkOnClick}
			iconElementStyleObject={{
				elementPadding: "0rem",
				elementHoverBackgroundColor: "none",
				iconColor: "var(--icon-2)",
				iconHoverColor: "#var(--icon-2)",
				iconSize: "2.1rem",
			}}
		>
			{isPostBookmarked ? <BookmarkFill /> : <BookmarkEmpty />}
		</IconElement>
	);
};

export default PostBookmark;
