import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import HomePost from "./HomeFeedPost";
import { Loader, Button, WrapperMessage } from "../../shared";

import {
	fetchExtraHomeFeedPosts,
	setHomeFeedPostsPage,
} from "../../../redux/home-feed/home-feed-posts/homeFeedPostsAction";

import { HomeFeedPostsStyle } from "../styles/HomeFeedPostsStyle";

import { SadColored } from "../../../assets";

const HomeFeedPosts = () => {
	const dispatch = useDispatch();

	const {
		currentHomeFeedPostsPage,
		isExtraHomeFeedPostsLoading,
		homeFeedPosts,
		homeFeedPostsNextAPIEndpoint,
	} = useSelector((state) => state.homeFeedPostsReducer);

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
			{homeFeedPosts.length === 0 ? (
				<WrapperMessage>
					<SadColored /> You are not following anyone...
				</WrapperMessage>
			) : (
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
			)}
		</HomeFeedPostsStyle>
	);
};

export default HomeFeedPosts;
