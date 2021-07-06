import * as React from "react";
import { useSelector } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import { useSearchAndSelect } from "../../../hooks/search-and-select/useSearchAndSelect";

import {
	addPostCategory,
	removePostCategory,
	setPostCategoriesErrorMessage,
} from "../../../redux/upload-post/post-categories/postCategoriesAction";

import { AddContentStyle } from "../../../styles";

const AddPostCategories = () => {
	const { postCategoriesArray, postCategoriesErrorMessage } = useSelector(
		(state) => state.postCategoriesReducer
	);

	const {
		searchAndSelectDropdownElementOnClickLogic,
		selectedElementOnClickLogic,
	} = useSearchAndSelect(
		3,
		"categories",
		"redux",
		postCategoriesArray,
		addPostCategory,
		removePostCategory,
		setPostCategoriesErrorMessage
	);

	return (
		<AddContentStyle>
			<h3>Select Categories</h3>

			<Message errorMessage={postCategoriesErrorMessage} />

			<SearchAndSelect
				searchAndSelectType="add-post-category"
				searchAndSelectedElementsArray={postCategoriesArray}
				searchAndSelectInputPlaceholder="Search for categories"
				searchAndSelectInputAPIEndpoint="/search/post-categories"
				selectedElementOnClickLogic={selectedElementOnClickLogic}
				searchAndSelectDropdownElementOnClickLogic={
					searchAndSelectDropdownElementOnClickLogic
				}
			/>
		</AddContentStyle>
	);
};

export default AddPostCategories;
