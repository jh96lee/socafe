import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useHistory } from "react-router-dom";

import {
	Loader,
	PostImages,
	PostTaggedUsers,
	PostTopics,
	UserMetadata,
	TextArea,
	Icon,
} from "../../shared";
import MainPostActions from "./MainPostActions";
import { PostComments } from "../../post-comments";
import { PostCommentInput } from "../../post-comment-input";

import {
	fetchMainPost,
	resetMainPost,
} from "../../../redux/main-post/mainPostAction";

import { addPostViewRequest } from "../../../utils";

import { MainPostStyle } from "../styles/MainPostStyle";
import { MainPostOverflowStyle } from "../styles/MainPostOverflowStyle";
import { PostMainStyle } from "../../../styles";

import { Remove } from "../../../assets";

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

	const history = useHistory();

	const { isMainPostLoaded, mainPost, mainPostErrorMessage } = useSelector(
		(state) => state.mainPostReducer
	);

	React.useEffect(() => {
		dispatch(fetchMainPost(postID, visitorID));

		return () => {
			dispatch(resetMainPost());
		};
	}, [postID, visitorID]);

	// TODO
	React.useEffect(() => {
		addPostViewRequest();
	}, []);
	// TODO

	const handleRemoveIconElementOnClick = () => {
		history.goBack();
	};

	return (
		<MainPostStyle
			isMainPostOverlaid={isMainPostOverlaid}
			postSingleColumnBreakingPoint="1150px"
		>
			{!isMainPostLoaded ? (
				<Loader />
			) : mainPostErrorMessage ? (
				<h1 style={{ color: "#fff" }}>Post does not exist</h1>
			) : (
				<React.Fragment>
					{/* REVIEW: 1st child */}
					<PostMainStyle>
						{isMainPostOverlaid && (
							<Icon
								iconRole="button"
								iconType="overlay"
								iconOnClick={handleRemoveIconElementOnClick}
								iconStyleObject={{
									iconPosition: "absolute",
									iconTop: "1.5rem",
									iconLeft: "1.5rem",
									iconZIndex: "10",
									iconSize: "2.5rem",
								}}
							>
								<Remove />
							</Icon>
						)}

						<PostImages postImagesArray={mainPost.post_images} />

						<PostTaggedUsers
							postTaggedUsersArray={mainPost.post_tagged_users}
						/>
					</PostMainStyle>

					{/* REVIEW: 2nd child */}
					<UserMetadata
						userID={mainPost.post_owner.id}
						avatarURL={mainPost.post_owner.avatar_url}
						username={mainPost.post_owner.username}
						text={mainPost.post_owner.username}
						subText={mainPost.post_owner.full_name}
						avatarSize="4.5rem"
						avatarOnClick={null}
					/>

					{/* REVIEW: 3rd child */}
					<MainPostActions />

					{/* REVIEW: 4th child */}
					<MainPostOverflowStyle>
						<TextArea
							textAreaNodesArray={mainPost.post_captions}
							charactersLimit={350}
						/>

						<PostTopics postTopicsArray={mainPost.post_topics} />

						<PostComments />
					</MainPostOverflowStyle>

					{/* REVIEW: 5th child */}
					<PostCommentInput />
				</React.Fragment>
			)}
		</MainPostStyle>
	);
};

export default MainPost;
