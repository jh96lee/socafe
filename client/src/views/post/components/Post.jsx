import * as React from "react";
import axios from "axios";

import {
	PostImages,
	PostNumericMetadata,
	PostSelectedCategories,
	PostContents,
	PostComment,
} from "../../shared/post-parts";

import { PostStyle } from "../styles/PostStyle";
import { PostMetadataStyle } from "../styles/PostMetadataStyle";

const Post = () => {
	const postID = 12;

	const [post, setPost] = React.useState({});
	const [isPostLoaded, setIsPostLoaded] = React.useState(false);

	React.useEffect(async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/post/${postID}`,
		});

		if (data) {
			setPost(data);

			setIsPostLoaded(true);
		}
	}, [postID]);

	return (
		<PostStyle>
			<PostImages
				postImagesArray={post.images}
				conditionalPostImagesVariable={isPostLoaded}
				postTaggedUsersArray={post.taggedUsers}
				conditionalPostTaggedUsersVariable={isPostLoaded}
			/>

			<PostNumericMetadata
				postUser={post.user}
				postTotalLikes={post.totalLikes}
				postTotalComments={post.totalComments}
				conditionalRenderVariable={isPostLoaded}
			/>

			<PostMetadataStyle>
				<PostSelectedCategories
					selectedPostCategoriesArray={post.categories}
					conditionalPostSelectedCategoriesVariable={isPostLoaded}
				/>

				<PostContents
					postContentsArray={post.contents}
					conditionalPostContentsVariable={isPostLoaded}
				/>
			</PostMetadataStyle>

			<PostComment />
		</PostStyle>
	);
};

export default Post;
