import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Icon } from "../../shared";
import MainPostCommentInputDropdown from "./MainPostCommentInputDropdown";

import {
	postMainPostComment,
	setMainPostID,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { usePaginationReact } from "../../../hooks";

import { handleContentEditableOnKeyDown } from "../utils/handleContentEditableOnKeyDown";

import { MainPostCommentInputStyle } from "../styles/MainPostCommentInputStyle";
import { MainPostCommentContentEditableStyle } from "../styles/MainPostCommentContentEditableStyle";

import { Submit } from "../../../assets";

const MainPostCommentInput = () => {
	const [isSearchUsersDropdownOpen, setIsSearchUsersDropdownOpen] =
		React.useState(false);

	const dispatch = useDispatch();

	const {
		currentPage,
		contents,
		fetchContents,
		nextAPIEndpoint,
		handleLoadMoreButtonOnClick,
	} = usePaginationReact("/search/users", 1, false);

	const {
		mainPostCommentRepliedCommentUsername,
		mainPostCommentRepliedCommentID,
	} = useSelector((state) => state.mainPostCommentInputReducer);

	const { mainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const postID = parseInt(useParams().postID);

	const mainPostCommentsContentEditableRef = React.useRef();

	const contentEditableSearchUserRef = React.useRef();

	React.useEffect(() => {
		dispatch(setMainPostID(postID));
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
		if (mainPostCommentRepliedCommentUsername) {
			const contentEditableChildNodesArray = Array.from(
				mainPostCommentsContentEditableRef.current.childNodes
			);

			contentEditableChildNodesArray.forEach((node) =>
				mainPostCommentsContentEditableRef.current.removeChild(node)
			);

			const paragraphTag = document.createElement("p");

			paragraphTag.textContent = `@${mainPostCommentRepliedCommentUsername}`;

			paragraphTag.setAttribute("data-comment-mention-type", "REPLY");

			mainPostCommentsContentEditableRef.current.append(paragraphTag);
		}
	}, [mainPostCommentRepliedCommentUsername, mainPostCommentRepliedCommentID]);

	React.useEffect(() => {
		if (mainPostComment) {
			mainPostCommentsContentEditableRef.current.textContent = "";
		}
	}, [mainPostComment]);

	const handlePostCommentSubmitOnClick = () => {
		const contentEditableChildNodesArray = Array.from(
			mainPostCommentsContentEditableRef.current.childNodes
		);

		dispatch(postMainPostComment(contentEditableChildNodesArray));

		mainPostCommentsContentEditableRef.current.textContent = "";
	};

	const handleContentEditableOnInput = async (e) => {
		const selection = document.getSelection();

		const contentEditableChildNodesArray = Array.from(e.target.childNodes);

		if (contentEditableChildNodesArray.length > 0) {
			if (contentEditableChildNodesArray[0].nodeName === "BR") {
				mainPostCommentsContentEditableRef.current.removeChild(
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
		<MainPostCommentInputStyle>
			<MainPostCommentContentEditableStyle
				id="main-post-comments-contenteditable"
				contentEditable={true}
				ref={mainPostCommentsContentEditableRef}
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
				<MainPostCommentInputDropdown
					contents={contents}
					nextAPIEndpoint={nextAPIEndpoint}
					contentEditableSearchUserRef={contentEditableSearchUserRef}
					setIsDropdownMenuOpen={setIsSearchUsersDropdownOpen}
					handleLoadMoreButtonOnClick={handleLoadMoreButtonOnClick}
				/>
			)}
		</MainPostCommentInputStyle>
	);
};

export default MainPostCommentInput;
