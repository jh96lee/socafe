import * as React from "react";
import axios from "axios";

import { IconElement, Loader } from "../../shared";
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
import { PostOverlayStyle } from "../styles/PostOverlayStyle";

import { Remove } from "../../../assets";

const Post = ({ postID, handlePostOnClick }) => {
	const [post, setPost] = React.useState({});
	const [isPostLoaded, setIsPostLoaded] = React.useState(false);

	const fetchPost = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/post/${postID}`,
		});

		if (data) {
			setPost(data);

			setIsPostLoaded(true);
		}
	};

	React.useEffect(() => {
		fetchPost();
	}, []);

	return (
		<PostOverlayStyle>
			{isPostLoaded ? (
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
			) : (
				<Loader />
			)}

			<IconElement
				iconRole="button"
				onClick={handlePostOnClick}
				iconElementStyleObject={{
					elementPosition: "absolute",
					elementTop: "1.2rem",
					elementRight: "1.2rem",
					elementZIndex: "5",
					iconSize: "1.8rem",
					elementPadding: "1.3rem",
					iconColor: "var(--icon-2)",
					iconHoverColor: "#b9c8cf",
				}}
			>
				<Remove />
			</IconElement>
		</PostOverlayStyle>
	);
};

export default Post;
