import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../../shared";
import PostCategory from "./PostCategory";

import {
	CategoriesOfInterestStyle,
	CategoriesOfInterestElementsWrapperStyle,
	CategoriesOfInterestButtonStyle,
} from "../styles/CategoryOfInterestStyle";

import {
	fetchPostCategories,
	postCategoriesOfInterest,
} from "../../../redux/post-category/postCategoryAction";

const CategoriesOfInterest = () => {
	const [selectedCategoriesArray, setSelectedCategoriesArray] = React.useState(
		[]
	);

	const {
		isCategoriesLoaded,
		categories,
		categoriesOfInterest,
		isCategoriesOfInterestPosted,
		categoriesOfInterestResult,
	} = useSelector((state) => state.postCategoryReducer);

	const dispatch = useDispatch();

	const handleOnClick = () => {
		dispatch(postCategoriesOfInterest(selectedCategoriesArray));
	};

	React.useEffect(() => {
		dispatch(fetchPostCategories());
	}, []);

	return (
		<CategoriesOfInterestStyle>
			{isCategoriesLoaded ? (
				<React.Fragment>
					<CategoriesOfInterestElementsWrapperStyle>
						{categories.map((category, idx) => {
							return (
								<PostCategory
									key={`post-category__${idx}`}
									selectedCategoriesArray={selectedCategoriesArray}
									setSelectedCategoriesArray={setSelectedCategoriesArray}
									category={category}
								/>
							);
						})}
					</CategoriesOfInterestElementsWrapperStyle>

					<CategoriesOfInterestButtonStyle
						onClick={handleOnClick}
						success={
							categoriesOfInterestResult && categoriesOfInterestResult.success
						}
						error={
							categoriesOfInterestResult && categoriesOfInterestResult.error
						}
					>
						Continue
					</CategoriesOfInterestButtonStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</CategoriesOfInterestStyle>
	);
};

export default CategoriesOfInterest;
