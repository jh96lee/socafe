import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Loader } from "../../shared";
import PostCategory from "./PostCategory";

import { registerFormNextStep } from "../../../redux/user/userRegisterFormAction";

import CategoriesOfInterestStyle from "../styles/CategoriesOfInterestStyle";
import CategoriesOfInterestWrapperStyle from "../styles/CategoriesOfInterestWrapperStyle";
import CategoriesOfInterestButtonStyle from "../styles/CategoriesOfInterestButtonStyle";

import { fetchToken } from "../../../utils/cookie";

const CategoriesOfInterest = () => {
	const [selectedCategoriesArray, setSelectedCategoriesArray] = React.useState(
		[]
	);
	const [postCategories, setPostCategories] = React.useState([]);
	const [isPostCategoriesLoaded, setIsPostCategoriesLoaded] = React.useState(
		false
	);

	const dispatch = useDispatch();

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

		await axios({
			method: "POST",
			headers: {
				Authorization: `Bearer ${fetchToken()}`,
			},
			url: "http://localhost:8080/post_categories/interest",
			data: {
				categories: selectedCategoriesArray,
			},
		});

		dispatch(registerFormNextStep(2));
	};

	return (
		<CategoriesOfInterestStyle>
			<CategoriesOfInterestWrapperStyle>
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
			</CategoriesOfInterestWrapperStyle>

			<CategoriesOfInterestButtonStyle onClick={handlePostCategoriesOnClick}>
				Continue
			</CategoriesOfInterestButtonStyle>
		</CategoriesOfInterestStyle>
	);
};

export default CategoriesOfInterest;
