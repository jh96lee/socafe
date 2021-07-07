import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import HomePost from "./HomePost";
import { Loader, Button } from "../../shared";

import { fetchHomeFeedPosts } from "../../../redux/home-feed/homeFeedAction";

import { HomeFeedStyle } from "../styles/HomeFeedStyle";

const HomeFeed = () => {
	const { user } = useSelector((state) => state.userReducer);
	const { isHomeFeedPostsLoading, isExtraHomeFeedPostsLoading, homePosts } =
		useSelector((state) => state.homeFeedReducer);

	const dispatch = useDispatch();

	const userID = user ? user.id : 0;

	React.useEffect(() => {
		dispatch(fetchHomeFeedPosts(userID, "initial"));
	}, []);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(fetchHomeFeedPosts(userID, "extra"));
	};

	return (
		<HomeFeedStyle>
			{isHomeFeedPostsLoading ? (
				<Loader />
			) : (
				<React.Fragment>
					{homePosts.map((post, idx) => {
						return <HomePost key={`home-feed-post__${idx}`} post={post} />;
					})}

					<Button
						onClick={handleLoadMoreButtonOnClick}
						buttonStyleObject={{
							buttonPosition: "relative",
							buttonFontSize: "1.37rem",
							buttonBackgroundColor: "transparent",
							buttonColor: "var(--text-1)",
							buttonHoverBackgroundColor: "var(--bg-hover-1)",
							buttonBoxShadow: "0 0 0 1.6px var(--text-1)",
							buttonWidth: "13.5rem",
							buttonMinHeight: "4.5rem",
							buttonPadding: "1rem 0",
							buttonMargin: "auto",
						}}
					>
						{isExtraHomeFeedPostsLoading ? (
							<Loader loaderSize="2.4rem" loaderBorderSize="0.3rem" />
						) : (
							"Load More"
						)}
					</Button>
				</React.Fragment>
			)}
		</HomeFeedStyle>
	);
};

export default HomeFeed;
