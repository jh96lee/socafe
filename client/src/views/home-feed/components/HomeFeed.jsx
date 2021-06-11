import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import HomePost from "./HomePost";
import { Loader } from "../../shared";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeed = () => {
	const [posts, setPosts] = React.useState([]);
	const [isPostsLoading, setIsPostsLoading] = React.useState(false);

	const fetchPosts = async () => {
		setIsPostsLoading(true);

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/posts/home",
		});

		if (data) {
			setPosts(data);

			setIsPostsLoading(false);
		}
	};

	React.useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<HomeFeedStyle>
			{isPostsLoading ? (
				<Loader />
			) : (
				posts.map((post, idx) => {
					return <HomePost key={`home-feed-post__${idx}`} post={post} />;
				})
			)}
		</HomeFeedStyle>
	);
};

export default HomeFeed;
