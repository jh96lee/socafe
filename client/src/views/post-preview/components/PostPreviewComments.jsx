import * as React from "react";
import styled from "styled-components";

import { Skeleton, IconElement } from "../../shared";

import { useDropdown } from "../../../hooks";

import { CloseAlt } from "../../../assets";

const PostPreviewCommentsStyle = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 50;
	display: ${(props) => (props.isPostUserCommentsOpen ? "grid" : "none")};
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr min-content;
	gap: 1rem;
	margin: auto;
	width: 35rem;
	height: 100%;
	background-color: var(--bg-1);
	border-radius: 2rem;
	box-shadow: 0 0 5px 2px var(--input-default-separator-color);

	& > h3 {
		color: var(--text-1);
		padding: 1.4rem;
		box-shadow: 0 1.6px 0 0 var(--input-default-separator-color);
	}
`;

const PostUserCommentsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 1rem;
	max-height: 100%;
`;

const PostCommentInputStyle = styled.div`
	padding: 1rem;
	box-shadow: 0 -1.6px 0 0 var(--input-default-separator-color);
`;

const PostPreviewComments = () => {
	const postPreviewCommentSkeletonHeight = "3.2rem";
	const postPreviewCommentInputSkeletonHeight = "4.5rem";

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"post-preview__double-arrow-left",
		"post-preview__post-preview-comments",
		false
	);

	return (
		<PostPreviewCommentsStyle
			id="post-preview__post-preview-comments"
			isPostUserCommentsOpen={isDropdownMenuOpen}
		>
			<IconElement
				onClick={() => {
					setIsDropdownMenuOpen(false);
				}}
				iconRole="button"
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "10px",
					elementRight: "10px",
					elementPadding: "",
					elementBackgroundColor: "",
					elementHoverBackgroundColor: "",
					elementBorderRadius: "",
					elementBoxShadow: "",
					elementBreakingPoint: "",
					iconColor: "",
					iconHoverColor: "",
					iconSize: "1.5rem",
					iconResponsiveSize: "",
				}}
			>
				<CloseAlt />
			</IconElement>

			<h3>Comments</h3>

			<PostUserCommentsStyle>
				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentSkeletonHeight}
				/>
			</PostUserCommentsStyle>

			<PostCommentInputStyle>
				<Skeleton
					skeletonWidth="100%"
					skeletonHeight={postPreviewCommentInputSkeletonHeight}
				/>
			</PostCommentInputStyle>
		</PostPreviewCommentsStyle>
	);
};

export default PostPreviewComments;
