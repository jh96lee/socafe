import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Button, Loader, IconElement } from "../../shared";
import AddPostImages from "./AddPostImages";
import AddPostCategories from "./AddPostCategories";
import AddPostUsers from "./AddPostUsers";
import AddPostCaption from "./AddPostCaption";
import AddPostHeader from "./AddPostHeader";

import {
	AddContentFormStyle,
	AddContentsStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";

const AddPostForm = () => {
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

	// React.useEffect(() => {
	// 	if (uploadedPostID) {
	// 		history.push(`/post/${uploadedPostID}`);
	// 	}
	// }, [uploadedPostID]);

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
					// disabled={
					// 	uploadedPostImagesArray.length === 0 ||
					// 	selectedPostCategoriesArray.length === 0
					// }
					// success={addPostSuccessMessage}
					// onClick={() => {
					// 	dispatch(
					// 		uploadPost(
					// 			uploadedPostImagesArray,
					// 			selectedPostCategoriesArray,
					// 			taggedPostUsersArray,
					// 			postCaptionNodesArray
					// 		)
					// 	);
					// }}
				>
					{/* {isPostUploading ? (
						<Loader loaderSize="2rem" loaderBorderSize="0.3rem" />
					) : addPostSuccessMessage ? (
						addPostSuccessMessage
					) : (
						"Submit"
					)} */}
					Submit
				</Button>
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
