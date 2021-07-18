import * as React from "react";

import { useDropdown } from "..";

const usePostCommentsDisplay = (
	triggerID,
	dropdownMenuID,
	widthPostCommentIsAbsolute
) => {
	const [isStickyPostCommentsOpen, setIsStickyPostsCommentOpen] =
		React.useState(true);

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		triggerID,
		dropdownMenuID,
		false,
		true
	);

	const handleOpenAndClosePostCommentsOnClick = () => {
		if (window.innerWidth <= widthPostCommentIsAbsolute) {
			setIsDropdownMenuOpen((prevState) => !prevState);
		} else {
			setIsStickyPostsCommentOpen((prevState) => !prevState);
		}
	};

	const handleClosePostCommentsOnClick = () => {
		if (window.innerWidth <= widthPostCommentIsAbsolute) {
			setIsDropdownMenuOpen(false);
		} else {
			setIsStickyPostsCommentOpen(false);
		}
	};

	return {
		isStickyPostCommentsOpen,
		isAbsolutePostCommentsOpen: isDropdownMenuOpen,
		handleOpenAndClosePostCommentsOnClick,
		handleClosePostCommentsOnClick,
	};
};

export default usePostCommentsDisplay;
