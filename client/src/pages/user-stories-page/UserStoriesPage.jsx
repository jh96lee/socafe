import * as React from "react";
import styled from "styled-components";

import UserStory from "./UserStory";
import { Loader } from "../../views/shared";

import { usePagination } from "../../hooks";

import { fetchToken } from "../../utils/cookie/fetchToken";

import { PageStyle } from "../../styles";

const UserStoriesPageStyle = styled(PageStyle)`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 7.8rem);
`;

const UserStoriesPage = () => {
	const {
		contents,
		fetchContents,
		isInitialContentsLoaded,
		isExtraContentsLoading,
		nextAPIEndpoint,
	} = usePagination("/profile/story", 2, false, false);

	React.useEffect(() => {
		const token = fetchToken();

		fetchContents(true, "GET", null, {
			Authorization: `Bearer ${token}`,
		});
	}, []);

	return (
		<UserStoriesPageStyle>
			{isInitialContentsLoaded ? (
				<React.Fragment>
					{contents.map((content, idx) => {
						if (idx === 1) {
							return <UserStory story={content} />;
						}
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</UserStoriesPageStyle>
	);
};

export default UserStoriesPage;
