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

					<UploadImage uploadedImageType="post-image" />
				</AddContentStyle>

				<AddContentStyle>
					<h3>Select Categories</h3>

					<SearchAndSelect
						// REVIEW: use this prop to determine which dropdown element to render and for dropdownMenu component uniqueness
						searchAndSelectType="post-category"
						// REVIEW: array that contains selected values and will be used for data validation
						searchAndSelectedArray={selectedPostCategoriesArray}
						// REVIEW: action that will be fired when SearchAndSelected component's remove icon is clicked
						searchAndSelectedAction={removePostCategory}
						// REVIEW: api endpoint to trigger search feature and provide the onChange event handler to FormInput component
						searchAPIEndpoint={"/search/post-categories"}
						// REVIEW: placeholder
						searchInputPlaceholder={"Search for post categories"}
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Tag Users</h3>

					<SearchAndSelect
						searchAndSelectType="post-user"
						searchAndSelectedArray={taggedPostUsersArray}
						searchAndSelectedAction={removeUserOnPost}
						searchAPIEndpoint={"/search/users"}
						searchInputPlaceholder={"Search for users "}
					/>
				</AddContentStyle>

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
