import * as React from "react";

const usePostCommentsDisplay = () => {
	const [isPostCommentsOpen, setIsPostCommentsOpen] = React.useState(true);

	const handleOpenAndClosePostCommentsOnClick = () => {
		setIsPostCommentsOpen((prevState) => !prevState);
	};

	const handleClosePostCommentsOnClick = () => {
		setIsPostCommentsOpen(false);
	};

	return {
		isPostCommentsOpen,
		setIsPostCommentsOpen,
		handleOpenAndClosePostCommentsOnClick,
		handleClosePostCommentsOnClick,
	};
};

export default usePostCommentsDisplay;
