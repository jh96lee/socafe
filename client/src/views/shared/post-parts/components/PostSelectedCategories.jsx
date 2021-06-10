import * as React from "react";

import {
	PostSelectedCategoriesStyle,
	PostSelectedCategoryStyle,
} from "../styles/PostSelectedCategoriesStyle.js";

import { Skeleton } from "../../index";

const PostSelectedCategories = ({
	selectedPostCategoriesArray,
	conditionalPostSelectedCategoriesRenderingVariable,
}) => {
	const postCategoriesArray = conditionalPostSelectedCategoriesRenderingVariable
		? selectedPostCategoriesArray
		: ["", "", ""];

	return (
		<PostSelectedCategoriesStyle>
			{postCategoriesArray.map((category, idx) => {
				if (typeof category === "string") {
					return (
						<Skeleton
							key={`post-category-skeleton__${idx}`}
							skeletonHeight="2.6rem"
							skeletonWidth="7rem"
						/>
					);
				} else {
					return (
						<PostSelectedCategoryStyle key={`post-category__${idx}`}>
							{category.title}
						</PostSelectedCategoryStyle>
					);
				}
			})}
		</PostSelectedCategoriesStyle>
	);
};

export default PostSelectedCategories;
