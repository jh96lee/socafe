import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import {
	SearchAndSelect,
	Message,
	UploadImage,
	Caption,
	Button,
	Loader,
} from "../shared";

import {
	addPostImage,
	removePostImage,
	setAddPostSuccessMessage,
	setAddPostErrorMessage,
	addPostCategory,
	addUserOnPost,
	removePostCategory,
	removeUserOnPost,
	uploadPost,
} from "../../redux/add-post/addPostAction";
import {
	uploadPostImage,
	deletePostImage,
	setPostImageSuccessMessage,
	setPostImageErrorMessage,
} from "../../redux/upload-post/post-image/postImageAction";

import {
	AddContentFormStyle,
	AddContentStyle,
	AddContentsWrapperStyle,
	AddContentButtonWrapperStyle,
} from "../../styles";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const history = useHistory();

	const {
		isPostUploading,
		uploadedPostID,
		selectedPostCategoriesArray,
		taggedPostUsersArray,
		postCaptionNodesArray,
		addPostSuccessMessage,
		addPostErrorMessage,
	} = useSelector((state) => state.addPostReducer);

	const {
		isPostImageUploading,
		isPostImageDeleting,
		uploadedPostImagesArray,
		postImageSuccessMessage,
		postImageErrorMessage,
	} = useSelector((state) => state.postImageReducer);

	React.useEffect(() => {
		if (uploadedPostID) {
			history.push(`/post/${uploadedPostID}`);
		}
	}, [uploadedPostID]);

	return (
		<AddContentFormStyle>
			<AddContentsWrapperStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					<Message
						successMessage={postImageSuccessMessage && postImageSuccessMessage}
						errorMessage={postImageErrorMessage && postImageErrorMessage.image}
					/>

					<UploadImage
						uploadedImagesArray={uploadedPostImagesArray}
						uploadImageAction={uploadPostImage}
						deleteImageAction={deletePostImage}
						contentAdditionErrorMessageAction={setPostImageErrorMessage}
						isImageUploading={isPostImageUploading}
						isImageDeleting={isPostImageDeleting}
					/>
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
						searchAndSelectAPIEndpoint="/search/post-categories"
						// REVIEW: array that contains selected values and will be used for data validation
						searchAndSelectedArray={selectedPostCategoriesArray}
						searchAndSelectPlaceholder="Search for post categories"
						addContentActionCreator={addPostCategory}
						removeContentActionCreator={removePostCategory}
						setErrorMessageActionCreator={setAddPostErrorMessage}
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
						searchAndSelectPlaceholder="Search for users"
						addContentActionCreator={addUserOnPost}
						removeContentActionCreator={removeUserOnPost}
						setErrorMessageActionCreator={setAddPostErrorMessage}
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
							uploadPost(
								uploadedPostImagesArray,
								selectedPostCategoriesArray,
								taggedPostUsersArray,
								postCaptionNodesArray
							)
						);
					}}
				>
					{isPostUploading ? (
						<Loader loaderSize="2rem" loaderBorderSize="0.3rem" />
					) : addPostSuccessMessage ? (
						addPostSuccessMessage
					) : (
						"Submit"
					)}
				</Button>
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
