import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	removePostCategory,
	removeUserOnPost,
	submitPost,
} from "../../../redux/add-post/addPostAction";

import { SearchAndSelect, Message, UploadImage, Caption } from "../../shared";

import {
	AddContentFormStyle,
	AddContentStyle,
	AddContentsWrapperStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";
import { ButtonStyle } from "../../../styles";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const { errorMessage, successMessage } = useSelector(
		(state) => state.uploadImageReducer
	);
	const {
		uploadedPostImagesArray,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		addPostMessage,
	} = useSelector((state) => state.addPostReducer);

	return (
		<AddContentFormStyle>
			<AddContentsWrapperStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					<Message
						successMessage={successMessage && successMessage}
						errorMessage={errorMessage && errorMessage.image}
					/>

					<UploadImage uploadedImageType="post-image" />
				</AddContentStyle>

				<AddContentStyle>
					<h3>Select Categories</h3>

					<Message
						errorMessage={addPostMessage && addPostMessage.postCategory}
					/>

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

					<Message errorMessage={addPostMessage && addPostMessage.postUser} />

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
			</AddContentsWrapperStyle>

			<AddContentButtonWrapperStyle>
				<ButtonStyle
					disabled={uploadedPostImagesArray.length === 0}
					onClick={() => {
						dispatch(
							submitPost(uploadedPostImagesArray, selectedPostCategoriesArray)
						);
					}}
				>
					Submit
				</ButtonStyle>
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
