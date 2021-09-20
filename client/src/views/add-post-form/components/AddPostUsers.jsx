import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import { usePaginationReact, useSaveDraft } from "../../../hooks";

import {
	addPostUser,
	removePostUser,
	setPostUsersErrorMessage,
} from "../../../redux/add-post/post-users/postUsersAction";

import { AddContentStyle } from "../../../styles";

const AddPostUsers = () => {
	const [searchInput, setSearchInput] = React.useState("");

	const dispatch = useDispatch();

	const { postUsersArray, postUsersErrorMessage } = useSelector(
		(state) => state.postUsersReducer
	);

	const {
		currentPage,
		contents,
		fetchContents,
		nextAPIEndpoint,
		handleLoadMoreButtonOnClick,
	} = usePaginationReact("/search/users", 2, false);

	useSaveDraft("postUsers", postUsersArray);

	const handleFormInputOnChange = (e) => {
		setSearchInput(e.target.value);

		fetchContents(true, "POST", { searchInput: e.target.value });
	};

	const dropdownElementsArray = contents.map((content) => {
		return {
			image: content.avatar_url,
			text: content.username,
			subText: content.full_name,
			onClickEventHandler: () => {
				if (postUsersArray.length === 3) {
					dispatch(
						setPostUsersErrorMessage({
							user: "You can select up to 3 topics",
						})
					);
				} else if (postUsersArray.find((topic) => topic.id === content.id)) {
					dispatch(
						setPostUsersErrorMessage({
							user: "Duplicate selections are not allowed",
						})
					);
				} else {
					dispatch(addPostUser(content));
				}
			},
		};
	});

	React.useEffect(() => {
		if (currentPage > 1) {
			fetchContents(false, "POST", { searchInput });
		}
	}, [currentPage]);

	return (
		<AddContentStyle>
			<h3>Tag Users</h3>

			<Message
				errorMessage={postUsersErrorMessage && postUsersErrorMessage.user}
			/>

			<SearchAndSelect
				contentType="user"
				handleFormInputOnChange={handleFormInputOnChange}
				handleLoadMoreButtonOnClick={handleLoadMoreButtonOnClick}
				nextAPIEndpoint={nextAPIEndpoint}
				searchAndSelectDropdownElementsArray={dropdownElementsArray}
				searchInput={searchInput}
				selectedContentsArray={postUsersArray}
				selectedContentKey="username"
				removeContent={(id) => dispatch(removePostUser(id))}
			/>
		</AddContentStyle>
	);
};

export default AddPostUsers;
