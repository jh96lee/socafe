import * as React from "react";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";

import { Loader } from "../../shared";

import { HeartFill, Comment } from "../../../assets";

const ProfilePostsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 20rem);
	grid-auto-rows: 20rem;
	gap: 1rem;
	margin: 2rem auto;
`;

const UserPostStyle = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 1rem;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const UserPostOverlayMetadataStyle = styled.div`
	position: absolute;
	display: none;
`;

const UserPostTotalDataStyle = styled.div`
	display: flex;
	align-items: center;
`;

const ProfilePosts = () => {
	const [posts, setPosts] = React.useState([]);
	const [isPostsLoaded, setIsPostsLoaded] = React.useState(false);

	const { userID } = useParams();

	const fetchUserPosts = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/content/${userID}`,
		});

		console.log(data);

		setPosts(data);

		setIsPostsLoaded(true);
	};

	React.useEffect(() => {
		fetchUserPosts();
	}, []);

	return (
		<ProfilePostsStyle>
			{isPostsLoaded ? (
				<React.Fragment>
					{posts.map((post, idx) => {
						return (
							<UserPostStyle key={`user-post__${idx}`}>
								<img src={post.image_url} alt={`user post thumbnail`} />

								<UserPostOverlayMetadataStyle>
									<UserPostTotalDataStyle>
										<HeartFill />

										<p>{posts.totalLikes}</p>
									</UserPostTotalDataStyle>

									<UserPostTotalDataStyle>
										<Comment />

										<p>{posts.totalComments}</p>
									</UserPostTotalDataStyle>
								</UserPostOverlayMetadataStyle>
							</UserPostStyle>
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</ProfilePostsStyle>
	);
};

export default ProfilePosts;
