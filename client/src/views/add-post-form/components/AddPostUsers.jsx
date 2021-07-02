import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import {
	addPostUser,
	removePostUser,
	setPostUsersErrorMessage,
} from "../../../redux/upload-post/post-users/postUsersAction";

import { AddContentStyle } from "../../../styles";

const AddPostUsers = () => {
	const dispatch = useDispatch();

	const { postUsersArray, postUsersErrorMessage } = useSelector(
		(state) => state.postUsersReducer
	);

	const selectedElementOnClickEventHandler = React.useCallback(
		(elementID) => {
			dispatch(removePostUser(elementID));
		},
		[dispatch]
	);

	const dropdownElementOnClickEventHandler = React.useCallback(
		(element) => {
			if (postUsersArray.length >= 3) {
				dispatch(
					setPostUsersErrorMessage({
						category: "You tag up to 3 users",
					})
				);

				return;
			}

			const postCategoryIDArray = postUsersArray.map((category) => category.id);

			if (postCategoryIDArray.includes(element.id)) {
				dispatch(
					setPostUsersErrorMessage({
						category: "User is already tagged",
					})
				);

				return;
			}

			dispatch(addPostUser(element));
		},
		[dispatch, postUsersArray]
	);

	return (
		<AddContentStyle>
			<h3>Tag Users</h3>

			<Message
				errorMessage={postUsersErrorMessage && postUsersErrorMessage.category}
			/>

			<SearchAndSelect
				// REVIEW: this needs to be singular for dropdownElementIdentifier function to work
				searchAndSelectType="add-post-user"
				searchAndSelectedElementsArray={postUsersArray}
				searchAndSelectInputPlaceholder="Search for users to tag on your post"
				searchAndSelectInputAPIEndpoint="/search/users"
				selectedElementOnClickEventHandler={selectedElementOnClickEventHandler}
				dropdownElementOnClickEventHandler={dropdownElementOnClickEventHandler}
			/>
		</AddContentStyle>
	);
};

export default AddPostUsers;
