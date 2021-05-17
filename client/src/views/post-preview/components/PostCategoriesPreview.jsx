import * as React from "react";
import { useSelector } from "react-redux";

import { Skeleton } from "../../shared";

import styled from "styled-components";

const PostCategoriesPreviewStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

const PostCategoryPreviewStyle = styled.p`
	color: var(--primary-text-color);
	background-color: #6096b12b;
	padding: 0.7rem 1.4rem;
	border-radius: 2rem;
`;

const PostCategoriesPreview = () => {
	const { selectedPostCategoriesArray } = useSelector(
		(state) => state.addPostReducer
	);

	const postCategoriesPreviewArray =
		selectedPostCategoriesArray.length === 0
			? ["", "", ""]
			: selectedPostCategoriesArray;

	return (
		<PostCategoriesPreviewStyle>
			{postCategoriesPreviewArray.map((category, idx) => {
				if (typeof category === "string") {
					return (
						<Skeleton
							key={`post-category-preview-skeleton__${idx}`}
							skeletonHeight="2.6rem"
							skeletonWidth="7rem"
						/>
					);
				} else {
					return (
						<PostCategoryPreviewStyle>
							{category.title}
						</PostCategoryPreviewStyle>
					);
				}
			})}
		</PostCategoriesPreviewStyle>
	);
};

export default PostCategoriesPreview;
