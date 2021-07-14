import * as React from "react";

import { PostPreview } from "../../views/post-preview";
import { AddPostForm } from "../../views/add-post-form";

import { AddPostPageStyle } from "./AddPostPageStyle";

const AddPostPage = () => {
	return (
		<AddPostPageStyle>
			<AddPostForm />

			<PostPreview />
		</AddPostPageStyle>
	);
};

export default AddPostPage;
