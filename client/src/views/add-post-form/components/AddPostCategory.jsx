import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useSearch } from "../../../hooks/useSearch";
import { useDropdown } from "../../../hooks/useDropdown";

import {
	addPostCategory,
	removePostCategory,
} from "../../../redux/upload-post/post-category/postCategoryAction";

import { AddContentStyle } from "../../../styles";

import SearchAndSelect from "./SearchAndSelect";

const AddPostCategory = () => {
	const dispatch = useDispatch();

	const { postCategoriesArray, postCategoriesErrorMessage } = useSelector(
		(state) => state.postCategoryReducer
	);

	return (
		<AddContentStyle>
			<h3>Select Categories</h3>

			<SearchAndSelect
				searchAndSelectType="add-post-category"
				searchAndSelectedElementsArray={postCategoriesArray}
				searchAndSelectInputPlaceholder="Search categories for your post"
				searchAndSelectInputAPIEndpoint="/search/post-categories"
				selectedElementOnClickEventHandler={(elementID) => {
					dispatch(removePostCategory(elementID));
				}}
				// TODO: the logic for adding is longer so having a separate function declaration might be better
				dropdownElementOnClickEventHandler={(element) => {
					dispatch(addPostCategory(element));
				}}
			/>
		</AddContentStyle>
	);
};

export default AddPostCategory;
