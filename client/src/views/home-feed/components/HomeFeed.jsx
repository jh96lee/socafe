import * as React from "react";
import axios from "axios";

import HomePost from "./HomePost";
import { Loader } from "../../shared";

import { fetchToken } from "../../../utils/cookie";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeed = () => {
	const [posts, setPosts] = React.useState([]);
	const [isPostsLoaded, setIsPostsLoaded] = React.useState(false);

	const token = fetchToken();

	const fetchPosts = async () => {
		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/posts/home",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (data) {
			setPosts(data);

			setIsPostsLoaded(true);
		}
	};

	React.useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<HomeFeedStyle>
			{isPostsLoaded ? (
				posts.map((post, idx) => {
					return <HomePost key={`home-feed-post__${idx}`} post={post} />;
				})
			) : (
				<Loader />
			)}
		</HomeFeedStyle>
	);
};

export default HomeFeed;
