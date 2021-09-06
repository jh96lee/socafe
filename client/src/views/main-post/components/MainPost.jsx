import * as React from "react";
import axios from "axios";
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

import { fetchToken } from "../../../utils/cookie/fetchToken";

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
	const addPostView = async () => {
		const token = fetchToken();

		await axios({
			method: "POST",
			url: `http://localhost:8080/post/view/${postID}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	};

	React.useEffect(() => {
		addPostView();
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
						fullName={mainPost.post_owner.full_name}
						avatarSize="4.5rem"
						usernameFontSize="1.4rem"
						fullNameFontSize="1.3rem"
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
