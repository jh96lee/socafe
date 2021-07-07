import * as React from "react";
import { useSelector } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import { useSearchAndSelectRedux } from "../../../hooks";

import {
	addPostUser,
	removePostUser,
	setPostUsersErrorMessage,
} from "../../../redux/upload-post/post-users/postUsersAction";

import { AddContentStyle } from "../../../styles";

const AddPostUsers = () => {
	const { postUsersArray, postUsersErrorMessage } = useSelector(
		(state) => state.postUsersReducer
	);

	const {
		searchAndSelectDropdownElementOnClickLogic,
		selectedElementOnClickLogic,
	} = useSearchAndSelectRedux(
		3,
		"users",
		postUsersArray,
		addPostUser,
		removePostUser,
		setPostUsersErrorMessage
	);

	return (
		<AddContentStyle>
			<h3>Tag Users</h3>

			<Message errorMessage={postUsersErrorMessage} />

			<SearchAndSelect
				// REVIEW: this needs to be singular for dropdownElementIdentifier function to work
				searchAndSelectType="add-post-user"
				searchAndSelectedElementsArray={postUsersArray}
				searchAndSelectInputPlaceholder="Search for users"
				searchAndSelectInputAPIEndpoint="/search/users"
				selectedElementOnClickLogic={selectedElementOnClickLogic}
				searchAndSelectDropdownElementOnClickLogic={
					searchAndSelectDropdownElementOnClickLogic
				}
			/>
		</AddContentStyle>
	);
};

export default AddPostUsers;
