import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { Button, Loader } from "../../shared";
import AddPostImages from "./AddPostImages";
import AddPostCategories from "./AddPostCategories";
import AddPostUsers from "./AddPostUsers";
import AddPostCaption from "./AddPostCaption";
import AddPostHeader from "./AddPostHeader";

import { uploadPost } from "../../../redux/add-post/post-upload/postUploadAction";

import {
	AddContentFormStyle,
	AddContentsStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";

const AddPostForm = () => {
	// FIX: render out error message
	const { postID, isPostUploading, postUploadSuccessMessage } = useSelector(
		(state) => state.postUploadReducer
	);

	const { uploadedPostImagesArray } = useSelector(
		(state) => state.postImagesReducer
	);

	const { postCategoriesArray } = useSelector(
		(state) => state.postCategoriesReducer
	);

	const { postUsersArray } = useSelector((state) => state.postUsersReducer);

	const { postCaptionNodesArray } = useSelector(
		(state) => state.postCaptionReducer
	);

	const dispatch = useDispatch();

	const history = useHistory();

	React.useEffect(() => {
		if (postID) {
			history.push(`/post/${postID}`);
		}
	}, [postID]);

	return (
		<AddContentFormStyle>
			<AddPostHeader />

			<AddContentsStyle>
				<AddPostImages />

				<AddPostCategories />

				<AddPostUsers />

				<AddPostCaption />
			</AddContentsStyle>

			<AddContentButtonWrapperStyle>
				<Button
					disabled={
						uploadedPostImagesArray.length === 0 ||
						postCategoriesArray.length === 0
					}
					success={postUploadSuccessMessage}
					onClick={() => {
						dispatch(
							uploadPost(
								uploadedPostImagesArray,
								postCategoriesArray,
								postUsersArray,
								postCaptionNodesArray
							)
						);
					}}
				>
					{isPostUploading ? (
						<Loader loaderSize="2rem" loaderBorderSize="0.3rem" />
					) : postUploadSuccessMessage ? (
						postUploadSuccessMessage
					) : (
						"Submit"
					)}
				</Button>
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
