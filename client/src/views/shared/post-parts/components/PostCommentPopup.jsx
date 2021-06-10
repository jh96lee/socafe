import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { FormInput, Message } from "../../index";
import SearchAndSelected from "../../search-and-select/components/SearchAndSelected";
import UserDropdownElement from "../../dropdown-element/components/UserDropdownElement";

import {
	addUserOnComment,
	removeUserOnComment,
	setCommentErrorMessage,
} from "../../../../redux/comment/commentAction";
import { addContent } from "../../../../redux/common/addContent";

import { useDropdown } from "../../../../hooks/useDropdown";

import { handleSearchInputOnChange } from "../../../../utils/form/handleSearchInputOnChange";

import { Remove } from "../../../../assets";

const PostCommentPopupStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	background-color: var(--bg-1);
	box-shadow: 0px 2px 10px 1px var(--separator-2);
	border: 1px solid var(--separator-1);
	min-height: 10rem;
	max-height: 35rem;
	width: 38%;
	padding: 2.5rem;
	border-radius: 1rem;
	overflow: scroll;

	& > svg {
		fill: var(--txt-1);
		position: absolute;
		top: 1.2rem;
		right: 1.2rem;
		width: 1.4rem;
		height: 1.4rem;
		cursor: pointer;
	}

	& > h3 {
		font-size: 1.9rem;
		color: var(--txt-1);
	}
`;

const PostCommentResultStyle = styled.div`
	&:empty {
		display: none;
	}
`;

const PostCommentPopup = () => {
	const [searchResultArray, setSearchResultArray] = React.useState([]);

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"post-comment-popup-trigger",
		"post-comment-popup-menu",
		false
	);

	const dispatch = useDispatch();

	const { taggedCommentUsersArray, commentErrorMessage } = useSelector(
		(state) => state.commentReducer
	);

	return (
		isDropdownMenuOpen && (
			<PostCommentPopupStyle id="post-comment-popup-menu">
				<Remove
					onClick={() => setIsDropdownMenuOpen((prevState) => !prevState)}
				/>

				<h3>Tag Users</h3>

				<Message
					errorMessage={commentErrorMessage && commentErrorMessage.commentUser}
				/>

				<SearchAndSelected
					searchAndSelectType="comment-user"
					searchAndSelectedArray={taggedCommentUsersArray}
					removeContentActionCreator={removeUserOnComment}
					searchAndSelectedStyleObject={{
						searchAndSelectedPadding: "0.5rem 0",
					}}
				/>

				<FormInput
					id="comment__search-user"
					label="search-user"
					name="search-user"
					type="text"
					placeholder="Search for users"
					onChange={(e) => {
						handleSearchInputOnChange(
							e,
							"/search/users",
							setSearchResultArray,
							setIsDropdownMenuOpen
						);
					}}
					formInputStyleObject={{
						labelDisplay: "none",
					}}
				/>

				<PostCommentResultStyle>
					{searchResultArray.map((result, idx) => {
						return (
							<UserDropdownElement
								key={`post-comment-search-result__${idx}`}
								dropdownElementContent={result}
								dropdownElementOnClickEventHandler={() => {
									dispatch(
										addContent(
											"comment-user",
											result,
											taggedCommentUsersArray,
											addUserOnComment,
											setCommentErrorMessage
										)
									);
								}}
							/>
						);
					})}
				</PostCommentResultStyle>
			</PostCommentPopupStyle>
		)
	);
};

export default PostCommentPopup;
