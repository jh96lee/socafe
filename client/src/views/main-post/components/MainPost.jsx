import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";

import {
	Loader,
	PostImages,
	PostTaggedUsers,
	PostTopics,
	UserMetadata,
	TextArea,
} from "../../shared";
import { MainPostComments } from "../../main-post-comments";
import { MainPostCommentsInput } from "../../main-post-comments-input";
import MainPostActions from "./MainPostActions";

import { fetchMainPost } from "../../../redux/main-post/mainPostAction";

import { MainPostStyle } from "../styles/MainPostStyle";
import { MainPostOverflowStyle } from "../styles/MainPostOverflowStyle";
import { PostMainStyle } from "../../../styles";

const MainPost = () => {
	const dispatch = useDispatch();

	const { postID } = useParams();

	const { user } = useSelector((state) => state.userReducer);
	const visitorID = user ? user.id : 0;

	const mainPostLocation = useLocation();
	const isMainPostOverlaid =
		mainPostLocation.state && mainPostLocation.state.overlaidComponentLocation
			? true
			: false;

	const { isMainPostLoaded, mainPost } = useSelector(
		(state) => state.mainPostReducer
	);

	React.useEffect(() => {
		dispatch(fetchMainPost(postID, visitorID));
	}, [postID, visitorID]);

	const {
		post_id,
		post_owner,
		post_images,
		post_topics,
		post_captions,
		post_tagged_users,
		post_total_likes,
		post_total_comments,
		post_is_liked,
		post_is_bookmarked,
	} = mainPost;

	return (
		<MainPostStyle
			isMainPostOverlaid={isMainPostOverlaid}
			postSingleColumnBreakingPoint="1150px"
		>
			{!isMainPostLoaded ? (
				<Loader />
			) : !mainPost.post_id ? (
				<h1 style={{ color: "#fff" }}>Post does not exist</h1>
			) : (
				<React.Fragment>
					{/* REVIEW: 1st child */}
					<PostMainStyle>
						<PostImages postImagesArray={post_images} />

						<PostTaggedUsers postTaggedUsersArray={post_tagged_users} />
					</PostMainStyle>

					{/* REVIEW: 2nd child */}
					<UserMetadata
						userID={post_owner.id}
						avatarURL={post_owner.avatar_url}
						username={post_owner.username}
						fullName={post_owner.full_name}
						avatarSize="4.5rem"
						usernameFontSize="1.4rem"
						fullNameFontSize="1.3rem"
						avatarOnClick={null}
					/>

					{/* REVIEW: 3rd child */}
					<MainPostActions
						isLikedProp={post_is_liked}
						totalLikesProp={post_total_likes}
						totalPostCommentsProp={post_total_comments}
						isBookmarkedProp={post_is_bookmarked}
					/>

					{/* REVIEW: 4th child */}
					<MainPostOverflowStyle>
						<TextArea textAreaNodesArray={post_captions} />

						<PostTopics postTopicsArray={post_topics} />

						<MainPostComments />
					</MainPostOverflowStyle>

					{/* REVIEW: 5th child */}
					<MainPostCommentsInput />
				</React.Fragment>
			)}
		</MainPostStyle>
	);
};

export default MainPost;
