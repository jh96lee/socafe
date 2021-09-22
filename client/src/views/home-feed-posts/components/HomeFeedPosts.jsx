import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import HomePost from "./HomeFeedPost";
import { Loader, Button } from "../../shared";

import {
	fetchHomeFeedPosts,
	fetchExtraHomeFeedPosts,
	setHomeFeedPostsPage,
} from "../../../redux/home-feed/home-feed-posts/homeFeedPostsAction";

import { HomeFeedPostsStyle } from "../styles/HomeFeedPostsStyle";

const HomeFeedPosts = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const {
		currentHomeFeedPostsPage,
		isHomeFeedPostsLoaded,
		isExtraHomeFeedPostsLoading,
		homeFeedPosts,
		homeFeedPostsNextAPIEndpoint,
	} = useSelector((state) => state.homeFeedPostsReducer);

	React.useEffect(() => {
		if (user) {
			dispatch(fetchHomeFeedPosts(1));
		}
	}, []);

	React.useEffect(() => {
		if (currentHomeFeedPostsPage > 1) {
			dispatch(fetchExtraHomeFeedPosts(homeFeedPostsNextAPIEndpoint));
		}
	}, [currentHomeFeedPostsPage]);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setHomeFeedPostsPage());
	};

	return (
		<HomeFeedPostsStyle>
			{isHomeFeedPostsLoaded ? (
				<React.Fragment>
					{homeFeedPosts.map((post) => {
						return <HomePost key={`home-post__${post.post_id}`} post={post} />;
					})}

					{homeFeedPostsNextAPIEndpoint === null ||
					homeFeedPosts.length === 0 ? null : (
						<Button
							buttonType="contrast"
							buttonStyleObject={{
								buttonPadding: "1.3rem 2.5rem",
							}}
							onClick={handleLoadMoreButtonOnClick}
						>
							{isExtraHomeFeedPostsLoading ? (
								<Loader
									isLoaderAbsolute={false}
									loaderSize="2.4rem"
									loaderBorderSize="0.4rem"
								/>
							) : (
								"Load More"
							)}
						</Button>
					)}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedPostsStyle>
	);
};

export default HomeFeedPosts;
