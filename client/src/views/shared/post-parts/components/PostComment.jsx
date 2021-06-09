import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { FormInput, IconElement, Message } from "../..";
import SearchAndSelected from "../../search-and-select/components/SearchAndSelected";
import UserDropdownElement from "../../dropdown-element/components/UserDropdownElement";

import {
	setCommentContent,
	addUserOnComment,
	removeUserOnComment,
	setCommentErrorMessage,
} from "../../../../redux/comment/commentAction";
import { addContent } from "../../../../redux/common/addContent";

import { useDropdown } from "../../../../hooks/useDropdown";

import { handleSearchInputOnChange } from "../../../../utils/form/handleSearchInputOnChange";

import { BorderStyle } from "../../../../styles";

import { User, Submit, Remove, Tag } from "../../../../assets";

const PostCommentStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.7rem;
	padding: 0 1rem;
	border-radius: 2rem;
	height: 90%;
	width: 90%;
	margin: auto;
	box-shadow: 0 0 0 1.6px var(--separator-1);
`;

const PostCommentPopupStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	background-color: var(--bg-1);
	box-shadow: 0 6px 20px 5px var(--separator-2);
	border: 1px solid var(--separator-1);
	min-height: 10rem;
	max-height: 35rem;
	width: 45%;
	padding: 1.5rem;
	border-radius: 1rem;
	overflow: scroll;

	& > svg {
		fill: var(--txt-1);
		position: absolute;
		top: 1rem;
		right: 1rem;
		width: 1.3rem;
		height: 1.3rem;
	}

	& > h2 {
		color: var(--txt-1);
	}
`;

const PostCommentResultStyle = styled.div`
	&:empty {
		display: none;
	}
`;

const PostComment = () => {
	const [searchResultArray, setSearchResultArray] = React.useState([]);

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"post-comment-popup-trigger",
		"post-comment-popup-menu",
		false
	);

	const { commentContent, taggedCommentUsersArray, commentErrorMessage } =
		useSelector((state) => state.commentReducer);

	const dispatch = useDispatch();

	return (
		<PostCommentStyle>
			<IconElement
				iconID="post-comment-popup-trigger"
				iconRole="button"
				iconElementStyleObject={{ iconSize: "2rem" }}
			>
				<Tag />
			</IconElement>

			<BorderStyle borderHeight="3rem" />

			<FormInput
				id="comment"
				label="comment"
				name="comment"
				type="text"
				placeholder="Add a comment"
				onChange={(e) => {
					dispatch(setCommentContent(e.target.value));
				}}
				formInputStyleObject={{
					labelDisplay: "none",
					inputBackgroundColor: "transparent",
					inputBoxShadow: "none",
					inputWidth: "100%",
					inputHeight: "100%",
					inputPlaceholderFontSize: "1.3rem",
				}}
			/>

			<BorderStyle borderHeight="3rem" />

			<IconElement
				iconID="post-comment-popup-trigger"
				iconRole="button"
				iconElementStyleObject={{ iconSize: "2rem" }}
			>
				<Submit />
			</IconElement>
		</PostCommentStyle>
	);
};

export default PostComment;

// {isDropdownMenuOpen && (
// 	<PostCommentPopupStyle id="post-comment-popup-menu">
// 		<Remove />

// 		<h2>Tag Users</h2>

// 		<Message
// 			errorMessage={
// 				commentErrorMessage && commentErrorMessage.commentUser
// 			}
// 		/>

// 		<SearchAndSelected
// 			searchAndSelectType="comment-user"
// 			searchAndSelectedArray={taggedCommentUsersArray}
// 			removeContentActionCreator={removeUserOnComment}
// 			searchAndSelectedStyleObject={{
// 				searchAndSelectedPadding: "0.5rem 0",
// 			}}
// 		/>

// 		<FormInput
// 			id="comment__search-user"
// 			label="search-user"
// 			name="search-user"
// 			type="text"
// 			placeholder="Search for users"
// 			onChange={(e) => {
// 				handleSearchInputOnChange(
// 					e,
// 					"/search/users",
// 					setSearchResultArray,
// 					setIsDropdownMenuOpen
// 				);
// 			}}
// 			formInputStyleObject={{
// 				labelDisplay: "none",
// 			}}
// 		/>

// 		<PostCommentResultStyle>
// 			{searchResultArray.map((result) => {
// 				return (
// 					<UserDropdownElement
// 						dropdownElementContent={result}
// 						dropdownElementOnClickEventHandler={() => {
// 							dispatch(
// 								addContent(
// 									"comment-user",
// 									result,
// 									taggedCommentUsersArray,
// 									addUserOnComment,
// 									setCommentErrorMessage
// 								)
// 							);
// 						}}
// 					/>
// 				);
// 			})}
// 		</PostCommentResultStyle>
// 	</PostCommentPopupStyle>
// )}
