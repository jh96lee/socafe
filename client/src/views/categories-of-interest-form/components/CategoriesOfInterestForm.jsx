import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import PostCategory from "./PostCategory";

import {
	CategoriesOfInterestFormStyle,
	CategoriesOfInterestFormContentStyle,
	CategoriesOfInterestButtonStyle,
} from "../../../styles";

import { fetchToken } from "../../../utils/cookie";

const CategoriesOfInterestForm = ({ setCurrentIndexStage }) => {
	const [selectedCategoriesArray, setSelectedCategoriesArray] = React.useState(
		[]
	);
	const [postCategories, setPostCategories] = React.useState([]);
	const [isPostCategoriesLoaded, setIsPostCategoriesLoaded] = React.useState(
		false
	);

	const fetchPostCategories = async () => {
		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/post_categories",
		});

		setPostCategories(data);

		setIsPostCategoriesLoaded(true);
	};

	React.useEffect(() => {
		fetchPostCategories();
	}, []);

	const handlePostCategoriesOnClick = async (e) => {
		e.preventDefault();

		const { data } = await axios({
			method: "POST",
			headers: {
				Authorization: `Bearer ${fetchToken()}`,
			},
			url: "http://localhost:8080/post_categories/interest",
			data: {
				categories: selectedCategoriesArray,
			},
		});

		setCurrentIndexStage(2);
	};

	return (
		<CategoriesOfInterestFormStyle>
			<h3>Categories of Interest (maximum 5)</h3>

			<CategoriesOfInterestFormContentStyle>
				{isPostCategoriesLoaded ? (
					postCategories.map((postCategoryObject, idx) => {
						return (
							<PostCategory
								key={`post_category_${idx}`}
								postCategoryObject={postCategoryObject}
								selectedCategoriesArray={selectedCategoriesArray}
								setSelectedCategoriesArray={setSelectedCategoriesArray}
							/>
						);
					})
				) : (
					<Loader />
				)}
			</CategoriesOfInterestFormContentStyle>

			<CategoriesOfInterestButtonStyle onClick={handlePostCategoriesOnClick}>
				Continue
			</CategoriesOfInterestButtonStyle>
		</CategoriesOfInterestFormStyle>
	);
};

export default CategoriesOfInterestForm;
