import * as React from "react";
import ReactDom from "react-dom";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IconElement, UserMetadata, PostLikes, Loader } from "../../shared";
import {
	PostImages,
	PostTaggedUsers,
	PostSelectedTopics,
	PostContents,
	PostComment,
	PostTotalComments,
	PostBookmark,
} from "../../shared/post-elements";
// import PostCommentPopup from "../../shared/post-elements/components/PostCommentPopup";

import { fetchPost, resetPost } from "../../../redux/post/postAction";

import {
	PostStyle,
	PostMainDataStyle,
	PostHorizontalMetadataStyle,
	PostVerticalMetadataStyle,
	PostTotalsMetadataStyle,
} from "../../../styles";
import { PostOverlayStyle } from "../styles/PostOverlayStyle";

import { Remove } from "../../../assets";

// REVIEW: within the array of posts are objects and each object has a post_id property and that value is passed to
// REVIEW: Post component as a Prop
const Post = () => {
	const dispatch = useDispatch();

	const { postID } = useParams();

	const history = useHistory();

	const { post, isPostLoaded } = useSelector((state) => state.postReducer);
	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const handlePostOnClick = () => {
		history.goBack();
	};

	React.useEffect(() => {
		dispatch(fetchPost(postID, userID));

		return () => {
			dispatch(resetPost());
		};
	}, []);

	return ReactDom.createPortal(
		<PostOverlayStyle>
			{isPostLoaded ? (
				<PostStyle>
					<PostMainDataStyle>
						<PostImages
							postImagesArray={post.images}
							conditionalRenderingVariable={isPostLoaded}
						/>

						<PostTaggedUsers
							postTaggedUsersArray={post.taggedUsers}
							conditionalRenderingVariable={isPostLoaded}
						/>
					</PostMainDataStyle>

					<PostHorizontalMetadataStyle>
						<UserMetadata
							userID={post.user.user_id}
							avatarURL={post.user.avatar_url}
							username={post.user.username}
							fullName={post.user.full_name}
							avatarSize="4.4rem"
							usernameFontSize="1.4rem"
							fullNameFontSize="1.3rem"
							onClick={null}
							conditionalRenderingVariable={isPostLoaded}
						/>

						<PostTotalsMetadataStyle>
							<PostLikes />

							<PostTotalComments
								postTotalComments={post.totalComments}
								conditionalRenderingVariable={isPostLoaded}
							/>

							<PostBookmark />
						</PostTotalsMetadataStyle>
					</PostHorizontalMetadataStyle>

					<PostVerticalMetadataStyle>
						<PostSelectedTopics
							selectedPostCategoriesArray={post.categories}
							conditionalRenderingVariable={isPostLoaded}
						/>

						<PostContents
							postContentsArray={post.contents}
							conditionalRenderingVariable={isPostLoaded}
						/>
					</PostVerticalMetadataStyle>

					<PostComment />

					{/* <PostCommentPopup /> */}
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
		</PostOverlayStyle>,
		document.getElementById("post")
	);
};

export default Post;
