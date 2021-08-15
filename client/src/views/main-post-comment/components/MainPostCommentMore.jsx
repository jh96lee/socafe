import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu } from "../../shared";

import { removePostComment } from "../../../redux/main-post-comments/mainPostCommentsAction";

import { useDropdown } from "../../../hooks";

import { deleteComment } from "../../../utils/comment/deleteComment";

import { MainPostCommentMoreStyle } from "../styles/MainPostCommentMoreStyle";

import { MoreHorizontal, TrashOutline } from "../../../assets";

const MainPostCommentMore = ({
	// REVIEW: id of this comment
	commentID,
	// REVIEW: parent comment id of this comment
	parentCommentID,
	setDeletedCommentID,
}) => {
	const dispatch = useDispatch();

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"main-post-comment-more-dropdown-trigger",
		"main-post-comment-more-dropdown-menu",
		true
	);

	const dropdownElementsArray = [
		{
			content: {
				icon: <TrashOutline />,
				label: "Delete",
			},
			onClickEventHandler: async () => {
				const data = await deleteComment(commentID);

				const { success } = data;

				if (success) {
					if (!parentCommentID) {
						dispatch(removePostComment(commentID));
					} else {
						setDeletedCommentID(commentID);
					}
				}
			},
		},
	];

	const handleCommentMoreOnMouseLeave = () => {
		setIsDropdownMenuOpen(false);
	};

	return (
		<MainPostCommentMoreStyle
			id="main-post-comment-more-dropdown-trigger"
			onMouseLeave={handleCommentMoreOnMouseLeave}
		>
			<MoreHorizontal />

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="main-post-comment-more-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "100%",
						menuRight: "0",
					}}
				/>
			)}
		</MainPostCommentMoreStyle>
	);
};

export default MainPostCommentMore;
