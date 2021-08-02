import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import HomePost from "./HomeFeedPost";
import { Loader, Button } from "../../shared";

import { fetchHomeFeedPosts } from "../../../redux/home-feed/home-feed-posts/homeFeedPostsAction";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeedPosts = () => {
	const { user } = useSelector((state) => state.userReducer);
	const {
		homeFeedPosts,
		isHomeFeedPostsLoaded,
		isHomeFeedsLoadingMore,
		homeFeedPostsCurrentPage,
		homeFeedPostsPageSize,
	} = useSelector((state) => state.homeFeedPostsReducer);

	const dispatch = useDispatch();

	React.useEffect(() => {
		if (user) {
			dispatch(fetchHomeFeedPosts());
		} else {
			console.log("Login or register CTA");
		}
	}, []);

	return (
		<HomeFeedStyle>
			{isHomeFeedPostsLoaded ? (
				<React.Fragment>
					{homeFeedPosts.map((post) => {
						return <HomePost key={`home-post__${post.post_id}`} post={post} />;
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedStyle>
	);
};

export default HomeFeedPosts;
