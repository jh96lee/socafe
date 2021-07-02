import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import {
	addPostCategory,
	removePostCategory,
	setPostCategoriesErrorMessage,
} from "../../../redux/upload-post/post-categories/postCategoriesAction";

import { AddContentStyle } from "../../../styles";

const AddPostCategories = () => {
	const dispatch = useDispatch();

	const { postCategoriesArray, postCategoriesErrorMessage } = useSelector(
		(state) => state.postCategoriesReducer
	);

	const selectedElementOnClickEventHandler = React.useCallback(
		(elementID) => {
			dispatch(removePostCategory(elementID));
		},
		[dispatch]
	);

	const dropdownElementOnClickEventHandler = React.useCallback(
		(element) => {
			if (postCategoriesArray.length >= 3) {
				dispatch(
					setPostCategoriesErrorMessage({
						category: "You can select up to 3 categories",
					})
				);

				return;
			}

			const postCategoryIDArray = postCategoriesArray.map(
				(category) => category.id
			);

			if (postCategoryIDArray.includes(element.id)) {
				dispatch(
					setPostCategoriesErrorMessage({
						category: "Duplicate categories cannot be selected",
					})
				);

				return;
			}

			dispatch(addPostCategory(element));
		},
		[dispatch, postCategoriesArray]
	);

	return (
		<AddContentStyle>
			<h3>Select Categories</h3>

			<Message
				errorMessage={
					postCategoriesErrorMessage && postCategoriesErrorMessage.category
				}
			/>

			<SearchAndSelect
				searchAndSelectType="add-post-category"
				searchAndSelectedElementsArray={postCategoriesArray}
				searchAndSelectInputPlaceholder="Search for categories that fit your post"
				searchAndSelectInputAPIEndpoint="/search/post-categories"
				selectedElementOnClickEventHandler={selectedElementOnClickEventHandler}
				dropdownElementOnClickEventHandler={dropdownElementOnClickEventHandler}
			/>
		</AddContentStyle>
	);
};

export default AddPostCategories;
