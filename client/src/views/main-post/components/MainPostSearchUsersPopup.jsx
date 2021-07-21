import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {
	FormInput,
	Message,
	DropdownElement,
	SearchAndSelectedElements,
} from "../../shared/index";

import {
	addPostCommentUser,
	removePostCommentUser,
	setPostCommentTaggedUser,
} from "../../../redux/post-comment/postCommentAction";

import { useDropdown, useSearch } from "../../../hooks";

import { Remove } from "../../../assets";

const PostSearchUsersPopupStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1000;
	display: flex;
	flex-direction: column;
	gap: 1.4rem;
	background-color: var(--bg-1);
	width: 45rem;
	height: 40rem;
	padding: 2rem;
	overflow: scroll;
	border: 2px solid #fff;
	border-radius: 1rem;
`;

const PostSearchUsersPopupTaggedUsersStyle = styled.div`
	&:empty {
		display: none;
	}
`;

const PostSearchUsersPopupHeaderStyle = styled.div`
	color: var(--text-1);
`;

const PostSearchUsersPopupResultsStyle = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
`;

const PostSearchUsersPopup = () => {
	const dispatch = useDispatch();

	const { postCommentTaggedUsersArray } = useSelector(
		(state) => state.postCommentReducer
	);

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"",
		"",
		false,
		false
	);

	const { searchResultsArray, handleSearchResultsOnChange } = useSearch(
		"/search/users",
		setIsDropdownMenuOpen
	);

	const dropdownElementsArray = searchResultsArray.map((result) => {
		return {
			content: result,
			onClickEventHandler: () => {
				dispatch(setPostCommentTaggedUser(result));

				dispatch(addPostCommentUser(result));
			},
		};
	});

	return (
		<PostSearchUsersPopupStyle>
			<PostSearchUsersPopupHeaderStyle>
				<h3>Search Users to Tag!</h3>
			</PostSearchUsersPopupHeaderStyle>

			{postCommentTaggedUsersArray.length > 0 && (
				<SearchAndSelectedElements
					searchAndSelectType={"post-comment"}
					searchAndSelectedElementsArray={postCommentTaggedUsersArray}
					selectedElementOnClickEventHandler={(id) => {
						dispatch(removePostCommentUser(id));
					}}
					searchAndSelectedElementsStyleObject={{
						searchAndSelectedElementsPadding: "0",
					}}
				/>
			)}

			<FormInput
				onChange={handleSearchResultsOnChange}
				formInputStyleObject={{
					labelDisplay: "none",
					inputHeight: "fit-content",
					inputBoxShadow: "",
				}}
			/>

			<PostSearchUsersPopupResultsStyle>
				{dropdownElementsArray.map(({ content, onClickEventHandler }, idx) => {
					return (
						<DropdownElement
							key={`post-search-users-popup__dropdown-element-${idx}`}
							dropdownElementContent={content}
							dropdownElementOnClickEventHandler={onClickEventHandler}
						/>
					);
				})}
			</PostSearchUsersPopupResultsStyle>
		</PostSearchUsersPopupStyle>
	);
};

export default PostSearchUsersPopup;
