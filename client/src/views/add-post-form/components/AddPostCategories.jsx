import * as React from "react";
import { useSelector } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import { useSearchAndSelectRedux } from "../../../hooks";

import {
	addPostCategory,
	removePostCategory,
	setPostCategoriesErrorMessage,
} from "../../../redux/add-post/post-categories/postCategoriesAction";

import { AddContentStyle } from "../../../styles";

const AddPostCategories = () => {
	const { postCategoriesArray, postCategoriesErrorMessage } = useSelector(
		(state) => state.postCategoriesReducer
	);

	const {
		searchAndSelectDropdownElementOnClickEventHandler,
		selectedElementOnClickEventHandler,
	} = useSearchAndSelectRedux(
		3,
		"categories",
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
				selectedElementOnClickEventHandler={selectedElementOnClickEventHandler}
				searchAndSelectDropdownElementOnClickEventHandler={
					searchAndSelectDropdownElementOnClickEventHandler
				}
			/>
		</AddContentStyle>
	);
};

export default AddPostCategories;
