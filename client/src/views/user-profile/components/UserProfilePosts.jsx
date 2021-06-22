import * as React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Loader } from "../../shared";
import { UserProfilePost } from "../index";

import { UserProfilePostsStyle } from "../styles/UserProfilePostsStyle";

const UserProfilePosts = () => {
	const [userProfilePosts, setUserProfilePosts] = React.useState([]);
	const [isUserProfilePostsLoaded, setIsUserProfilePostsLoaded] =
		React.useState(false);

	// REVIEW: profile owner
	const leaderID = useParams().userID;

	const fetchUserPosts = async () => {
		setIsUserProfilePostsLoaded(false);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/posts/${leaderID}`,
		});

		setUserProfilePosts(data);

		setIsUserProfilePostsLoaded(true);
	};

	React.useEffect(() => {
		fetchUserPosts();
	}, [leaderID]);

	return (
		<UserProfilePostsStyle>
			{isUserProfilePostsLoaded ? (
				<React.Fragment>
					{userProfilePosts.map((post, idx) => {
						return (
							<UserProfilePost key={`user-profile-post__${idx}`} post={post} />
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</UserProfilePostsStyle>
	);
};

export default UserProfilePosts;
