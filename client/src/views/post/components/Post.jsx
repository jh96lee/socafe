import * as React from "react";
import axios from "axios";

import {
	PostImages,
	PostTaggedUsers,
	PostNumericMetadata,
	PostSelectedCategories,
	PostContents,
	PostComment,
} from "../../shared/post-parts";
import PostCommentPopup from "../../shared/post-parts/components/PostCommentPopup";

import {
	PostStyle,
	PostMetadataStyle,
	PostMainDataStyle,
} from "../../../styles";

const Post = () => {
	const postID = 14;

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
			<PostMainDataStyle>
				<PostImages
					postImagesArray={post.images}
					conditionalPostImagesRenderingVariable={isPostLoaded}
				/>

				<PostTaggedUsers
					postTaggedUsersArray={post.taggedUsers}
					conditionalPostTaggedUsersRenderingVariable={isPostLoaded}
				/>
			</PostMainDataStyle>

			<PostNumericMetadata
				postUser={post.user}
				postTotalLikes={post.totalLikes}
				postTotalComments={post.totalComments}
				conditionalPostUserRenderingVariable={isPostLoaded}
				conditionalPostTotalLikesRenderingVariable={isPostLoaded}
				conditionalPostTotalCommentsRenderingVariable={isPostLoaded}
			/>

			<PostMetadataStyle>
				<PostSelectedCategories
					selectedPostCategoriesArray={post.categories}
					conditionalPostSelectedCategoriesRenderingVariable={isPostLoaded}
				/>

				<PostContents
					postContentsArray={post.contents}
					conditionalPostContentsRenderingVariable={isPostLoaded}
				/>
			</PostMetadataStyle>

			<PostComment />

			<PostCommentPopup />
		</PostStyle>
	);
};

export default Post;
