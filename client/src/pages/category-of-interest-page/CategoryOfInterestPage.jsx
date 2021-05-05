import * as React from "react";

import { CategoriesOfInterest } from "../../views/categories-of-interest";

import {
	CategoryOfInterestPageStyle,
	CategoriesOfInterestElementsWrapperStyle,
} from "./CategoryOfInterestPageStyle";

const CategoryOfInterestPage = () => {
	return (
		<CategoryOfInterestPageStyle>
			<CategoriesOfInterestElementsWrapperStyle>
				<h2>Choose categories to follow</h2>

				<CategoriesOfInterest />
			</CategoriesOfInterestElementsWrapperStyle>
		</CategoryOfInterestPageStyle>
	);
};

export default CategoryOfInterestPage;
