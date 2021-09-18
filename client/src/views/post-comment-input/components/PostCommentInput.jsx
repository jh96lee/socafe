import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Icon } from "../../shared";
import PostCommentInputDropdown from "./PostCommentInputDropdown";

import {
	uploadPostComment,
	setPostID,
	resetPostCommentInput,
} from "../../../redux/post-comment/post-comment-input/postCommentInputAction";

import { usePaginationReact } from "../../../hooks";

import { handleContentEditableOnKeyDown } from "../utils/handleContentEditableOnKeyDown";

import { PostCommentInputStyle } from "../styles/PostCommentInputStyle";
import { PostCommentContentEditableStyle } from "../styles/PostCommentContentEditableStyle";

import { Submit } from "../../../assets";

const PostCommentInput = () => {
	const [isSearchUsersDropdownOpen, setIsSearchUsersDropdownOpen] =
		React.useState(false);

	const dispatch = useDispatch();

	const { uploadedPostComment, repliedCommentID, repliedCommentUsername } =
		useSelector((state) => state.postCommentInputReducer);

	const {
		currentPage,
		contents,
		fetchContents,
		nextAPIEndpoint,
		handleLoadMoreButtonOnClick,
	} = usePaginationReact("/search/users", 1, false);

	const postID = parseInt(useParams().postID);

	const postCommentContentEditableRef = React.useRef();
	const contentEditableSearchUserRef = React.useRef();

	React.useEffect(() => {
		dispatch(setPostID(postID));
	}, [postID]);

	React.useEffect(() => {
		if (currentPage > 1) {
			fetchContents(false, "POST", {
				searchInput:
					contentEditableSearchUserRef.current.textContent.substring(1),
			});
		}
	}, [currentPage]);

	React.useEffect(() => {
		if (repliedCommentUsername) {
			const contentEditableChildNodesArray = Array.from(
				postCommentContentEditableRef.current.childNodes
			);

			contentEditableChildNodesArray.forEach((node) =>
				postCommentContentEditableRef.current.removeChild(node)
			);

			const paragraphTag = document.createElement("p");

			paragraphTag.textContent = `@${repliedCommentUsername}`;

			paragraphTag.setAttribute("data-comment-mention-type", "REPLY");

			postCommentContentEditableRef.current.append(paragraphTag);
		}
	}, [repliedCommentUsername, repliedCommentID]);

	React.useEffect(() => {
		if (uploadedPostComment) {
			postCommentContentEditableRef.current.textContent = "";

			dispatch(resetPostCommentInput());
		}
	}, [uploadedPostComment]);

	const handlePostCommentSubmitOnClick = () => {
		const contentEditableChildNodesArray = Array.from(
			postCommentContentEditableRef.current.childNodes
		);

		dispatch(uploadPostComment(contentEditableChildNodesArray));

		postCommentContentEditableRef.current.textContent = "";
	};

	const handleContentEditableOnInput = async (e) => {
		const selection = document.getSelection();

		const contentEditableChildNodesArray = Array.from(e.target.childNodes);

		if (contentEditableChildNodesArray.length > 0) {
			if (contentEditableChildNodesArray[0].nodeName === "BR") {
				postCommentContentEditableRef.current.removeChild(
					contentEditableChildNodesArray[0]
				);
			}
		}

		// REVIEW: if the caret is placed on a p tag, then we want search users API to fire and allow users to select a user that they want to tag
		if (selection.anchorNode.parentNode.nodeName === "P") {
			setIsSearchUsersDropdownOpen(true);

			const searchUsersInput = selection.anchorNode.textContent.substring(1);

			await fetchContents(true, "POST", {
				searchInput: searchUsersInput ? searchUsersInput : null,
			});

			// REVIEW: to know which p tag triggered this action and when a user has been selected from the dropdown
			// REVIEW: we know which node to replace/update
			contentEditableSearchUserRef.current = selection.anchorNode.parentNode;
		} else {
			setIsSearchUsersDropdownOpen(false);
		}
	};

	return (
		<PostCommentInputStyle>
			<PostCommentContentEditableStyle
				id="post-comment-contenteditable"
				contentEditable={true}
				ref={postCommentContentEditableRef}
				onInput={handleContentEditableOnInput}
				onKeyDown={handleContentEditableOnKeyDown}
			/>

			<Icon
				iconRole="button"
				iconType="button"
				iconOnClick={handlePostCommentSubmitOnClick}
			>
				<Submit />
			</Icon>

			{isSearchUsersDropdownOpen && (
				<PostCommentInputDropdown
					contents={contents}
					nextAPIEndpoint={nextAPIEndpoint}
					contentEditableSearchUserRef={contentEditableSearchUserRef}
					setIsDropdownMenuOpen={setIsSearchUsersDropdownOpen}
					handleLoadMoreButtonOnClick={handleLoadMoreButtonOnClick}
				/>
			)}
		</PostCommentInputStyle>
	);
};

export default PostCommentInput;
