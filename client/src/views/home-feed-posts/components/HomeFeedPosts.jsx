import * as React from "react";
import { useSelector } from "react-redux";

import HomePost from "./HomeFeedPost";
import { Loader } from "../../shared";

import {
	fetchedHomeFeedPosts,
	fetchedExtraHomeFeedPosts,
	setHomeFeedPostsNextAPIEndpoint,
} from "../../../redux/home-feed/home-feed-posts/homeFeedPostsAction";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeedPosts = () => {
	const { user } = useSelector((state) => state.userReducer);
	const { homeFeedPosts, homeFeedPostsNextAPIEndpoint } = useSelector(
		(state) => state.homeFeedPostsReducer
	);

	const {
		currentPage,
		setCurrentPage,
		isInitialContentsLoaded,
		isExtraContentsLoading,
		fetchContents,
	} = usePagination(
		"/post/feed",
		1,
		false,
		true,
		fetchedHomeFeedPosts,
		fetchedExtraHomeFeedPosts,
		setHomeFeedPostsNextAPIEndpoint,
		homeFeedPostsNextAPIEndpoint
	);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (user) {
			const token = fetchToken();

			fetchContents(true, "GET", null, {
				Authorization: `Bearer ${token}`,
			});
		} else {
			console.log("Login or register CTA");
		}
	}, []);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (homeFeedPosts.length > 0) {
				const token = fetchToken();

				fetchContents(false, "GET", null, {
					Authorization: `Bearer ${token}`,
				});
			}
		}

		afterInitialMount.current = true;
	}, [currentPage]);

	return (
		<HomeFeedStyle>
			{!user ? (
				<h1 style={{ color: "#fff" }}>LOGIN OR REGISTER PLEASE</h1>
			) : isInitialContentsLoaded ? (
				<React.Fragment>
					{homeFeedPosts.map((post) => {
						return <HomePost key={`home-post__${post.post_id}`} post={post} />;
					})}

					{homeFeedPostsNextAPIEndpoint === null ||
					homeFeedPosts.length === 0 ? null : (
						<button onClick={handleLoadMoreButtonOnClick}>
							{isExtraContentsLoading ? (
								<Loader
									isLoaderAbsolute={false}
									loaderSize="2.4rem"
									loaderBorderSize="0.4rem"
								/>
							) : (
								"Load More"
							)}
						</button>
					)}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedStyle>
	);
};

export default HomeFeedPosts;
