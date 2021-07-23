import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

import { IconElement, DropdownMenu } from "../../shared";

import {
	submitMainPostComment,
	setMainPostID,
} from "../../../redux/main-post-comment-input/mainPostCommentInputAction";

import { addSpaceToString } from "../../../utils/comment/addSpaceToString";
import { setCaret } from "../../../utils/comment/setCaret";

import { MainPostCommentsInputStyle } from "../styles/MainPostCommentsInputStyle";
import { MainPostCommentsContentEditableStyle } from "../styles/MainPostCommentsContentEditableStyle";

import { Submit } from "../../../assets";

const MainPostCommentsInput = () => {
	const [isSearchUsersDropdownOpen, setIsSearchUsersDropdownOpen] =
		React.useState(false);
	const [searchUsersArray, setSearchUsersArray] = React.useState([]);

	const dispatch = useDispatch();

	const { mainPostCommentRepliedCommentOwnerUsername } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const postID = parseInt(useParams().postID);

	const mainPostCommentsContentEditableRef = React.useRef();

	const contentEditableSearchUserRef = React.useRef();

	const handleContentEditableOnKeyDown = async (e) => {
		const contentEditableChildNodesArray = Array.from(e.target.childNodes);

		const disallowedKeysArray = [
			"Tab",
			"CapsLock",
			"Shift",
			"Backspace",
			"Meta",
			"Alt",
			"Control",
			"ArrowLeft",
			"ArrowDown",
			"ArrowUp",
			"ArrowRight",
		];

		if (e.key === "Enter") {
			e.preventDefault();
		}

		if (e.key === "@") {
			e.preventDefault();

			const paragraphTag = document.createElement("p");

			paragraphTag.textContent = "@";

			mainPostCommentsContentEditableRef.current.append(paragraphTag);

			const range = document.createRange();
			const selection = document.getSelection();

			range.setStart(paragraphTag, 1);

			selection.removeAllRanges();
			selection.addRange(range);
		} else if (
			contentEditableChildNodesArray.length === 0 &&
			!disallowedKeysArray.includes(e.key)
		) {
			e.preventDefault();

			const spanTag = document.createElement("span");

			spanTag.textContent = e.key;

			mainPostCommentsContentEditableRef.current.append(spanTag);

			setCaret(spanTag, 1);
		}

		if (e.key === " ") {
			const selection = document.getSelection();

			if (selection.anchorNode.parentNode.nodeName === "P") {
				// REVIEW: means space has been clicked at the end of the paragraph tag and we want to break out of the p tag
				if (selection.anchorNode.length === selection.anchorOffset) {
					e.preventDefault();

					const spanTag = document.createElement("span");

					spanTag.textContent = " ";

					mainPostCommentsContentEditableRef.current.append(spanTag);

					setCaret(spanTag, 1);
				} else {
					// TODO: looked up user and SELECTED users will remain a p tag
					// REVIEW: if the caret is in between p tags, that means the user messed up the p tag, therefore we want to convert it back to being a span tag
					e.preventDefault();

					const spanTag = document.createElement("span");

					const range = document.createRange();
					const selection = getSelection();

					const anchorNode = selection.anchorNode;
					const anchorOffset = selection.anchorOffset;

					const updatedTextContent = addSpaceToString(
						anchorNode.textContent,
						anchorOffset
					);

					spanTag.textContent = updatedTextContent;

					// REVIEW: replace the broken p tag with the new span tag
					// TODO: anchorNode is the text and parentNode is the p tag
					mainPostCommentsContentEditableRef.current.replaceChild(
						spanTag,
						anchorNode.parentNode
					);

					range.setStart(spanTag, 1);

					selection.removeAllRanges();
					selection.addRange(range);
				}
			}
		}
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

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/search/users",
				data: {
					searchInput: searchUsersInput ? searchUsersInput : null,
				},
			});

			setSearchUsersArray(data);

			// REVIEW: to know which p tag triggered this action and when a user has been selected from the dropdown
			// REVIEW: we know which node to replace/update
			contentEditableSearchUserRef.current = selection.anchorNode.parentNode;
		} else {
			setIsSearchUsersDropdownOpen(false);
		}
	};

	const dropdownElementsArray = searchUsersArray.map((result) => {
		return {
			content: result,
			onClickEventHandler: () => {
				contentEditableSearchUserRef.current.textContent = `@${result.username}`;

				setIsSearchUsersDropdownOpen(false);
			},
		};
	});

	const handlePostCommentSubmitOnClick = () => {
		const contentEditableChildNodesArray = Array.from(
			mainPostCommentsContentEditableRef.current.childNodes
		);

		dispatch(submitMainPostComment(contentEditableChildNodesArray));
	};

	React.useEffect(() => {
		dispatch(setMainPostID(postID));
	}, [postID]);

	React.useEffect(() => {
		if (mainPostCommentRepliedCommentOwnerUsername) {
			const contentEditableChildNodesArray = Array.from(
				mainPostCommentsContentEditableRef.current.childNodes
			);

			contentEditableChildNodesArray.forEach((node) =>
				mainPostCommentsContentEditableRef.current.removeChild(node)
			);

			const paragraphTag = document.createElement("p");

			paragraphTag.textContent = `@${mainPostCommentRepliedCommentOwnerUsername}`;

			mainPostCommentsContentEditableRef.current.append(paragraphTag);
		}
	}, [mainPostCommentRepliedCommentOwnerUsername]);

	return (
		<MainPostCommentsInputStyle>
			<MainPostCommentsContentEditableStyle
				contentEditable={true}
				ref={mainPostCommentsContentEditableRef}
				onInput={handleContentEditableOnInput}
				onKeyDown={handleContentEditableOnKeyDown}
			/>

			<IconElement
				onClick={handlePostCommentSubmitOnClick}
				iconRole="button"
				iconElementStyleObject={{
					elementPadding: "1rem",
					elementWidth: "fit-content",
					elementHeight: "fit-content",
					iconSize: "2rem",
				}}
			>
				<Submit />
			</IconElement>

			{isSearchUsersDropdownOpen && (
				<DropdownMenu
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						menuTop: "calc(-100% - 10px)",
						menuLeft: "0",
						menuWidth: "100%",
					}}
				/>
			)}
		</MainPostCommentsInputStyle>
	);
};

export default MainPostCommentsInput;
