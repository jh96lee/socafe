import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import UserProfilePost from "./UserProfilePost";

import { UserProfilePostsStyle } from "../styles/UserProfilePostsStyle";

const UserProfilePosts = ({ profilePostsEndpoint }) => {
	const [profilePosts, setProfilePosts] = React.useState([]);
	const [isProfilePostsLoaded, setIsProfilePostsLoaded] = React.useState(false);

	const fetchUserPosts = async () => {
		setIsProfilePostsLoaded(false);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080${profilePostsEndpoint}`,
		});

		setProfilePosts(data);

		setIsProfilePostsLoaded(true);
	};

	React.useEffect(() => {
		fetchUserPosts(profilePostsEndpoint);
	}, [profilePostsEndpoint]);

	return (
		<UserProfilePostsStyle>
			{!isProfilePostsLoaded ? (
				<Loader />
			) : profilePosts.error ? null : (
				<React.Fragment>
					{profilePosts.map((post) => {
						return <UserProfilePost key={post.post_id} post={post} />;
					})}
				</React.Fragment>
			)}
		</UserProfilePostsStyle>
	);
};

export default UserProfilePosts;
