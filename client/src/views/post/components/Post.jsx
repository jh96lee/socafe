import * as React from "react";
import axios from "axios";

import { IconElement, Loader } from "../../shared";
import {
	PostImages,
	PostTaggedUsers,
	PostSelectedCategories,
	PostContents,
	PostComment,
	PostTotalLikes,
	PostTotalComments,
	PostBookmark,
} from "../../shared/post-parts";
import { User } from "../../shared";
import PostCommentPopup from "../../shared/post-parts/components/PostCommentPopup";

import {
	PostStyle,
	PostMainDataStyle,
	PostHorizontalMetadataStyle,
	PostVerticalMetadataStyle,
	PostInteractionsStyle,
} from "../../../styles";
import { PostOverlayStyle } from "../styles/PostOverlayStyle";

import { Remove } from "../../../assets";

const Post = ({ postID, handlePostOnClick }) => {
	const [post, setPost] = React.useState({});
	const [isPostLoaded, setIsPostLoaded] = React.useState(false);

	console.log(post);

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

					<PostHorizontalMetadataStyle>
						<User
							userID={post.user.user_id}
							avatarURL={post.user.avatar_url}
							username={post.user.username}
							fullName={post.user.full_name}
							avatarSize="3.7rem"
							usernameFontSize="1.37rem"
							fullNameFontSize="1.27rem"
							onClick={null}
							conditionalRenderingVariable={isPostLoaded}
						/>

						<PostInteractionsStyle>
							<PostTotalLikes
								postTotalLikes={post.totalLikes}
								conditionalPostTotalLikesRenderingVariable={isPostLoaded}
							/>

							<PostTotalComments
								postTotalComments={post.totalComments}
								conditionalPostTotalCommentsRenderingVariable={isPostLoaded}
							/>

							<PostBookmark />
						</PostInteractionsStyle>
					</PostHorizontalMetadataStyle>

					<PostVerticalMetadataStyle>
						<PostSelectedCategories
							selectedPostCategoriesArray={post.categories}
							conditionalPostSelectedCategoriesRenderingVariable={isPostLoaded}
						/>

						<PostContents
							postContentsArray={post.contents}
							conditionalPostContentsRenderingVariable={isPostLoaded}
						/>
					</PostVerticalMetadataStyle>

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
