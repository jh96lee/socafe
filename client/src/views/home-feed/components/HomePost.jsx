import * as React from "react";
// FIX
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

import { User, Likes, Loader } from "../../shared";
import HomePostImages from "./HomePostImages";
import HomePostContent from "./HomePostContent";
import HomePostBookmark from "./HomePostBookmark";
import HomePostComment from "./HomePostComment";

import { HomePostStyle } from "../styles/HomePostStyle";
import { HomePostHeaderStyle } from "../styles/HomePostHeaderStyle";
import { HomePostFooterStyle } from "../styles/HomePostFooterStyle";

const HomePost = ({ post }) => {
	const [postLikesData, setPostLikesData] = React.useState(null);
	const [isPostLikesDataLoaded, setIsPostLikesDataLoadedt] =
		React.useState(false);

	// TODO
	const { user: userReduxState } = useSelector((state) => state.userReducer);

	const { post_id, user, images, content, totalComments } = post;

	const fetchPostLikes = async () => {
		console.log("Fetching post likes data");

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/likes/${post_id}?userID=${
				userReduxState ? userReduxState.id : 0
			}`,
		});

		setPostLikesData(data);

		setIsPostLikesDataLoadedt(true);
	};

	React.useEffect(() => {
		fetchPostLikes();
	}, []);

	const history = useHistory();

	const handlePostOnClick = () => {
		history.push(`/post/${post_id}`);
	};

	return (
		<HomePostStyle>
			<HomePostHeaderStyle>
				<User
					userID={user.user_id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="3.5rem"
					usernameFontSize="1.3rem"
					fullNameFontSize="1.2rem"
					onClick={() => {
						// REVIEW: move to story
					}}
					conditionalRenderingVariable={true}
				/>

				<HomePostBookmark />
			</HomePostHeaderStyle>

			{/* REVIEW: Post Content */}
			<HomePostContent contentObject={content} />

			<HomePostImages postImagesArray={images} onClick={handlePostOnClick} />

			<HomePostFooterStyle>
				{/* FIX */}
				{isPostLikesDataLoaded ? (
					<Likes postLikesData={postLikesData} />
				) : (
					<Loader />
				)}

				<HomePostComment totalComments={totalComments} />
			</HomePostFooterStyle>
		</HomePostStyle>
	);
};

export default HomePost;
