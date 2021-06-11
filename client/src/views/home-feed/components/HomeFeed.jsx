import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import HomePost from "./HomePost";

const HomeFeedStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	/* grid-auto-rows: minmax(18rem, 18rem); */
	gap: 2rem;
	margin: 4rem auto;
	justify-items: center;
	width: 75%;
`;

const HomeFeed = () => {
	const [posts, setPosts] = React.useState([]);
	const [isPostsLoading, setIsPostsLoading] = React.useState(false);

	React.useEffect(async () => {
		setIsPostsLoading(true);

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/posts/home",
		});

		if (data) {
			setPosts(data);

			setIsPostsLoading(false);
		}
	}, []);

	return (
		<HomeFeedStyle>
			{posts.map((post, idx) => {
				return <HomePost key={`home-feed-post__${idx}`} post={post} />;
			})}
		</HomeFeedStyle>
	);
};

export default HomeFeed;
