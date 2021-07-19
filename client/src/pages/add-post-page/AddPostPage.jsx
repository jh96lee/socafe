import * as React from "react";

import { PostPreview } from "../../views/post-preview";
import { AddPostForm } from "../../views/add-post-form";

import { AddContentPageStyle } from "../../styles";

const AddPostPage = () => {
	return (
		<AddContentPageStyle>
			<AddPostForm />

			<PostPreview />
		</AddContentPageStyle>
	);
};

export default AddPostPage;
