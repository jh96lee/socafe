import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { submitPost } from "../../../redux/add-post/addPostAction";

import {
	SearchAndSelect,
	Message,
	UploadImage,
	Caption,
	Button,
} from "../../shared";

import {
	AddContentFormStyle,
	AddContentStyle,
	AddContentsWrapperStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const { uploadImageErrorMessage, uploadImageSuccessMessage } = useSelector(
		(state) => state.uploadImageReducer
	);
	const {
		postID,
		uploadedPostImagesArray,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		postCaptionNodesArray,
		addPostErrorMessage,
		addPostSuccessMessage,
	} = useSelector((state) => state.addPostReducer);

	React.useEffect(() => {
		if (postID) {
			history.push(`/post/${postID}`);
		}
	}, [postID]);

	return (
		<AddContentFormStyle>
			<AddContentsWrapperStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					<Message
						successMessage={
							uploadImageSuccessMessage && uploadImageSuccessMessage
						}
						errorMessage={
							uploadImageErrorMessage && uploadImageErrorMessage.image
						}
					/>

					<UploadImage uploadedImageType="post-image" />
				</AddContentStyle>

				<AddContentStyle>
					<h3>Select Categories</h3>

					<Message
						errorMessage={
							addPostErrorMessage && addPostErrorMessage.postCategory
						}
					/>

					<SearchAndSelect
						// REVIEW: provide dropdown trigger ID
						// REVIEW: figure out action type when DropdownElement get clicked
						searchAndSelectType="post-category"
						// REVIEW: if the role is to search, then the search api endpoint needs to be provided
						searchAndSelectAPIEndpoint="/search/post-categories"
						// REVIEW: array that contains selected values and will be used for data validation
						searchAndSelectedArray={selectedPostCategoriesArray}
						// REVIEW: placeholder
						searchAndSelectPlaceholder="Search for post categories"
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Tag Users</h3>

					<Message
						errorMessage={addPostErrorMessage && addPostErrorMessage.postUser}
					/>

					<SearchAndSelect
						searchAndSelectType="post-user"
						searchAndSelectAPIEndpoint="/search/users"
						searchAndSelectedArray={taggedPostUsersArray}
						searchAndSelectPlaceholder="Search for users "
					/>
				</AddContentStyle>

				<AddContentStyle>
					<h3>Caption</h3>

					<Caption captionType={"caption"} />
				</AddContentStyle>
			</AddContentsWrapperStyle>

			<AddContentButtonWrapperStyle>
				<Button
					disabled={
						uploadedPostImagesArray.length === 0 ||
						selectedPostCategoriesArray.length === 0
					}
					success={addPostSuccessMessage}
					onClick={() => {
						dispatch(
							submitPost(
								uploadedPostImagesArray,
								selectedPostCategoriesArray,
								taggedPostUsersArray,
								postCaptionNodesArray
							)
						);
					}}
				>
					{addPostSuccessMessage ? addPostSuccessMessage : "Submit"}
				</Button>
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
