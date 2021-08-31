import * as React from "react";
import { useSelector } from "react-redux";

import { UserStories, UserStoryPopup } from "../../views/user-stories";
import { Loader } from "../../views/shared";

import {
	fetchedUserStories,
	fetchedExtraUserStories,
	setUserStoriesNextAPIEndpoint,
} from "../../redux/user-stories/userStoriesAction";

import { usePagination, useDropdown } from "../../hooks";

import { fetchToken } from "../../utils/cookie/fetchToken";

import { UserStoriesPageStyle } from "./UserStoriesPageStyle";

const UserStoriesPage = () => {
	const { userStoriesArray, userStoriesNextAPIEndpoint } = useSelector(
		(state) => state.userStoriesReducer
	);

	const {
		fetchContents,
		currentPage,
		setCurrentPage,
		isInitialContentsLoaded,
		isExtraContentsLoading,
	} = usePagination(
		"/profile/story",
		5,
		true,
		true,
		fetchedUserStories,
		fetchedExtraUserStories,
		setUserStoriesNextAPIEndpoint,
		userStoriesNextAPIEndpoint
	);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		const token = fetchToken();

		fetchContents(true, "GET", null, {
			Authorization: `Bearer ${token}`,
		});
	}, []);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (userStoriesArray.length > 0) {
				const token = fetchToken();

				fetchContents(false, "GET", null, {
					Authorization: `Bearer ${token}`,
				});
			}
		}

		afterInitialMount.current = true;
	}, [currentPage]);

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"user-story-trigger",
		"user-story-popup",
		false
	);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<UserStoriesPageStyle id="user-stories-page">
			{isInitialContentsLoaded ? (
				<React.Fragment>
					<h1>Stories</h1>

					<UserStories />

					{isDropdownMenuOpen && (
						<UserStoryPopup setIsDropdownMenuOpen={setIsDropdownMenuOpen} />
					)}

					{userStoriesNextAPIEndpoint === null ||
					userStoriesArray.length === 0 ? null : (
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
		</UserStoriesPageStyle>
	);
};

export default UserStoriesPage;
