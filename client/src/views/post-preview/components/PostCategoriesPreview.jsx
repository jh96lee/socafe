import * as React from "react";
import { useSelector } from "react-redux";

import { Skeleton } from "../../shared";

import {
	PostCategoriesPreviewStyle,
	PostCategoryPreviewStyle,
} from "../styles/PostCategoriesPreviewStyle";

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
