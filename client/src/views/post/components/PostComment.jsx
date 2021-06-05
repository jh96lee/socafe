import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { setCommentRole } from "../../../redux/comment/commentAction";

import { SearchAndSelect, FormInput } from "../../shared";

import useShowAndHideElementOnClick from "../../../hooks/useShowAndHideElementOnClick";

import { User, Submit } from "../../../assets";
import { DropdownStyle } from "../../../styles";

const PostCommentStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #fff;
	border-radius: 1rem;
`;

const PostCommentDropdownStyle = styled(DropdownStyle)`
	position: unset;
`;

const PostCommentIconElementStyle = styled.div`
	padding: 1rem;
	border-radius: 50%;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: var(--secondary-icon-color);
	}

	&:hover {
		cursor: pointer;
		background-color: var(--secondary-hover-clickable-background-color);
	}
`;

const PostCommentSearchAndSelectPopupStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	background-color: #121212;
	width: 35%;
	padding: 1rem;
	border-radius: 1rem;
`;

const PostCommentSubmitIconElementStyle = styled.div`
	padding: 1rem;
	border-radius: 50%;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: var(--secondary-icon-color);
	}
`;

const PostComment = () => {
	const [isSearchAndSelectOpen, setIsSearchAndSelectOpen] =
		React.useState(false);

	const { commentContent, taggedCommentUsersArray, commentErrorMessage } =
		useSelector((state) => state.commentReducer);

	const dispatch = useDispatch();

	useShowAndHideElementOnClick(
		"tag-user-comment-dropdown-trigger",
		"search-and-select-pop-up",
		setIsSearchAndSelectOpen,
		false
	);

	return (
		<PostCommentStyle>
			<PostCommentDropdownStyle id="tag-user-comment-dropdown-trigger">
				<PostCommentIconElementStyle>
					<User id="user" />
				</PostCommentIconElementStyle>

				{isSearchAndSelectOpen && (
					<PostCommentSearchAndSelectPopupStyle id="search-and-select-pop-up">
						<SearchAndSelect
							searchAndSelectType="comment-user"
							searchAndSelectAPIEndpoint="/search/users"
							searchAndSelectedArray={taggedCommentUsersArray}
							searchAndSelectPlaceholder="Search for users"
						/>
					</PostCommentSearchAndSelectPopupStyle>
				)}
			</PostCommentDropdownStyle>

			<FormInput
				// FIX: find another way to style this component
				inputUsage="search"
				inputID="comment"
				inputLabel="Comment"
				inputName="comment"
				inputType="text"
				inputPlaceholder="Add a comment"
				inputWidth="100%"
				// inputOnChangeEventHandler={handleOnChange}
			/>

			<PostCommentSubmitIconElementStyle>
				<Submit />
			</PostCommentSubmitIconElementStyle>
		</PostCommentStyle>
	);
};

export default PostComment;
