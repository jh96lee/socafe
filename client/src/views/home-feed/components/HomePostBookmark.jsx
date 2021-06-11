import * as React from "react";

import { IconElement } from "../../shared";

import { BookmarkFill, BookmarkEmpty } from "../../../assets";

const HomePostBookmark = () => {
	const [isBookmarked, setIsBookmarked] = React.useState(false);

	const handleOnClick = () => {
		setIsBookmarked((prevState) => !prevState);
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
				iconSize: "2.2rem",
			}}
		>
			{isBookmarked ? <BookmarkFill /> : <BookmarkEmpty />}
		</IconElement>
	);
};

export default HomePostBookmark;
