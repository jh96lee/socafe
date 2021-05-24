import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../shared";
import PostCategory from "./PostCategory";

import {
	CategoriesOfInterestStyle,
	CategoriesOfInterestElementsWrapperStyle,
} from "../styles/CategoryOfInterestStyle";
import { ButtonStyle } from "../../../styles";

import {
	fetchPostCategories,
	// postCategoriesOfInterest,
} from "../../../redux/post-category/postCategoryAction";

const CategoriesOfInterest = () => {
	// TODO: depending on the url, it's either an empty array or category of interest array that was fetched via API
	const [selectedPostCategoriesArray, setSelectedPostCategoriesArray] =
		React.useState([]);

	const { isPostCategoriesLoading, postCategoriesArray } = useSelector(
		(state) => state.postCategoryReducer
	);

	const dispatch = useDispatch();

	const handleOnClick = () => {
		// dispatch(postCategoriesOfInterest(selectedCategoriesArray));
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

					<ButtonStyle
						onClick={handleOnClick}
						// success={
						// 	categoriesOfInterestResult && categoriesOfInterestResult.success
						// }
						// error={
						// 	categoriesOfInterestResult && categoriesOfInterestResult.error
						// }
						width="24rem"
					>
						Submit
					</ButtonStyle>
				</React.Fragment>
			)}
		</CategoriesOfInterestStyle>
	);
};

export default CategoriesOfInterest;
