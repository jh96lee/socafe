import * as React from "react";

import { IconElement } from "../../index";

import { BookmarkEmpty, BookmarkFill } from "../../../../assets";

const PostBookmark = () => {
	// TODO: fetch data if a post is bookmarked and set that as the initial state
	const [isPostBookmarked, setIsPostBookmarked] = React.useState(false);

	const handleOnClick = () => {
		setIsPostBookmarked((prevState) => !prevState);
	};

	return (
		<IconElement
			iconRole="button"
			onClick={handleOnClick}
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
