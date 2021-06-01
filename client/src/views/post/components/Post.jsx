import * as React from "react";
import axios from "axios";

import {
	PostImages,
	PostSelectedCategories,
	PostUser,
	PostNumericMetadata,
	PostContents,
	PostTaggedUsers,
} from "../../shared/post-data";

import { PostStyle, PostMetadataStyle } from "../../../styles";

const Post = () => {
	const postID = 13;

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
				conditionalPostImagesRenderingVariable={isPostLoaded}
			/>

			<PostMetadataStyle>
				<PostSelectedCategories
					selectedPostCategoriesArray={post.categories}
					conditionalPostSelectedCategoriesVariable={isPostLoaded}
				/>

				<PostUser
					postUser={post.user}
					conditionalPostUserVariable={isPostLoaded}
				/>

				<PostNumericMetadata
					postTotalLikes={post.totalLikes}
					postTotalComments={post.totalComments}
					conditionalPostNumericMetadataVariable={isPostLoaded}
				/>

				<PostContents
					postContentsArray={post.contents}
					conditionalPostContentsVariable={isPostLoaded}
				/>

				<PostTaggedUsers
					postTaggedUsersArray={post.taggedUsers}
					conditionalPostTaggedUsersVariable={isPostLoaded}
				/>
			</PostMetadataStyle>
		</PostStyle>
	);
};

export default Post;
