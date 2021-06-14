import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import HomePost from "./HomePost";
import { Loader } from "../../shared";

import { fetchHomeFeedPosts } from "../../../redux/home-feed/homeFeedAction";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeed = () => {
	const { isHomeFeedPostsLoading, homePosts } = useSelector(
		(state) => state.homeFeedReducer
	);
	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (homePosts.length === 0) {
			dispatch(fetchHomeFeedPosts(userID));
		}
	}, []);

	return (
		<HomeFeedStyle>
			{isHomeFeedPostsLoading ? (
				<Loader />
			) : (
				homePosts.map((post, idx) => {
					return <HomePost key={`home-feed-post__${idx}`} post={post} />;
				})
			)}
		</HomeFeedStyle>
	);
};

export default HomeFeed;
