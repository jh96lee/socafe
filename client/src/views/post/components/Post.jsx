import * as React from "react";
import ReactDom from "react-dom";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { IconElement, Loader, UserMetadata, PostLikes } from "../../shared";
import {
	PostImages,
	PostTaggedUsers,
	PostSelectedCategories,
	PostContents,
	PostComment,
	PostTotalComments,
	PostBookmark,
} from "../../shared/post-elements";
// import PostCommentPopup from "../../shared/post-elements/components/PostCommentPopup";

import {
	fetchPostModal,
	resetPostModal,
} from "../../../redux/post-modal/postModalAction";

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

	const { postModal, isPostModalLoaded } = useSelector(
		(state) => state.postModalReducer
	);
	const { user } = useSelector((state) => state.userReducer);
	const userID = user ? user.id : 0;

	const handlePostOnClick = () => {
		history.goBack();
	};

	React.useEffect(() => {
		dispatch(fetchPostModal(postID, userID));

		return () => {
			dispatch(resetPostModal());
		};
	}, []);

	return ReactDom.createPortal(
		<PostOverlayStyle>
			{isPostModalLoaded ? (
				<PostStyle>
					<PostMainDataStyle>
						<PostImages
							postImagesArray={postModal.images}
							conditionalPostImagesRenderingVariable={isPostModalLoaded}
						/>

						<PostTaggedUsers
							postTaggedUsersArray={postModal.taggedUsers}
							conditionalPostTaggedUsersRenderingVariable={isPostModalLoaded}
						/>
					</PostMainDataStyle>

					<PostHorizontalMetadataStyle>
						<UserMetadata
							userID={postModal.user.user_id}
							avatarURL={postModal.user.avatar_url}
							username={postModal.user.username}
							fullName={postModal.user.full_name}
							avatarSize="4.4rem"
							usernameFontSize="1.4rem"
							fullNameFontSize="1.3rem"
							onClick={null}
							conditionalRenderingVariable={isPostModalLoaded}
						/>

						<PostTotalsMetadataStyle>
							<PostLikes />

							<PostTotalComments
								postTotalComments={postModal.totalComments}
								conditionalPostTotalCommentsRenderingVariable={
									isPostModalLoaded
								}
							/>

							<PostBookmark />
						</PostTotalsMetadataStyle>
					</PostHorizontalMetadataStyle>

					<PostVerticalMetadataStyle>
						<PostSelectedCategories
							selectedPostCategoriesArray={postModal.categories}
							conditionalPostSelectedCategoriesRenderingVariable={
								isPostModalLoaded
							}
						/>

						<PostContents
							postContentsArray={postModal.contents}
							conditionalPostContentsRenderingVariable={isPostModalLoaded}
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
