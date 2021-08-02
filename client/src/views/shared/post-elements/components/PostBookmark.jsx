import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../../../shared";

import { PostLikeStyle } from "../styles/PostLikeStyle";

import { BookmarkEmpty, BookmarkFill } from "../../../../assets";

import { usePostBookmark } from "../../../../hooks";

const PostBookmark = ({
	bookmarkIconSize = "2.2rem",
	isBookmarkIconBackgroundTransparent = false,
	postIDProp,
	isBookmarkedProp,
}) => {
	const { isBookmarkedState, handlePostBookmarkOnClick } = usePostBookmark(
		isBookmarkedProp,
		postIDProp
	);

	return (
		<PostLikeStyle>
			<IconElement
				iconRole="button"
				onClick={handlePostBookmarkOnClick}
				iconElementStyleObject={{
					elementBackgroundColor:
						isBookmarkIconBackgroundTransparent && "transparent",
					iconSize: bookmarkIconSize,
				}}
			>
				{isBookmarkedState ? <BookmarkFill /> : <BookmarkEmpty />}
			</IconElement>
		</PostLikeStyle>
	);
};

export default PostBookmark;
