import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { Button, Loader } from "../../shared";
import AddPostImages from "./AddPostImages";
import AddPostCategories from "./AddPostCategories";
import AddPostUsers from "./AddPostUsers";
import AddPostCaption from "./AddPostCaption";

import {
	AddContentFormStyle,
	AddContentsWrapperStyle,
	AddContentButtonWrapperStyle,
} from "../../../styles";

const AddPostForm = () => {
	// React.useEffect(() => {
	// 	if (uploadedPostID) {
	// 		history.push(`/post/${uploadedPostID}`);
	// 	}
	// }, [uploadedPostID]);

	return (
		<AddContentFormStyle>
			<AddContentsWrapperStyle>
				<AddPostImages />

				<AddPostCategories />

				<AddPostUsers />

				<AddPostCaption />
			</AddContentsWrapperStyle>

			<AddContentButtonWrapperStyle>
				{/* <Button
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
				</Button> */}
			</AddContentButtonWrapperStyle>
		</AddContentFormStyle>
	);
};

export default AddPostForm;
