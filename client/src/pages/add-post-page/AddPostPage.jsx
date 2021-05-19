import * as React from "react";
import { useSelector } from "react-redux";

import { UploadImage, SearchAndSelect, Caption } from "../../views/shared";
import { PostPreview } from "../../views/post-preview";

import {
	removePostCategory,
	removeUserOnPost,
} from "../../redux/add-post/addPostAction";

import {
	AddContentPageStyle,
	AddContentFormStyle,
	AddContentStyle,
} from "./AddPostPageStyle";

const AddPostPage = () => {
	const { selectedPostCategoriesArray, taggedPostUsersArray } = useSelector(
		(state) => state.addPostReducer
	);

	return (
		<AddContentPageStyle>
			<AddContentFormStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					<UploadImage />
				</AddContentStyle>

				<AddContentStyle>
					<h3>Select Categories</h3>

					{/* REVIEW: SearchAndSelected component is specific to SearchAndSelect component */}
					{/* REVIEW: Therefore, SearchAndSelected component has only 1 role to do and that is removing the selected item from the corresponding array */}
					<SearchAndSelect
						searchAndSelectType="post-category"
						searchAndSelectedArray={selectedPostCategoriesArray}
						searchAndSelectedAction={removePostCategory}
						searchAPIEndpoint={"/search/post-categories"}
						searchInputPlaceholder={"Search for post categories"}
						// REVIEW: this tells which DropdownElement to render
						dropdownElementComponentType="category"
						// REVIEW: tells which selected array to use when running the content adding validation logic
						dropdownElementContentType="post-category"
						// REVIEW: this tells which onClickEventHandler needs to be provided
						dropdownElementClickEventType="search-and-select"
						// REVIEW: this tells the action type it needs to trigger when adding/tagging a user while creating a post
						dropdownElementAddContentActionType="ADD_POST_CATEGORY"
						dropdownElementAddContentMessageActionType="SET_ADD_POST_MESSAGE"
					/>
				</AddContentStyle>

				{/* <AddContentStyle>
					<h3>Tag Users</h3>

					<SearchAndSelect
						searchAndSelectType="post-user"
						searchAndSelectedArray={taggedPostUsersArray}
						searchAndSelectedAction={removeUserOnPost}
						searchAPIEndpoint={"/search/users"}
						searchInputPlaceholder={"Search for users"}
						dropdownElementComponentType="user"
						dropdownElementContentType="post-user"
						dropdownElementClickEventType="search-and-select"
						dropdownElementAddContentActionType="ADD_USER_ON_POST"
						dropdownElementAddContentMessageActionType="SET_ADD_POST_MESSAGE"
					/>
				</AddContentStyle> */}

				<AddContentStyle>
					<h3>Caption</h3>

					<Caption captionType={"caption"} />
				</AddContentStyle>
			</AddContentFormStyle>

			<PostPreview />
		</AddContentPageStyle>
	);
};

export default AddPostPage;
