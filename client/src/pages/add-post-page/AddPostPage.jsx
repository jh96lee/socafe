import * as React from "react";
import { useSelector } from "react-redux";

import { Loader } from "../../views/shared";
import { PostPreview } from "../../views/post-preview";
import { AddPostForm } from "../../views/add-post-form";

import { AddContentPageStyle } from "../../styles";

const AddPostPage = () => {
	const { isImageUploading, isImageDeleting } = useSelector(
		(state) => state.uploadImageReducer
	);

	return (
		<AddContentPageStyle>
			{isImageDeleting || isImageUploading ? <Loader /> : null}

			<AddPostForm />

			<PostPreview />
		</AddContentPageStyle>
	);
};

export default AddPostPage;
