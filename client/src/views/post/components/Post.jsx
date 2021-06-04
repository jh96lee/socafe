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
import PostComment from "./PostComment";

import { PostStyle } from "../../../styles";

import styled from "styled-components";

const PostMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PostMetadataWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	gap: 1.5rem;
	overflow: scroll;
`;

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
			<PostImages
				postImagesArray={post.images}
				conditionalPostImagesRenderingVariable={isPostLoaded}
			/>

			<PostTaggedUsers
				postTaggedUsersArray={post.taggedUsers}
				conditionalPostTaggedUsersVariable={isPostLoaded}
			/>

			<PostMetadataStyle>
				<PostMetadataWrapperStyle>
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
				</PostMetadataWrapperStyle>

				<PostComment />
			</PostMetadataStyle>
		</PostStyle>
	);
};

export default Post;
