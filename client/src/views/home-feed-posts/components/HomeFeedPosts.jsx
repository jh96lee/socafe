import * as React from "react";
import { useSelector } from "react-redux";

import HomePost from "./HomeFeedPost";
import { Loader } from "../../shared";

import {
	fetchedHomeFeedPosts,
	fetchedExtraHomeFeedPosts,
} from "../../../redux/home-feed/home-feed-posts/homeFeedPostsAction";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeedPosts = () => {
	const { user } = useSelector((state) => state.userReducer);
	const { homeFeedPosts } = useSelector((state) => state.homeFeedPostsReducer);

	const {
		currentPage,
		setCurrentPage,
		nextAPIEndpoint,
		isInitialContentsLoaded,
		isExtraContentsLoading,
		fetchContents,
	} = usePagination(
		"/post/feed",
		5,
		true,
		fetchedHomeFeedPosts,
		fetchedExtraHomeFeedPosts,
		false
	);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

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
		if (homeFeedPosts.length > 0) {
			const token = fetchToken();

			fetchContents(false, "GET", null, {
				Authorization: `Bearer ${token}`,
			});
		}
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

					{nextAPIEndpoint === null || homeFeedPosts.length === 0 ? null : (
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
