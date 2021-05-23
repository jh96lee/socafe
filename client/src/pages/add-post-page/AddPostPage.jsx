import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
	UploadImage,
	SearchAndSelect,
	Caption,
	Message,
} from "../../views/shared";
import { PostPreview } from "../../views/post-preview";

import {
	removePostCategory,
	removeUserOnPost,
	submitPost,
} from "../../redux/add-post/addPostAction";

import {
	AddContentPageStyle,
	AddContentFormStyle,
	AddContentStyle,
} from "./AddPostPageStyle";
import { ButtonStyle } from "../../styles";

import styled from "styled-components";

const AddPostPageButtonStyle = styled(ButtonStyle)`
	background-color: #4f83d1;
	width: 100%;
	color: #fff;
`;

const AddPostPage = () => {
	const dispatch = useDispatch();

	const { uploadImageMessage } = useSelector(
		(state) => state.uploadImageReducer
	);
	const {
		uploadedPostImagesArray,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		addPostMessage,
	} = useSelector((state) => state.addPostReducer);

	return (
		<AddContentPageStyle>
			<AddContentFormStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					<Message
						successMessage={uploadImageMessage && uploadImageMessage.success}
						errorMessage={uploadImageMessage && uploadImageMessage.error}
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

				<AddPostPageButtonStyle
					onClick={() => {
						dispatch(
							submitPost(uploadedPostImagesArray, selectedPostCategoriesArray)
						);
					}}
				>
					Submit
				</AddPostPageButtonStyle>
			</AddContentFormStyle>

			<PostPreview />
		</AddContentPageStyle>
	);
};

export default AddPostPage;
