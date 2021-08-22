import * as React from "react";
import { useSelector } from "react-redux";

import StorySidebarUser from "./StorySidebarUser";
import { Loader } from "../../shared";

import {
	fetchedUsersStoriesArray,
	fetchedExtraUsersStoriesArray,
	setUsersStoriesNextAPIEndpoint,
} from "../../../redux/story/users-stories/usersStoriesAction";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import { StorySidebarUsersStyle } from "../styles/StorySidebarUsersStyle";

const StorySidebarUsers = () => {
	const {
		usersStoriesArray,
		usersStoriesNextAPIEndpoint,
		usersStoriesErrorMessage,
	} = useSelector((state) => state.usersStoriesReducer);

	const { currentPage, setCurrentPage, isExtraContentsLoading, fetchContents } =
		usePagination(
			"/story/feed",
			2,
			false,
			true,
			fetchedUsersStoriesArray,
			fetchedExtraUsersStoriesArray,
			setUsersStoriesNextAPIEndpoint,
			usersStoriesNextAPIEndpoint
		);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		if (usersStoriesArray && afterInitialMount.current) {
			const token = fetchToken();

			fetchContents(false, "GET", null, {
				Authorization: `Bearer ${token}`,
			});
		}

		afterInitialMount.current = true;
	}, [currentPage]);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<StorySidebarUsersStyle>
			{usersStoriesArray && !usersStoriesErrorMessage ? (
				usersStoriesArray.map(({ storyOwner }, idx) => {
					return (
						<StorySidebarUser storyOwner={storyOwner} storyUserIdx={idx} />
					);
				})
			) : (
				<h1>{usersStoriesErrorMessage && usersStoriesErrorMessage.story}</h1>
			)}

			{usersStoriesNextAPIEndpoint === null ||
			!usersStoriesArray ||
			(usersStoriesArray && usersStoriesNextAPIEndpoint === "") ? null : (
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
		</StorySidebarUsersStyle>
	);
};

export default StorySidebarUsers;
