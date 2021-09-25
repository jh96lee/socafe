import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { HomeFeedPosts } from "../../views/home-feed-posts";
import { HomeFeedStoryUsers } from "../../views/home-feed-story-users";
import { HomeFeedNotifications } from "../../views/home-feed-notifications";
import { HomeFeedUserSuggestions } from "../../views/home-feed-user-suggestions";
import { Loader } from "../../views/shared";

import { fetchHomeFeedStories } from "../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";
import {
	fetchHomeFeedPosts,
	resetHomeFeedPosts,
} from "../../redux/home-feed/home-feed-posts/homeFeedPostsAction";
import { fetchHomeFeedNotifications } from "../../redux/notifications/home-feed-notifications/homeFeedNotificationsAction";
import { fetchHomeFeedUserSuggestions } from "../../redux/home-feed/home-feed-user-suggestions/homeFeedUserSuggestionsAction";

import {
	HomePageStyle,
	HomeFeedMainsStyle,
	HomeFeedSubSectionsStyle,
} from "./HomePageStyle";

const HomePage = () => {
	const dispatch = useDispatch();

	const { isHomeFeedStoriesLoaded } = useSelector(
		(state) => state.homeFeedStoriesReducer
	);

	const { isHomeFeedPostsLoaded } = useSelector(
		(state) => state.homeFeedPostsReducer
	);

	const { isHomeFeedNotificationsLoaded } = useSelector(
		(state) => state.homeFeedNotificationsReducer
	);

	const { isHomeFeedUserSuggestionsLoaded } = useSelector(
		(state) => state.homeFeedUserSuggestionsReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	React.useEffect(() => {
		if (user) {
			dispatch(fetchHomeFeedStories(10));

			dispatch(fetchHomeFeedPosts(5));

			dispatch(fetchHomeFeedNotifications());

			dispatch(fetchHomeFeedUserSuggestions());
		}

		return () => {
			dispatch(resetHomeFeedPosts());
		};
	}, []);

	return (
		<HomePageStyle>
			{isHomeFeedStoriesLoaded &&
			isHomeFeedPostsLoaded &&
			isHomeFeedNotificationsLoaded &&
			isHomeFeedUserSuggestionsLoaded ? (
				<React.Fragment>
					<HomeFeedMainsStyle>
						<HomeFeedStoryUsers />

						<HomeFeedPosts />
					</HomeFeedMainsStyle>

					<HomeFeedSubSectionsStyle>
						<HomeFeedNotifications />

						<HomeFeedUserSuggestions />
					</HomeFeedSubSectionsStyle>
				</React.Fragment>
			) : (
				<Loader isLoaderAbsolute={true} />
			)}
		</HomePageStyle>
	);
};

export default HomePage;
