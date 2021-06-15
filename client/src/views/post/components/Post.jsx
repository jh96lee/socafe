import * as React from "react";
// FIX
import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

import { IconElement, Loader } from "../../shared";
import {
	PostImages,
	PostTaggedUsers,
	PostSelectedCategories,
	PostContents,
	PostComment,
	PostTotalComments,
	PostBookmark,
} from "../../shared/post-parts";
import { User, Likes } from "../../shared";
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

// REVIEW: within the array of posts are objects and each object has a post_id property and that value is passed to
// REVIEW: Post component as a Prop
const Post = () => {
	const [post, setPost] = React.useState({});
	const [isPostLoaded, setIsPostLoaded] = React.useState(false);

	const { postID } = useParams();
	const history = useHistory();

	const { user } = useSelector((state) => state.userReducer);

	const handlePostOnClick = () => {
		history.goBack();
	};

	const fetchPost = async () => {
		const { data } = await axios({
			method: "GET",
			// REVIEW: if a user does not exist, then send 0 as the userID
			url: `http://localhost:8080/post/${postID}?userID=${user ? user.id : 0}`,
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
							<Likes postID={postID} />

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
					elementTop: "1rem",
					elementRight: "1rem",
					elementZIndex: "5",
					iconSize: "1.8rem",
					elementPadding: "1.3rem",
					elementBackgroundColor: "#000000db",
					elementBoxShadow: "none",
					elementHoverBackgroundColor: "#000",
					iconColor: "#fff",
					iconHoverColor: "#f5f5f5",
				}}
			>
				<Remove />
			</IconElement>
		</PostOverlayStyle>
	);
};

export default Post;
