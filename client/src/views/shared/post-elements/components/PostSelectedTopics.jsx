import * as React from "react";

import {
	PostSelectedTopicsStyle,
	PostSelectedTopicStyle,
} from "../styles/PostSelectedTopicsStyle.js";

import { Skeleton } from "../../index";

const PostSelectedCategories = ({
	selectedPostCategoriesArray,
	conditionalRenderingVariable,
}) => {
	const postCategoriesArray = conditionalRenderingVariable
		? selectedPostCategoriesArray
		: ["", "", ""];

	return (
		<PostSelectedTopicsStyle>
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
						<PostSelectedTopicStyle key={`post-category__${idx}`}>
							{category.title}
						</PostSelectedTopicStyle>
					);
				}
			})}
		</PostSelectedTopicsStyle>
	);
};

export default PostSelectedCategories;
