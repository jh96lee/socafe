import * as React from "react";
import axios from "axios";
import styled from "styled-components";

import { Loader } from "../../shared";
import { UserProfilePost } from "../index";

const UserProfilePostsStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(4, 20rem);
	grid-auto-rows: 19rem;
	gap: 1rem;
	min-width: 100%;
	min-height: 15rem;
`;

const UserProfilePosts = ({ userID }) => {
	const [userProfilePosts, setUserProfilePosts] = React.useState([]);
	const [isUserProfilePostsLoaded, setIsUserProfilePostsLoaded] =
		React.useState(false);

	const fetchUserPosts = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/posts/${userID}`,
		});

		setUserProfilePosts(data);

		setIsUserProfilePostsLoaded(true);
	};

	React.useEffect(() => {
		fetchUserPosts();
	}, []);

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
