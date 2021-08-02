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
	IconElement,
} from "../../shared";
import { MainPostComments } from "../../main-post-comments";
import { MainPostCommentsInput } from "../../main-post-comments-input";
import MainPostActions from "./MainPostActions";

import {
	fetchMainPost,
	resetMainPost,
} from "../../../redux/main-post/mainPostAction";

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

	const {
		isMainPostLoaded,
		mainPostID,
		mainPostOwner,
		mainPostImages,
		mainPostTopics,
		mainPostCaptions,
		mainPostTaggedUsers,
	} = useSelector((state) => state.mainPostReducer);

	React.useEffect(() => {
		dispatch(fetchMainPost(postID, visitorID));

		return () => {
			dispatch(resetMainPost());
		};
	}, [postID, visitorID]);

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
			) : !mainPostID ? (
				<h1 style={{ color: "#fff" }}>Post does not exist</h1>
			) : (
				<React.Fragment>
					{/* REVIEW: 1st child */}
					<PostMainStyle>
						{isMainPostOverlaid && (
							<IconElement
								iconRole="button"
								onClick={handleRemoveIconElementOnClick}
								iconElementStyleObject={{
									elementPosition: "absolute",
									elementTop: "1.5rem",
									elementLeft: "1.5rem",
									elementZIndex: "10",
									elementBackgroundColor: "#0000004a",
									iconSize: "2.5rem",
								}}
							>
								<Remove />
							</IconElement>
						)}

						<PostImages postImagesArray={mainPostImages} />

						<PostTaggedUsers postTaggedUsersArray={mainPostTaggedUsers} />
					</PostMainStyle>

					{/* REVIEW: 2nd child */}
					<UserMetadata
						userID={mainPostOwner.id}
						avatarURL={mainPostOwner.avatar_url}
						username={mainPostOwner.username}
						fullName={mainPostOwner.full_name}
						avatarSize="4.5rem"
						usernameFontSize="1.4rem"
						fullNameFontSize="1.3rem"
						avatarOnClick={null}
					/>

					{/* REVIEW: 3rd child */}
					<MainPostActions />

					{/* REVIEW: 4th child */}
					<MainPostOverflowStyle>
						<TextArea textAreaNodesArray={mainPostCaptions} />

						<PostTopics postTopicsArray={mainPostTopics} />

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
