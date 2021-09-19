import * as React from "react";
import { useDispatch } from "react-redux";

import { DropdownMenu } from "../../shared";

import { removePostComment } from "../../../redux/post-comment/post-comments/postCommentsAction";

import { useDropdown } from "../../../hooks";

import { deleteCommentRequest } from "../../../utils";

import { PostCommentMoreStyle } from "../styles/PostCommentMoreStyle";

import { MoreHorizontal, TrashOutline } from "../../../assets";

const PostCommentMore = ({
	// REVIEW: id of this comment
	commentID,
	// REVIEW: parent comment id of this comment
	parentCommentID,
	setDeletedCommentID,
}) => {
	const dispatch = useDispatch();

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"post-comment-more-dropdown-trigger",
		"post-comment-more-dropdown-menu",
		true
	);

	const dropdownElementsArray = [
		{
			icon: <TrashOutline />,
			text: "Delete",
			onClickEventHandler: async () => {
				const data = await deleteCommentRequest(commentID);

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
		<PostCommentMoreStyle
			id="post-comment-more-dropdown-trigger"
			onMouseLeave={handleCommentMoreOnMouseLeave}
		>
			<MoreHorizontal />

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="post-comment-more-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "100%",
						menuRight: "0",
						menuWidth: "10rem",
					}}
				/>
			)}

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="post-comment-more-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "100%",
						menuRight: "0",
						menuWidth: "16rem",
					}}
				/>
			)}
		</PostCommentMoreStyle>
	);
};

export default PostCommentMore;
