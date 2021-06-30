import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { FormInput, IconElement, Skeleton } from "../../index";

import { setCommentContent } from "../../../../redux/comment/commentAction";

import { BorderStyle } from "../../../../styles";

import { Submit, Tag } from "../../../../assets";

const PostCommentStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.7rem;
	padding: 0.3rem 1rem;
	border-radius: 2rem;
	height: 90%;
	width: 90%;
	margin: auto;
	box-shadow: 0 0 0 1.6px var(--separator-1);

	& #post-comment-tagged-users-number {
		position: absolute;
		right: 0px;
		bottom: 0px;
		font-size: 1rem;
		color: #fff;
		background-color: #f02849;
		padding: 0.2rem 0.6rem;
		border-radius: 1rem;
	}
`;

const PostCommentInput = ({ postConditionalRenderingVariable }) => {
	const dispatch = useDispatch();

	const { taggedCommentUsersArray } = useSelector(
		(state) => state.commentReducer
	);

	return postConditionalRenderingVariable ? (
		<PostCommentStyle>
			<IconElement
				iconID="post-comment-popup-trigger"
				iconRole="button"
				iconElementStyleObject={{ iconSize: "2rem" }}
			>
				<Tag />

				{taggedCommentUsersArray.length > 0 && (
					<span id="post-comment-tagged-users-number">
						{taggedCommentUsersArray.length}
					</span>
				)}
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
				iconRole="button"
				iconElementStyleObject={{ iconSize: "2rem" }}
			>
				<Submit />
			</IconElement>
		</PostCommentStyle>
	) : (
		<Skeleton
			skeletonHeight="4.2rem"
			skeletonWidth="90%"
			skeletonBorderRadius="3rem"
			skeletonMargin="auto"
		/>
	);
};

export default PostCommentInput;
