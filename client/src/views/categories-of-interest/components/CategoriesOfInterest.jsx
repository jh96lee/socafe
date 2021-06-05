import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader, Button } from "../../shared";
import PostCategory from "./PostCategory";

import {
	CategoriesOfInterestStyle,
	CategoriesOfInterestElementsWrapperStyle,
} from "../styles/CategoryOfInterestStyle";

import { fetchPostCategories } from "../../../redux/post-category/postCategoryAction";
import { postCategoryOfInterest } from "../../../redux/category-of-interest/categoryOfInterestAction";

const CategoriesOfInterest = () => {
	// TODO: depending on the url, it's either an empty array or category of interest array that was fetched via API
	const [selectedPostCategoriesArray, setSelectedPostCategoriesArray] =
		React.useState([]);

	const { isPostCategoriesLoading, postCategoriesArray } = useSelector(
		(state) => state.postCategoryReducer
	);
	const {
		isCategoryOfInterestPosting,
		categoryOfInterestErrorMessage,
		categoryOfInterestSuccessMessage,
	} = useSelector((state) => state.categoryOfInterestReducer);

	const dispatch = useDispatch();

	const handleOnClick = () => {
		dispatch(postCategoryOfInterest(selectedPostCategoriesArray));
	};

	React.useEffect(() => {
		dispatch(fetchPostCategories());
	}, []);

	return (
		<CategoriesOfInterestStyle>
			{isPostCategoriesLoading ? (
				<Loader />
			) : (
				<React.Fragment>
					<CategoriesOfInterestElementsWrapperStyle>
						{postCategoriesArray.map((category, idx) => {
							return (
								<PostCategory
									key={`post-category__${idx}`}
									selectedPostCategoriesArray={selectedPostCategoriesArray}
									setSelectedPostCategoriesArray={
										setSelectedPostCategoriesArray
									}
									postCategory={category}
								/>
							);
						})}
					</CategoriesOfInterestElementsWrapperStyle>

					<Button
						onClick={handleOnClick}
						success={categoryOfInterestSuccessMessage}
						error={categoryOfInterestErrorMessage}
						buttonStyleObject={{ buttonWidth: "24rem" }}
					>
						{categoryOfInterestSuccessMessage
							? categoryOfInterestSuccessMessage
							: "Continue"}
					</Button>
				</React.Fragment>
			)}
		</CategoriesOfInterestStyle>
	);
};

export default CategoriesOfInterest;
