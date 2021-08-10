import * as React from "react";
import { useSelector } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import { useSearchAndSelect, useSaveDraft } from "../../../hooks";

import {
	addPostUser,
	removePostUser,
	setPostUsersErrorMessage,
} from "../../../redux/add-post/post-users/postUsersAction";

import { AddContentStyle } from "../../../styles";

const AddPostUsers = () => {
	const { postUsersArray, postUsersErrorMessage } = useSelector(
		(state) => state.postUsersReducer
	);

	const { dropdownElementOnClickLogic, selectedContentRemoveIconOnClickLogic } =
		useSearchAndSelect(
			3,
			"user",
			true,
			postUsersArray,
			addPostUser,
			removePostUser,
			setPostUsersErrorMessage
		);
	useSaveDraft("postUsers", postUsersArray);

	return (
		<AddContentStyle>
			<h3>Tag Users</h3>

			<Message
				errorMessage={postUsersErrorMessage && postUsersErrorMessage.user}
			/>

			<SearchAndSelect
				searchAndSelectType="add-post-user"
				searchAndSelectedContentsArray={postUsersArray}
				searchAndSelectInputPlaceholder="Search for users"
				searchAndSelectInputAPIEndpoint="/search/users"
				dropdownElementOnClickLogic={dropdownElementOnClickLogic}
				selectedContentRemoveIconOnClickLogic={
					selectedContentRemoveIconOnClickLogic
				}
			/>
		</AddContentStyle>
	);
};

export default AddPostUsers;
